package com.project.taboo.service;

import com.project.taboo.model.GameRoom;
import com.project.taboo.model.GuessLogEntry;
import com.project.taboo.model.GuessResult;
import com.project.taboo.model.Player;
import com.project.taboo.model.Team;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GameLogicService {

    private final RoomService roomService;
    private final SimpMessagingTemplate messagingTemplate;

    public void processGuesses(String roomId, String playerName, String guessesStr) {
        GameRoom room = roomService.getRoom(roomId);
        List<String> targetWords = room.getCurrentWords();

        if (targetWords == null || targetWords.isEmpty()) {
            return;
        }

        // Validate the player
        Player submitter = room.getPlayers().stream()
                .filter(p -> p.getName().equals(playerName))
                .findFirst()
                .orElse(null);

        if (submitter == null) {
            log.warn("Player {} not found in room {}", playerName, roomId);
            return; // Not in the room
        }

        if (submitter.getTeam() != room.getCurrentTurn()) {
            log.warn("Player {} is not on the active team in room {}", playerName, roomId);
            return; // Not their turn
        }

        if (submitter.getId().equals(room.getCurrentClueGiverId())) {
            log.warn("Player {} is the clue giver and cannot submit guesses in room {}", playerName, roomId);
            return; // Clue giver cannot guess
        }

        String[] guesses = guessesStr.split(",");
        for (String guess : guesses) {
            String trimmedGuess = guess.trim();
            if (trimmedGuess.isEmpty()) continue;

            GuessResult result;

            // Synchronize the mutation of the shared targetWords array to prevent ConcurrentModificationException
            synchronized (targetWords) {
                result = evaluateAndRemoveGuess(trimmedGuess, targetWords);
            }

            if (result == GuessResult.CORRECT) {
                if (room.getCurrentTurn() == Team.TEAM_A) {
                    room.getTeamAScore().addAndGet(2);
                } else {
                    room.getTeamBScore().addAndGet(2);
                }
            } else if (result == GuessResult.PARTIAL) {
                if (room.getCurrentTurn() == Team.TEAM_A) {
                    room.getTeamAScore().addAndGet(1);
                } else {
                    room.getTeamBScore().addAndGet(1);
                }
            }

            GuessLogEntry logEntry = GuessLogEntry.builder()
                    .playerName(playerName)
                    .guess(trimmedGuess)
                    .result(result)
                    .build();

            // Broadcast guess log
            messagingTemplate.convertAndSend("/topic/room/" + roomId + "/guesses", logEntry);
        }

        // Broadcast updated room state
        messagingTemplate.convertAndSend("/topic/room/" + roomId, room);
    }

    private GuessResult evaluateAndRemoveGuess(String guess, List<String> targetWords) {
        String lowerGuess = guess.toLowerCase();

        // Use Iterator to safely remove the word if matched correctly
        Iterator<String> iterator = targetWords.iterator();
        while (iterator.hasNext()) {
            String target = iterator.next();
            String lowerTarget = target.toLowerCase();

            if (lowerGuess.equals(lowerTarget)) {
                iterator.remove(); // Remove correct word to prevent multiple points
                return GuessResult.CORRECT;
            }

            // Partial match: substring match of >75% of the word length
            if (lowerTarget.contains(lowerGuess) && lowerGuess.length() > (lowerTarget.length() * 0.75)) {
                iterator.remove(); // Remove word for partial match as well to prevent exploit
                return GuessResult.PARTIAL;
            }
            if (lowerGuess.contains(lowerTarget) && lowerTarget.length() > (lowerGuess.length() * 0.75)) {
                iterator.remove(); // Remove word for partial match as well to prevent exploit
                return GuessResult.PARTIAL;
            }
        }

        return GuessResult.INCORRECT;
    }
}