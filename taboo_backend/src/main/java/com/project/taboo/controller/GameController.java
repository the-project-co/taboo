package com.project.taboo.controller;

import com.project.taboo.model.Genre;
import com.project.taboo.model.Team;
import com.project.taboo.service.GameManager;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class GameController {
    private final GameManager gameManager;

    @MessageMapping("/create")
    public void createRoom(@Payload Map<String, String> payload) {
        String hostName = payload.get("name");
        String hostId = payload.get("id");
        gameManager.createRoom(hostName, hostId);
    }

    @MessageMapping("/join")
    public void joinRoom(@Payload Map<String, String> payload) {
        String roomCode = payload.get("roomCode");
        String playerName = payload.get("name");
        String playerId = payload.get("id");
        gameManager.joinRoom(roomCode, playerName, playerId);
    }

    @MessageMapping("/updateTeam/{roomCode}")
    public void updateTeam(@DestinationVariable String roomCode, @Payload Map<String, Object> payload) {
        String playerId = (String) payload.get("playerId");
        Team team = Team.valueOf((String) payload.get("team"));
        gameManager.updatePlayerTeam(roomCode, playerId, team);
    }

    @MessageMapping("/randomizeTeams/{roomCode}")
    public void randomizeTeams(@DestinationVariable String roomCode) {
        gameManager.randomizeTeams(roomCode);
    }

    @MessageMapping("/startGame/{roomCode}")
    public void startGame(@DestinationVariable String roomCode, @Payload Map<String, String> payload) {
        Genre genre = Genre.valueOf(payload.getOrDefault("genre", "ANY"));
        gameManager.startGame(roomCode, genre);
    }

    @MessageMapping("/startTurn/{roomCode}")
    public void startTurn(@DestinationVariable String roomCode) {
        gameManager.startTurn(roomCode);
    }

    @MessageMapping("/submitGuesses/{roomCode}")
    public void submitGuesses(@DestinationVariable String roomCode, @Payload Map<String, String> payload) {
        String playerId = payload.get("playerId");
        String guesses = payload.get("guesses");
        gameManager.submitGuesses(roomCode, playerId, guesses);
    }

    @MessageMapping("/returnToLobby/{roomCode}")
    public void returnToLobby(@DestinationVariable String roomCode) {
        gameManager.returnToLobby(roomCode);
    }
}
