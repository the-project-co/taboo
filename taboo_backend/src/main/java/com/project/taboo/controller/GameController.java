package com.project.taboo.controller;

import com.project.taboo.model.GameRoom;
import com.project.taboo.model.Team;
import com.project.taboo.service.RoomService;
import com.project.taboo.service.TurnManager;
import com.project.taboo.service.GameLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.Map;

@Controller
@RequiredArgsConstructor
public class GameController {

    private final RoomService roomService;
    private final TurnManager turnManager;
    private final GameLogicService gameLogicService;
    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/room/{roomId}/join")
    public void joinRoom(@DestinationVariable String roomId, Map<String, String> payload) {
        String playerName = payload.get("playerName");
        GameRoom room = roomService.joinRoom(roomId, playerName);
        broadcastRoomUpdate(roomId, room);
    }

    @MessageMapping("/room/{roomId}/team")
    public void assignTeam(@DestinationVariable String roomId, Map<String, String> payload) {
        String playerId = payload.get("playerId");
        Team newTeam = Team.valueOf(payload.get("team"));
        GameRoom room = roomService.assignTeam(roomId, playerId, newTeam);
        broadcastRoomUpdate(roomId, room);
    }

    @MessageMapping("/room/{roomId}/randomize")
    public void randomizeTeams(@DestinationVariable String roomId, Map<String, String> payload) {
        String playerId = payload.get("playerId");
        GameRoom room = roomService.randomizeTeams(roomId, playerId);
        broadcastRoomUpdate(roomId, room);
    }

    @MessageMapping("/room/{roomId}/start")
    public void startGame(@DestinationVariable String roomId, Map<String, String> payload) {
        String playerId = payload.get("playerId");
        GameRoom room = roomService.startGame(roomId, playerId);
        broadcastRoomUpdate(roomId, room);
    }

    @MessageMapping("/room/{roomId}/start-turn")
    public void startTurn(@DestinationVariable String roomId) {
        turnManager.startTurn(roomId);
    }

    @MessageMapping("/room/{roomId}/guess")
    public void submitGuess(@DestinationVariable String roomId, Map<String, String> payload) {
        String playerName = payload.get("playerName");
        String guesses = payload.get("guesses");
        gameLogicService.processGuesses(roomId, playerName, guesses);
    }

    private void broadcastRoomUpdate(String roomId, GameRoom room) {
        messagingTemplate.convertAndSend("/topic/room/" + roomId, room);
    }
}