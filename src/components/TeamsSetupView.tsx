/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shuffle, ArrowLeftRight, Play, ArrowLeft, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import { GameRoom, Player } from "../types";

interface TeamsSetupViewProps {
  room: GameRoom;
  currentPlayerId: string;
  onAssignTeam: (playerId: string, team: "A" | "B" | null) => void;
  onAutoBalance: () => void;
  onStartGame: () => void;
  onResetGame: () => void;
}

export default function TeamsSetupView({
  room,
  currentPlayerId,
  onAssignTeam,
  onAutoBalance,
  onStartGame,
  onResetGame,
}: TeamsSetupViewProps) {
  const me = room.players.find((p) => p.id === currentPlayerId);
  const isHost = me?.isHost || false;

  const teamAPlayers = room.players.filter((p) => p.team === "A");
  const teamBPlayers = room.players.filter((p) => p.team === "B");
  const unassignedPlayers = room.players.filter((p) => p.team === null);

  const canStart = teamAPlayers.length > 0 && teamBPlayers.length > 0;

  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-6 min-h-[85vh] space-y-8 flex flex-col justify-between">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <h2 className="text-2xl font-black bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent glow">
            👫 Pitching Teams
          </h2>
          <p className="text-slate-300 text-xs font-mono mt-1">
            Assign every player to either team to start the turn rotation!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            id="back-lobby-btn"
            onClick={onResetGame}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border border-white/15 rounded-xl hover:bg-white/20 hover:text-white transition-all text-xs text-slate-200 font-mono font-bold backdrop-blur-sm cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Lobby
          </button>

          {isHost && (
            <button
              type="button"
              id="autobalance-teams-btn"
              onClick={onAutoBalance}
              className="flex items-center gap-1.5 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/35 hover:text-white border border-purple-500/30 text-purple-200 font-black uppercase tracking-wider rounded-xl transition-all text-xs backdrop-blur-sm cursor-pointer shadow-md"
            >
              <Shuffle className="w-3.5 h-3.5" /> Auto Balance
            </button>
          )}
        </div>
      </div>

      {/* Main Boards layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* TEAM A (Chai Lovers) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-5 shadow-xl relative bg-amber-500/5 border-amber-500/20"
        >
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-t-3xl" />
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-4">
            <h3 className="text-amber-300 font-black tracking-wide text-sm font-mono flex items-center gap-1.5 glow-orange">
              ☕ TEAM CHAI ({teamAPlayers.length})
            </h3>
            <span className="text-[10px] bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded-full font-mono border border-amber-500/25">
              Saffron Accent
            </span>
          </div>

          <div className="space-y-2 min-h-[160px] max-h-[300px] overflow-y-auto custom-scrollbar">
            {teamAPlayers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-28 text-center text-slate-400 border border-amber-500/30 border-dashed rounded-2xl p-4 backdrop-blur-sm">
                <span className="text-xl">☕</span>
                <span className="text-xs font-mono mt-1">Empty team!</span>
              </div>
            ) : (
              teamAPlayers.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{p.avatar}</span>
                    <span className="text-xs font-bold truncate max-w-[100px] text-whiteHeading">{p.name}</span>
                  </div>

                  {isHost && (
                    <button
                      type="button"
                      id={`p-to-b-${p.id}`}
                      onClick={() => onAssignTeam(p.id, "B")}
                      className="p-1.5 hover:bg-white/10 text-slate-350 hover:text-white rounded-lg transition-all"
                      title="Move to Team Samosa"
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5 text-rose-300" />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </motion.div>on        {/* UNASSIGNED / SPECTATORS POOL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-5 shadow-xl border-white/10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
            <h3 className="text-slate-200 font-bold tracking-wide text-xs font-mono">
              👥 UNASSIGNED ({unassignedPlayers.length})
            </h3>
          </div>

          <div className="space-y-2 min-h-[160px] max-h-[300px] overflow-y-auto custom-scrollbar">
            {unassignedPlayers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-28 text-center text-slate-450 rounded-2xl p-4 border border-white/10 border-dashed backdrop-blur-sm">
                <span className="text-xs font-mono">All players assigned!</span>
              </div>
            ) : (
              unassignedPlayers.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{p.avatar}</span>
                    <span className="text-xs font-bold truncate max-w-[100px] text-white">{p.name}</span>
                  </div>

                  {isHost && (
                    <div className="flex gap-1">
                      <button
                        type="button"
                        id={`p-un-to-a-${p.id}`}
                        onClick={() => onAssignTeam(p.id, "A")}
                        className="bg-amber-500/20 border border-amber-500/30 hover:bg-amber-400 hover:text-slate-950 text-amber-300 text-[10px] font-black uppercase px-2 py-1 rounded transition-all font-mono backdrop-blur-sm shadow shadow-amber-550/10 cursor-pointer"
                      >
                        A
                      </button>
                      <button
                        type="button"
                        id={`p-un-to-b-${p.id}`}
                        onClick={() => onAssignTeam(p.id, "B")}
                        className="bg-rose-500/20 border border-rose-500/30 hover:bg-rose-400 hover:text-white text-rose-300 text-[10px] font-black uppercase px-2 py-1 rounded transition-all font-mono backdrop-blur-sm shadow shadow-rose-550/10 cursor-pointer"
                      >
                        B
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </motion.div>ot        {/* TEAM B (Samosa Crew) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-5 shadow-xl relative bg-rose-500/5 border-rose-500/20"
        >
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-rose-500 to-indigo-500 rounded-t-3xl" />
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 mb-4">
            <h3 className="text-rose-300 font-black tracking-wide text-sm font-mono flex items-center gap-1.5 glow-pink">
              🥟 TEAM SAMOSA ({teamBPlayers.length})
            </h3>
            <span className="text-[10px] bg-rose-500/20 text-rose-200 px-2 py-0.5 rounded-full font-mono border border-rose-500/25">
              Rose Accent
            </span>
          </div>

          <div className="space-y-2 min-h-[160px] max-h-[300px] overflow-y-auto custom-scrollbar">
            {teamBPlayers.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-28 text-center text-slate-400 border border-rose-500/30 border-dashed rounded-2xl p-4 backdrop-blur-sm">
                <span className="text-xl">🥟</span>
                <span className="text-xs font-mono mt-1">Empty team!</span>
              </div>
            ) : (
              teamBPlayers.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{p.avatar}</span>
                    <span className="text-xs font-bold truncate max-w-[100px] text-white">{p.name}</span>
                  </div>

                  {isHost && (
                    <button
                      type="button"
                      id={`p-to-a-${p.id}`}
                      onClick={() => onAssignTeam(p.id, "A")}
                      className="p-1.5 hover:bg-white/10 text-slate-350 hover:text-white rounded-lg transition-all"
                      title="Move to Team Chai"
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </motion.div>

      </div>

      {/* Starting trigger panel */}
      <div className="mt-8 pt-6 border-t border-white/10 max-w-xl mx-auto w-full">
        {isHost ? (
          <div>
            {!canStart && (
              <div className="flex items-center gap-2 text-rose-200 bg-rose-500/10 p-3.5 border border-rose-500/30 rounded-2xl text-xs mb-4 font-mono backdrop-blur-sm">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-450" />
                <span>Need at least one team member in both Team Chai and Team Samosa to kick off!</span>
              </div>
            )}
            <button
              type="button"
              id="team-setup-start-btn"
              disabled={!canStart}
              onClick={onStartGame}
              className="w-full py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 hover:opacity-95 disabled:opacity-35 disabled:cursor-not-allowed text-white font-black uppercase tracking-wider rounded-2xl shadow-xl transition-all text-sm flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer glow"
            >
              <Play className="w-4 h-4 text-white fill-white animate-pulse" /> Start Desi Battle!
            </button>
          </div>
        ) : (
          <div className="text-center bg-white/5 p-4 border border-white/10 rounded-2xl font-mono text-xs text-slate-205 backdrop-blur-sm">
            ⏳ The **Host** is sorting everyone into teams. Unassigned players won't be able to play as the Describer or active Guesser!
          </div>
        )}
      </div>

    </div>
  );
}
