package com.project.taboo.model;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;

@Data
@Builder
public class GameRoom {
    private String id;
    private RoomState state;
    private final List<Player> players = new CopyOnWriteArrayList<>();

    @Builder.Default
    private final AtomicInteger teamAScore = new AtomicInteger(0);

    @Builder.Default
    private final AtomicInteger teamBScore = new AtomicInteger(0);

    @Builder.Default
    private Team currentTurn = Team.TEAM_A;

    private String currentClueGiverId;

    @Builder.Default
    private int timeRemaining = 30;

    @Builder.Default
    private List<String> currentWords = new ArrayList<>();
}