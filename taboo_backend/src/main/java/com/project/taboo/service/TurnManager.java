package com.project.taboo.service;

import com.project.taboo.model.GameRoom;
import com.project.taboo.model.Team;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
@Service
@RequiredArgsConstructor
public class TurnManager {

    private final RoomService roomService;
    private final SimpMessagingTemplate messagingTemplate;

    private final List<String> wordPool = Arrays.asList(
        "Apple", "Mountain", "River", "Bicycle", "Coffee", "Guitar", "Library", "Camera", "Window", "Rocket",
        "Soccer", "Basketball", "Tennis", "Cricket", "Baseball", "Hockey", "Golf", "Rugby", "Boxing", "Volleyball"
    );

    private final Map<String, ScheduledExecutorService> roomTimers = new ConcurrentHashMap<>();

    public void startTurn(String roomId) {
        GameRoom room = roomService.getRoom(roomId);

        // Cancel existing timer if one is running
        ScheduledExecutorService existingTimer = roomTimers.get(roomId);
        if (existingTimer != null && !existingTimer.isShutdown()) {
            existingTimer.shutdownNow();
        }

        // Generate 5 random words by copying the pool to avoid concurrent modification
        List<String> poolCopy = new ArrayList<>(wordPool);
        Collections.shuffle(poolCopy);
        List<String> turnWords = poolCopy.subList(0, 5);
        room.setCurrentWords(new ArrayList<>(turnWords));
        room.setTimeRemaining(30);

        broadcastRoomUpdate(roomId, room);
        startTimer(roomId);
    }

    private void startTimer(String roomId) {
        ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();
        roomTimers.put(roomId, executor);
        AtomicInteger time = new AtomicInteger(30);

        executor.scheduleAtFixedRate(() -> {
            int current = time.decrementAndGet();
            GameRoom room = roomService.getRoom(roomId);
            room.setTimeRemaining(current);

            // Broadcast timer ticks
            messagingTemplate.convertAndSend("/topic/room/" + roomId + "/timer", current);

            if (current <= 0) {
                executor.shutdown();
                roomTimers.remove(roomId);
                endTurn(roomId);
            }
        }, 1, 1, TimeUnit.SECONDS);
    }

    private void endTurn(String roomId) {
        GameRoom room = roomService.getRoom(roomId);

        // Switch teams
        room.setCurrentTurn(room.getCurrentTurn() == Team.TEAM_A ? Team.TEAM_B : Team.TEAM_A);
        roomService.assignNextClueGiver(room);
        room.setCurrentWords(Collections.emptyList());
        room.setTimeRemaining(30);

        log.info("Turn ended for room {}. Next turn: {}", roomId, room.getCurrentTurn());
        broadcastRoomUpdate(roomId, room);
    }

    private void broadcastRoomUpdate(String roomId, GameRoom room) {
        messagingTemplate.convertAndSend("/topic/room/" + roomId, room);
    }
}