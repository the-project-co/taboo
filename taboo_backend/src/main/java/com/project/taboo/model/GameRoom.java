package com.project.taboo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameRoom {
    private String roomCode;
    @Builder.Default
    private List<Player> players = new CopyOnWriteArrayList<>();
    private GameState state;
    private Team currentTurnTeam;
    private String currentClueGiverId;
    @Builder.Default
    private Genre genre = Genre.ANY;
    private int scoreA;
    private int scoreB;
    private int timer;
    @Builder.Default
    private List<String> currentWords = new ArrayList<>();
    private boolean turnActive;
}
