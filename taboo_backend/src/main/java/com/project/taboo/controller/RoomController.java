package com.project.taboo.controller;

import com.project.taboo.model.GameRoom;
import com.project.taboo.service.GameManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RoomController {
    private final GameManager gameManager;

    @PostMapping("/create")
    public GameRoom createRoom(@RequestBody Map<String, String> payload) {
        return gameManager.createRoom(payload.get("name"), payload.get("id"));
    }

    @PostMapping("/join/{roomCode}")
    public GameRoom joinRoom(@PathVariable String roomCode, @RequestBody Map<String, String> payload) {
        return gameManager.joinRoom(roomCode, payload.get("name"), payload.get("id"));
    }
}
