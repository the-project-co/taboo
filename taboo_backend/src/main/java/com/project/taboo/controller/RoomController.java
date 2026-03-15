package com.project.taboo.controller;

import com.project.taboo.model.GameRoom;
import com.project.taboo.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RoomController {

    private final RoomService roomService;

    @PostMapping
    public ResponseEntity<GameRoom> createRoom(@RequestBody Map<String, String> request) {
        String hostName = request.getOrDefault("hostName", "Host");
        GameRoom room = roomService.createRoom(hostName);
        return ResponseEntity.ok(room);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<GameRoom> getRoom(@PathVariable String roomId) {
        return ResponseEntity.ok(roomService.getRoom(roomId));
    }
}