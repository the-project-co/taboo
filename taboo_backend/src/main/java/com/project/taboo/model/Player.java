package com.project.taboo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Player {
    private String id;
    private String name;
    private Team team;
    private boolean isHost;
}