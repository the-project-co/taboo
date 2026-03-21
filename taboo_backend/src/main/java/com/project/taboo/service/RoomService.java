package com.project.taboo.service;

import com.project.taboo.model.GameRoom;
import com.project.taboo.model.Player;
import com.project.taboo.model.RoomState;
import com.project.taboo.model.Team;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Slf4j
@Service
public class RoomService {
    private final Map<String, GameRoom> rooms = new ConcurrentHashMap<>();

    public GameRoom createRoom(String hostName) {
        String roomId = generateRoomId();
        GameRoom room = GameRoom.builder()
                .id(roomId)
                .state(RoomState.LOBBY)
                .build();

        Player host = Player.builder()
                .id(UUID.randomUUID().toString())
                .name(hostName)
                .team(Team.UNASSIGNED)
                .isHost(true)
                .build();

        room.getPlayers().add(host);
        rooms.put(roomId, room);

        log.info("Created room {} by host {}", roomId, hostName);
        return room;
    }

    public GameRoom joinRoom(String roomId, String playerName) {
        GameRoom room = getRoom(roomId);
        if (room.getState() != RoomState.LOBBY) {
            throw new IllegalStateException("Cannot join room that is not in LOBBY state");
        }

        Player player = Player.builder()
                .id(UUID.randomUUID().toString())
                .name(playerName)
                .team(Team.UNASSIGNED)
                .isHost(false)
                .build();

        room.getPlayers().add(player);
        log.info("Player {} joined room {}", playerName, roomId);
        return room;
    }

    public GameRoom assignTeam(String roomId, String playerId, Team newTeam) {
        GameRoom room = getRoom(roomId);
        room.getPlayers().stream()
                .filter(p -> p.getId().equals(playerId))
                .findFirst()
                .ifPresent(p -> p.setTeam(newTeam));
        return room;
    }

    public GameRoom randomizeTeams(String roomId, String requesterId) {
        GameRoom room = getRoom(roomId);
        validateHost(room, requesterId);

        List<Player> players = room.getPlayers();
        Collections.shuffle(players);

        int mid = players.size() / 2;
        for (int i = 0; i < players.size(); i++) {
            if (i < mid) {
                players.get(i).setTeam(Team.TEAM_A);
            } else if (i < mid * 2) {
                players.get(i).setTeam(Team.TEAM_B);
            } else {
                 players.get(i).setTeam(Math.random() < 0.5 ? Team.TEAM_A : Team.TEAM_B);
            }
        }
        log.info("Randomized teams for room {}", roomId);
        return room;
    }

    public GameRoom startGame(String roomId, String requesterId) {
        GameRoom room = getRoom(roomId);
        validateHost(room, requesterId);

        room.setState(RoomState.PLAYING);
        room.setCurrentTurn(Team.TEAM_A);
        assignNextClueGiver(room);
        log.info("Started game for room {}", roomId);
        return room;
    }

    private void validateHost(GameRoom room, String requesterId) {
        boolean isHost = room.getPlayers().stream()
                .anyMatch(p -> p.getId().equals(requesterId) && p.isHost());
        if (!isHost) {
            throw new IllegalStateException("Only the host can perform this action");
        }
    }

    public void assignNextClueGiver(GameRoom room) {
        List<Player> teamPlayers = room.getPlayers().stream()
                .filter(p -> p.getTeam() == room.getCurrentTurn())
                .collect(Collectors.toList());

        if (teamPlayers.isEmpty()) return;

        // Simple strategy: random player from the team.
        // Can be improved to round-robin
        Collections.shuffle(teamPlayers);
        room.setCurrentClueGiverId(teamPlayers.get(0).getId());
    }

    public GameRoom getRoom(String roomId) {
        GameRoom room = rooms.get(roomId);
        if (room == null) {
            throw new IllegalArgumentException("Room not found: " + roomId);
        }
        return room;
    }

    private String generateRoomId() {
        return UUID.randomUUID().toString().substring(0, 6).toUpperCase();
    }
}