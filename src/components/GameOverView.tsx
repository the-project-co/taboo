/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Sparkles, Trophy, RotateCcw, Medal, Hourglass, Laugh, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { GameRoom } from "../types";

interface GameOverViewProps {
  room: GameRoom;
  currentPlayerId: string;
  onResetGame: () => void;
}

export default function GameOverView({ room, currentPlayerId, onResetGame }: GameOverViewProps) {
  const me = room.players.find((p) => p.id === currentPlayerId);
  const isHost = me?.isHost || false;

  const scoreA = room.teamScores.A;
  const scoreB = room.teamScores.B;
  const teamAWon = scoreA > scoreB;
  const teamBWon = scoreB > scoreA;
  const isDraw = scoreA === scoreB;

  const winnerLabel = teamAWon
    ? "☕ TEAM CHAI (A) WINS!"
    : teamBWon
    ? "🥟 TEAM SAMOSA (B) WINS!"
    : "🤝 IT IS A DESI TIE!";

  const winnerQuote = teamAWon
    ? "Cutting Chai power is real power! Samosa got drenched. ☕🎉"
    : teamBWon
    ? "Samosa Crew crunched through the competition! Chai got cold! 🥟🎉"
    : "Both teams were absolute legends! Samosa with Chai is indeed the best combo! ☕🤝🥟";

  // Trigger confetti burst
  useEffect(() => {
    try {
      // Fire 3 quick bursts of confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const stats = room.stats;

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-8 min-h-[85vh] space-y-8 flex flex-col justify-between">
      
      {/* Dynamic Celebration Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-mono text-xs px-4 py-1.5 rounded-full border border-yellow-400/30 uppercase tracking-widest font-black inline-flex items-center gap-2 shadow-lg">
          <Trophy className="w-3.5 h-3.5" /> Match Ended
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent leading-none drop-shadow">
          {winnerLabel}
        </h2>
        
        <p className="text-sm font-semibold text-slate-300 font-sans max-w-lg mx-auto">
          {winnerQuote}
        </p>
      </motion.div>

      {/* Main Stats Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* STANDINGS COMPARISON CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200 border-b border-white/10 pb-2 mb-4 font-bold flex items-center gap-1.5">
              🏆 Final Scoreboard
            </h3>

            <div className="space-y-4 py-3">
              <div className="flex items-center justify-between bg-white/5 p-4 border border-amber-500/30 rounded-2xl backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  <span className="text-sm font-black text-amber-300 tracking-wider">Team Chai (A)</span>
                </div>
                <span className="text-2xl font-black font-mono text-amber-300 glow">{scoreA}</span>
              </div>

              <div className="flex items-center justify-between bg-white/5 p-4 border border-rose-500/30 rounded-2xl backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥟</span>
                  <span className="text-sm font-black text-rose-300 tracking-wider">Team Samosa (B)</span>
                </div>
                <span className="text-2xl font-black font-mono text-rose-350">{scoreB}</span>
              </div>
            </div>
          </div>

          <div className="text-center font-mono text-[10px] text-slate-300 mt-4 leading-relaxed uppercase tracking-wider select-none">
            Winning Target set was {room.settings.winningScore} points
          </div>
        </motion.div>          {/* DETAILED MATCH AWARDS / AWARDS POOL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="glass p-6 shadow-xl space-y-5"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200 border-b border-white/10 pb-2 mb-2 font-bold select-none tracking-widest">
            🎖️ Match Hall of Fame
          </h3>

          <div className="space-y-3.5 overflow-y-auto max-h-[300px] custom-scrollbar pr-1">
            
            {/* 1. Best describer */}
            <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm">
              <Medal className="w-5 h-5 text-amber-450 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-300 font-bold block leading-none tracking-wider">
                  Best Describer
                </span>
                <span className="text-sm font-extrabold text-white mt-1 inline-block">
                  {stats.bestDescriber || "No describer reached heights"}
                </span>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Helped team guess the most definitions during turns.
                </p>
              </div>
            </div>

            {/* 2. Fastest Round */}
            <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm">
              <Hourglass className="w-5 h-5 text-indigo-350 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-300 font-bold block leading-none tracking-wider">
                  Fastest Round Clear (All 5 guessed)
                </span>
                <span className="text-sm font-extrabold text-white mt-1 inline-block">
                  {stats.fastestRound
                    ? `${stats.fastestRound.describer} (Team ${stats.fastestRound.team})`
                    : "No one cleared all 5 words!"}
                </span>
                {stats.fastestRound && (
                  <span className="text-xs font-mono font-black text-indigo-300 ml-2">
                    {stats.fastestRound.timeTaken}s
                  </span>
                )}
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  The quickest turn to finish all 5 local cards!
                </p>
              </div>
            </div>

            {/* 3. Top Guesser record */}
            {stats.mostWordsGuessed && stats.mostWordsGuessed.length > 0 && (
              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm">
                <UserCheck className="w-5 h-5 text-emerald-350 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-300 font-bold block leading-none tracking-wider">
                    Most Guessed Words
                  </span>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 mt-1">
                    {stats.mostWordsGuessed.slice(0, 3).map((g, gi) => (
                      <span key={gi} className="text-xs font-extrabold text-white font-sans">
                        {g.playerName} ({g.count})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. Funniest Fails list */}
            {stats.funniestFails && stats.funniestFails.length > 0 && (
              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm">
                <Laugh className="w-5 h-5 text-rose-350 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-300 font-bold block leading-none tracking-wider font-semibold">
                    Masala Fails / Skips ({stats.funniestFails.length})
                  </span>
                  <div className="max-h-24 overflow-y-auto custom-scrollbar mt-1.5 space-y-1 select-none pr-1">
                    {stats.funniestFails.slice(0, 10).map((fail, fi) => (
                      <div key={fi} className="text-[10px] font-mono text-slate-300 leading-tight">
                        • <span className="font-bold text-slate-100">"{fail.word}"</span> described by {fail.describer} was{" "}
                        <span className={fail.type === "foul" ? "text-rose-300" : "text-slate-350"}>
                          {fail.type.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>

      </div>

      {/* MATCH REPLAY CONTROL */}
      <div className="pt-6 border-t border-white/10 text-center max-w-sm mx-auto w-full">
        {isHost ? (
          <button
            type="button"
            id="play-again-btn"
            onClick={onResetGame}
            className="w-full py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 hover:opacity-95 text-white font-black uppercase tracking-wider rounded-2xl shadow-xl transition-all text-sm flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer glow"
          >
            <RotateCcw className="w-4 h-4 text-white animate-spin-reverse" /> Play Again, Yaar!
          </button>
        ) : (
          <div className="bg-white/5 p-4 border border-white/10 rounded-2xl font-mono text-xs text-slate-300 select-none animate-pulse backdrop-blur-sm shadow">
            ⏳ Waiting for your **Host** to restart a fresh match in the lobby. Keep arguing about that controversial foul!
          </div>
        )}
      </div>

    </div>
  );
}
