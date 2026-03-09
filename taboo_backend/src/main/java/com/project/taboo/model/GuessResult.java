package com.project.taboo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GuessResult {
    private String playerId;
    private String playerName;
    private String guess;
    private GuessStatus status; // CORRECT, PARTIAL, WRONG
}
