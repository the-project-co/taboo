/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Trophy, Shuffle, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { GameRoom } from "../types";

interface RoundEndViewProps {
  room: GameRoom;
  currentPlayerId: string;
  onNextTurn: () => void;
}

export default function RoundEndView({ room, currentPlayerId, onNextTurn }: RoundEndViewProps) {
  const me = room.players.find((p) => p.id === currentPlayerId);
  const isHost = me?.isHost || false;

  const currentTurn = room.turn;
  if (!currentTurn) return null;

  // Get words and count stats
  const words = currentTurn.words;
  const correctWords = words.filter((w) => w.status === "guessed");
  const skippedWords = words.filter((w) => w.status === "skipped");
  const fouledWords = words.filter((w) => w.status === "fouled");

  // Sum scores gained this turn
  let pointsGained = correctWords.length;
  correctWords.forEach(w => {
    if (w.guessedExactly) pointsGained += 1; // bonus +1
  });
  pointsGained -= fouledWords.length; // -1 penalty

  const activeTeamLabel = currentTurn.team === "A" ? "☕ Team Chai (A)" : "🥟 Team Samosa (B)";

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-8 min-h-[85vh] space-y-6 flex flex-col justify-between">
      
      {/* Turn Overview Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="bg-amber-500/10 text-amber-300 font-mono text-[10px] px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest font-black select-none">
          Turn Finished
        </span>
        <h2 className="text-3xl font-black text-white mt-2 leading-tight">
          Turn Results for {activeTeamLabel}
        </h2>
        <p className="text-slate-400 text-xs font-mono mt-1">
          Review score outcomes and prepare for the next round
        </p>
      </motion.div>

      {/* Main Scoreboard & detailed card results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* SCORE BREAKDOWN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200 border-b border-white/10 pb-2 mb-4 font-bold">
              📊 Score Outcome
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-350 text-xs font-mono">Guesses Correct:</span>
                <span className="text-xs font-mono text-emerald-300 font-black">+{correctWords.length} pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-350 text-xs font-mono">Spelling Bonuses:</span>
                <span className="text-xs font-mono text-amber-300 font-black">
                  +{correctWords.filter(w => w.guessedExactly).length} pts (exact spelling)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-350 text-xs font-mono">Fouls / Taboos said:</span>
                <span className="text-xs font-mono text-rose-300 font-bold">-{fouledWords.length} pts</span>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-slate-200 font-mono text-xs font-bold uppercase">Net Delta:</span>
                <span className={`text-xl font-mono font-black ${pointsGained >= 0 ? "text-emerald-300 glow" : "text-rose-300"}`}>
                  {pointsGained >= 0 ? `+${pointsGained}` : pointsGained} pts
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mt-6 md:mt-0 backdrop-blur-sm shadow-sm">
            <h4 className="text-[10px] uppercase text-slate-300 font-mono font-bold block mb-2 select-none tracking-wider">
              Match Standings
            </h4>
            <div className="flex justify-between items-center text-sm font-bold font-mono">
              <div className="flex items-center gap-1.5 text-amber-300">
                <span>☕ Chai:</span>
                <span>{room.teamScores.A} / {room.settings.winningScore}</span>
              </div>
              <div className="flex items-center gap-1.5 text-rose-300">
                <span>🥟 Samosa:</span>
                <span>{room.teamScores.B} / {room.settings.winningScore}</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* COMPLETED CARDS BREAKDOWN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="glass p-6 shadow-xl flex flex-col"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200 border-b border-white/10 pb-2 mb-3.5 font-bold">
            📝 Card History
          </h3>

          <div className="space-y-2 max-h-[260px] overflow-y-auto custom-scrollbar pr-1 flex-1">
            {words.map((w) => {
              const isCorrect = w.status === "guessed";
              const isFoul = w.status === "fouled";
              const isSkip = w.status === "skipped";

              return (
                <div
                  key={w.id}
                  className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm shadow-sm"
                >
                  <div>
                    <h4 className="text-xs font-black text-slate-200">{w.word}</h4>
                    <span className="text-[9px] text-slate-355 font-mono uppercase">{w.category}</span>
                  </div>

                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-500/30 font-bold tracking-wider">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" /> GUESS
                      </span>
                    ) : isFoul ? (
                      <span className="flex items-center gap-1 text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-mono border border-rose-500/30 font-bold tracking-wider">
                        <XCircle className="w-3.5 h-3.5 shrink-0" /> TABOO
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded-full font-mono border border-white/10 font-bold">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 animate-pulse text-amber-400" /> PASSED
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* FOOTER ACTION PANEL */}
      <div className="pt-6 border-t border-white/10 text-center max-w-sm mx-auto w-full">
        {isHost ? (
          <button
            type="button"
            id="next-turn-btn"
            onClick={onNextTurn}
            className="w-full py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 hover:opacity-95 text-white font-black uppercase tracking-wider rounded-2xl shadow-xl transition-all text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer glow"
          >
            Start Next Turn <ArrowRight className="w-4 h-4 text-white animate-pulse" />
          </button>
        ) : (
          <div className="bg-white/5 p-4 border border-white/10 rounded-2xl font-mono text-xs text-slate-205 select-none animate-pulse backdrop-blur-sm shadow">
            ⏳ Waiting for your **Host** to select the next describer and launch the turn cards. Hydrate yourself while waiting, yaar!
          </div>
        )}
      </div>

    </div>
  );
}
