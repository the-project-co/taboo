/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Sparkles, Radio, HelpCircle, Activity, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { GameRoom, Player } from "./types";
import LandingView from "./components/LandingView";
import LobbyView from "./components/LobbyView";
import TeamsSetupView from "./components/TeamsSetupView";
import GameboardView from "./components/GameboardView";
import RoundEndView from "./components/RoundEndView";
import GameOverView from "./components/GameOverView";

// Initialize socket client (connects to the same origin automatically)
let socket: Socket;

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [room, setRoom] = useState<GameRoom | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("desi-taboo-dark-mode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("desi-taboo-dark-mode", String(isDarkMode));
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Dynamic connection handling
    socket = io({
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socket.on("connect", () => {
      setIsConnected(true);
      setError(null);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("room_state", (updatedRoom: GameRoom) => {
      setRoom(updatedRoom);
      setIsLoading(false);
      
      // Update local player state in case teams/ready/host changes
      if (player) {
         const me = updatedRoom.players.find(p => p.name === player.name);
         if (me) setPlayer(me);
      }
    });

    socket.on("error_msg", (msg: string) => {
      setError(msg);
      setIsLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Action methods
  const handleCreateRoom = (name: string, avatar: string) => {
    setError(null);
    setIsLoading(true);
    socket.emit("create_room", { name, avatar }, (res: any) => {
      if (res.success) {
        setPlayer(res.player);
      } else {
        setError(res.error);
        setIsLoading(false);
      }
    });
  };

  const handleJoinRoom = (code: string, name: string, avatar: string) => {
    setError(null);
    setIsLoading(true);
    socket.emit("join_room", { code, name, avatar }, (res: any) => {
      if (res.success) {
        setPlayer(res.player);
      } else {
        setError(res.error);
        setIsLoading(false);
      }
    });
  };

  const handleToggleReady = () => {
    socket.emit("toggle_ready");
  };

  const handleUpdateSettings = (winningScore: number, roundTimer: number, categories: string[], useRestrictedWords?: boolean) => {
    socket.emit("update_settings", { winningScore, roundTimer, categories, useRestrictedWords });
  };

  const handleAssignTeam = (playerId: string, team: "A" | "B" | null) => {
    socket.emit("assign_team", { playerId, team });
  };

  const handleAutoBalance = () => {
    socket.emit("auto_balance");
  };

  const handleGoToTeamsSetup = () => {
    socket.emit("goto_teams_setup");
  };

  const handleStartGame = () => {
    socket.emit("start_game");
  };

  const handleNextTurn = () => {
    socket.emit("next_turn");
  };

  const handleResetGame = () => {
    socket.emit("reset_game");
  };

  return (
    <div className="text-white min-h-screen font-sans selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* Background pattern overlay for frosted glass texturing */}
      <div className="pattern-overlay" />

      {/* STICKY ACCENT TOP HEADER */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50 px-4 py-3 shadow-lg select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500 flex items-center justify-center font-black text-sm text-white shadow-md glow">
              D
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent glow">
                Desi Taboo
              </span>
              <span className="text-[9px] bg-white/15 border border-white/20 text-white/90 font-mono px-1.5 py-0.2 rounded ml-1.5 uppercase font-bold tracking-wider">
                v1.2 Glass
              </span>
            </div>
          </div>

          {/* Player details pill */}
          <div className="flex items-center gap-3 font-mono text-xs">
            {room && (
              <div className="flex items-center gap-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full px-3 py-1 text-indigo-200 backdrop-blur font-bold tracking-wider">
                <span>ROOM: {room.code}</span>
              </div>
            )}
            
            {player && (
              <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-slate-100 backdrop-blur">
                <span className="text-base">{player.avatar}</span>
                <span className="font-bold truncate max-w-[80px]">{player.name}</span>
                {player.team && (
                  <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide ml-0.5 ${
                    player.team === "A" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  }`}>
                    Team {player.team}
                  </span>
                )}
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Switch to Vibrant Lit Mode" : "Switch to Midnight Dark Mode"}
              className="flex items-center justify-center p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/12 text-white/90 hover:text-white transition-all cursor-pointer shadow-sm"
              id="theme-toggle"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {/* Socket Status */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] uppercase font-bold tracking-wider select-none backdrop-blur ${
              isConnected 
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300" 
                : "bg-rose-500/20 border-rose-500/30 text-rose-300 animate-pulse"
            }`}>
              <Radio className="w-3.5 h-3.5" />
              <span>{isConnected ? "Connected" : "Offline"}</span>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN VIEWPORT BODY */}
      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!room ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LandingView
                onCreateRoom={handleCreateRoom}
                onJoinRoom={handleJoinRoom}
                error={error || undefined}
                isLoading={isLoading}
              />
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              {room.state === "Lobby" && (
                <LobbyView
                  room={room}
                  currentPlayerId={player?.id || ""}
                  onToggleReady={handleToggleReady}
                  onUpdateSettings={handleUpdateSettings}
                  onGoToTeamsSetup={handleGoToTeamsSetup}
                />
              )}

              {room.state === "TeamsSetup" && (
                <TeamsSetupView
                  room={room}
                  currentPlayerId={player?.id || ""}
                  onAssignTeam={handleAssignTeam}
                  onAutoBalance={handleAutoBalance}
                  onStartGame={handleStartGame}
                  onResetGame={handleResetGame}
                />
              )}

              {room.state === "Gameplay" && (
                <GameboardView
                  room={room}
                  currentPlayerId={player?.id || ""}
                  socket={socket}
                />
              )}

              {room.state === "RoundEnd" && (
                <RoundEndView
                  room={room}
                  currentPlayerId={player?.id || ""}
                  onNextTurn={handleNextTurn}
                />
              )}

              {room.state === "GameOver" && (
                <GameOverView
                  room={room}
                  currentPlayerId={player?.id || ""}
                  onResetGame={handleResetGame}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Back connection error banner */}
      {error && !room && (
        <div className="absolute top-16 left-0 right-0 z-40 px-4 max-w-md mx-auto">
          <div className="bg-rose-500/15 border border-rose-500/20 text-rose-300 rounded-xl p-3 font-mono text-[11px] flex gap-2 items-center leading-relaxed">
            <Activity className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
}
