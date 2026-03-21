package com.project.taboo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GuessLogEntry {
    private String playerName;
    private String guess;
    private GuessResult result;
}