package com.project.taboo.service;

import com.project.taboo.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

import java.util.*;
import java.util.concurrent.*;

@Service
@RequiredArgsConstructor
public class GameManager {
    private final Map<String, GameRoom> rooms = new ConcurrentHashMap<>();
    private final SimpMessagingTemplate messagingTemplate;
    private final WordService wordService;
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(4);

    public GameRoom createRoom(String hostName, String hostId) {
        String roomCode = generateRoomCode();
        // Sanitize input to prevent Stored XSS via WebSocket broadcasts
        Player host = Player.builder()
                .id(HtmlUtils.htmlEscape(hostId != null ? hostId : ""))
                .name(HtmlUtils.htmlEscape(hostName != null ? hostName : ""))
                .team(Team.UNASSIGNED)
                .isHost(true)
                .build();

        GameRoom room = GameRoom.builder()
                .roomCode(roomCode) 
                .state(GameState.LOBBY)
                .players(new CopyOnWriteArrayList<>(List.of(host)))
                .genre(Genre.ANY)
                .build();

        rooms.put(roomCode, room);
        return room;
    }

    public GameRoom joinRoom(String roomCode, String playerName, String playerId) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) throw new RuntimeException("Room not found");
        if (room.getState() != GameState.LOBBY) throw new RuntimeException("Game already started");

        // Sanitize input to prevent Stored XSS via WebSocket broadcasts
        Player player = Player.builder()
                .id(HtmlUtils.htmlEscape(playerId != null ? playerId : ""))
                .name(HtmlUtils.htmlEscape(playerName != null ? playerName : ""))
                .team(Team.UNASSIGNED)
                .isHost(false)
                .build();

        room.getPlayers().add(player);
        broadcastRoomUpdate(roomCode);
        return room;
    }

    public void updatePlayerTeam(String roomCode, String playerId, Team team) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) return;
        room.getPlayers().stream()
                .filter(p -> p.getId().equals(playerId))
                .findFirst()
                .ifPresent(p -> p.setTeam(team));
        broadcastRoomUpdate(roomCode);
    }

    public void randomizeTeams(String roomCode) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) return;
        List<Player> players = new ArrayList<>(room.getPlayers());
        Collections.shuffle(players);
        for (int i = 0; i < players.size(); i++) {
            players.get(i).setTeam(i % 2 == 0 ? Team.A : Team.B);
        }
        broadcastRoomUpdate(roomCode);
    }

    public void startGame(String roomCode, Genre genre) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) return;

        // Auto-assign any UNASSIGNED players before starting
        List<Player> players = room.getPlayers();
        for (int i = 0; i < players.size(); i++) {
            Player p = players.get(i);
            if (p.getTeam() == Team.UNASSIGNED) {
                // Balance assignment
                long countA = players.stream().filter(pl -> pl.getTeam() == Team.A).count();
                long countB = players.stream().filter(pl -> pl.getTeam() == Team.B).count();
                p.setTeam(countA <= countB ? Team.A : Team.B);
            }
        }

        room.setState(GameState.PLAYING);
        room.setGenre(genre);
        room.setCurrentTurnTeam(Team.A);
        room.setScoreA(0);
        room.setScoreB(0);
        room.setTurnActive(false);
        selectClueGiver(room);
        broadcastRoomUpdate(roomCode);
        System.out.println("Game started in room: " + roomCode + " with genre: " + genre);
    }

    private void selectClueGiver(GameRoom room) {
        List<Player> teamPlayers = room.getPlayers().stream()
                .filter(p -> p.getTeam() == room.getCurrentTurnTeam())
                .toList();
        if (teamPlayers.isEmpty()) return;
        // Simple selection for now
        room.setCurrentClueGiverId(teamPlayers.get(new Random().nextInt(teamPlayers.size())).getId());
    }

    public void startTurn(String roomCode) {
        GameRoom room = rooms.get(roomCode);
        if (room == null || room.isTurnActive()) return;

        room.setTurnActive(true);
        room.setTimer(30);
        room.setCurrentWords(wordService.getRandomWords(room.getGenre(), 5));

        broadcastRoomUpdate(roomCode);
        startTimer(roomCode);
    }

    private void startTimer(String roomCode) {
        scheduler.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
                GameRoom room = rooms.get(roomCode);
                if (room == null || !room.isTurnActive()) {
                    throw new RuntimeException("Timer stopped");
                }
                room.setTimer(room.getTimer() - 1);
                messagingTemplate.convertAndSend("/topic/timer/" + roomCode, room.getTimer());

                if (room.getTimer() <= 0) {
                    endTurn(roomCode);
                    throw new RuntimeException("Turn ended");
                }
            }
        }, 1, 1, TimeUnit.SECONDS);
    }

    public void submitGuesses(String roomCode, String playerId, String guesses) {
        GameRoom room = rooms.get(roomCode);
        if (room == null || !room.isTurnActive()) return;

        // Check if player is on the active team but NOT the clue giver
        Optional<Player> player = room.getPlayers().stream().filter(p -> p.getId().equals(playerId)).findFirst();
        if (player.isEmpty() || player.get().getTeam() != room.getCurrentTurnTeam() || player.get().getId().equals(room.getCurrentClueGiverId())) {
            return;
        }

        String[] guessList = guesses.split(",");
        int points = 0;
        for (String guess : guessList) {
            String trimmedGuess = guess.trim().toLowerCase();
            for (String target : room.getCurrentWords()) {
                double score = calculateSimilarity(trimmedGuess, target.toLowerCase());
                if (score == 1.0) points += 2;
                else if (score >= 0.75) points += 1;
            }
        }

        if (room.getCurrentTurnTeam() == Team.A) room.setScoreA(room.getScoreA() + points);
        else room.setScoreB(room.getScoreB() + points);

        if (room.getScoreA() >= 20 || room.getScoreB() >= 20) {
            room.setState(GameState.ENDED);
            room.setTurnActive(false);
        }

        broadcastRoomUpdate(roomCode);
    }

    public void returnToLobby(String roomCode) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) return;
        room.setState(GameState.LOBBY);
        room.setScoreA(0);
        room.setScoreB(0);
        room.setTurnActive(false);
        room.getCurrentWords().clear();
        broadcastRoomUpdate(roomCode);
    }

    private void endTurn(String roomCode) {
        GameRoom room = rooms.get(roomCode);
        if (room == null) return;
        room.setTurnActive(false);
        room.setCurrentTurnTeam(room.getCurrentTurnTeam() == Team.A ? Team.B : Team.A);
        selectClueGiver(room);
        broadcastRoomUpdate(roomCode);
    }

    private void broadcastRoomUpdate(String roomCode) {
        messagingTemplate.convertAndSend("/topic/room/" + roomCode, rooms.get(roomCode));
    }

    private String generateRoomCode() {
        return UUID.randomUUID().toString().substring(0, 6).toUpperCase();
    }

    private double calculateSimilarity(String s1, String s2) {
        if (s1.equals(s2)) return 1.0;
        int distance = levenshteinDistance(s1, s2);
        int maxLength = Math.max(s1.length(), s2.length());
        return 1.0 - (double) distance / maxLength;
    }

    private int levenshteinDistance(String s1, String s2) {
        int[][] dp = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 0; i <= s1.length(); i++) dp[i][0] = i;
        for (int j = 0; j <= s2.length(); j++) dp[0][j] = j;
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                int cost = (s1.charAt(i - 1) == s2.charAt(j - 1)) ? 0 : 1;
                dp[i][j] = Math.min(Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1), dp[i - 1][j - 1] + cost);
            }
        }
        return dp[s1.length()][s2.length()];
    }
}
