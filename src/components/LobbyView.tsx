/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Copy, PlusCircle, Check, Users, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { GameRoom, Player } from "../types";
import { CATEGORIES_LIST } from "../categoriesData";

interface LobbyViewProps {
  room: GameRoom;
  currentPlayerId: string;
  onUpdateSettings: (winningScore: number, roundTimer: number, categories: string[], useRestrictedWords: boolean) => void;
  onToggleReady: () => void;
  onGoToTeamsSetup: () => void;
}

export default function LobbyView({
  room,
  currentPlayerId,
  onUpdateSettings,
  onToggleReady,
  onGoToTeamsSetup,
}: LobbyViewProps) {
  const [copied, setCopied] = React.useState(false);

  const me = room.players.find((p) => p.id === currentPlayerId);
  const isHost = me?.isHost || false;

  const copyRoomCode = () => {
    navigator.clipboard.writeText(room.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeCategories = room.settings.categories;

  const toggleCategory = (catId: string) => {
    if (!isHost) return;
    let nextCats = [...activeCategories];
    if (nextCats.includes(catId)) {
      // Keep at least one category active
      if (nextCats.length > 1) {
        nextCats = nextCats.filter((c) => c !== catId);
      }
    } else {
      nextCats.push(catId);
    }
    onUpdateSettings(room.settings.winningScore, room.settings.roundTimer, nextCats, room.settings.useRestrictedWords ?? true);
  };

  const handleTimerChange = (val: number) => {
    if (!isHost) return;
    onUpdateSettings(room.settings.winningScore, val, activeCategories, room.settings.useRestrictedWords ?? true);
  };

  const handleScoreChange = (val: number) => {
    if (!isHost) return;
    onUpdateSettings(val, room.settings.roundTimer, activeCategories, room.settings.useRestrictedWords ?? true);
  };

  const handleRestrictedToggle = () => {
    if (!isHost) return;
    onUpdateSettings(room.settings.winningScore, room.settings.roundTimer, activeCategories, !(room.settings.useRestrictedWords ?? true));
  };

  const allPlayersReady = room.players.every((p) => p.isReady || p.isHost);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-6 max-w-6xl mx-auto w-full min-h-[85vh]">
      {/* LEFT COLUMN: Room info, player list & self setup (4 or 5 columns on desktop) */}
      <div className="lg:col-span-5 space-y-6">
        {/* ROOM CARD CODE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 relative overflow-hidden text-center shadow-xl"
        >
          <span className="text-xs uppercase text-slate-200 font-mono tracking-wider block mb-1">
            Share Code with Friends
          </span>
          <div className="flex items-center justify-center gap-3 bg-white/5 px-4 py-3 border border-white/10 rounded-2xl max-w-xs mx-auto backdrop-blur-sm">
            <span className="text-3xl font-black font-mono tracking-widest text-amber-300 glow">
              {room.code}
            </span>
            <button
              onClick={copyRoomCode}
              id="copy-code-btn"
              type="button"
              className="p-2 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white transition-all active:scale-[0.9]"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400 animate-bounce" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          {copied && <span className="text-xs font-mono text-emerald-300 mt-1.5 block">Copied to clipboard!</span>}
        </motion.div>

        {/* CONNECTED PLAYERS LIST */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 shadow-xl min-h-[300px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="font-mono text-sm uppercase text-slate-200 font-bold tracking-wide flex items-center gap-2">
                <Users className="w-4 h-4 text-violet-300" /> Joined Crew ({room.players.length})
              </h3>
              {isHost && (
                <span className="bg-purple-500/20 text-purple-300 font-mono text-[10px] px-2.5 py-1 rounded-full border border-purple-500/30 font-bold uppercase tracking-wider backdrop-blur-sm">
                  Hosting
                </span>
              )}
            </div>

            <div className="space-y-2.5 max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
              {room.players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{player.avatar}</span>
                    <div>
                      <span className="text-sm font-semibold truncate max-w-[150px] inline-block text-white">
                        {player.name}
                      </span>
                      {player.isHost && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono ml-1.5 font-bold border border-amber-500/25">
                          Host
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Ready indicator */}
                  <div>
                    {player.isHost ? (
                      <span className="text-[11px] font-mono text-amber-300 font-black tracking-wider uppercase glow-orange">BOSS</span>
                    ) : player.isReady ? (
                      <span className="bg-emerald-500/20 text-emerald-300 font-mono text-[10px] px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold tracking-wider">
                        Ready!
                      </span>
                    ) : (
                      <span className="bg-white/5 text-slate-300 font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/10">
                        Chilling
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Ready action buttons */}
          <div className="mt-6 pt-4 border-t border-white/10">
            {isHost ? (
              <div className="space-y-2">
                {!allPlayersReady && (
                  <div className="flex items-center gap-2 text-amber-200 bg-amber-500/10 p-3 rounded-2xl border border-amber-500/20 text-xs mb-3 font-mono leading-relaxed">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>Waiting for other playmates to click Ready.</span>
                  </div>
                )}
                <button
                  type="button"
                  id="lobby-start-team-btn"
                  onClick={onGoToTeamsSetup}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 hover:opacity-95 text-white font-black uppercase tracking-wider rounded-2xl shadow-xl transition-all text-sm active:scale-[0.98] glow"
                >
                  Arrange Teams & Start →
                </button>
              </div>
            ) : (
              <button
                type="button"
                id="lobby-toggle-ready-btn"
                onClick={onToggleReady}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-wider transition-all shadow-lg active:scale-[0.98] ${
                  me?.isReady
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/25 font-black uppercase tracking-widest glow"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                }`}
              >
                {me?.isReady ? "✓ I am Ready!" : "Click to Ready Up"}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Host configuration panels (7 columns on desktop) */}
      <div className="lg:col-span-7 space-y-6">
        {/* ROOM SETTINGS: TIMERS / SCORE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass p-6 shadow-xl"
        >
          <h3 className="font-mono text-sm uppercase text-slate-200 font-bold tracking-wide border-b border-white/10 pb-3 mb-4">
            🕹️ Match Parameters {!isHost && <span className="text-slate-400">(Host Controls Only)</span>}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Round timer */}
            <div>
              <label className="block text-slate-200 font-mono text-xs uppercase mb-2 font-bold select-none tracking-wide">
                ⏳ Seconds per Round
              </label>
              <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
                {[30, 60, 90, 120].map((t) => (
                  <button
                    key={t}
                    type="button"
                    disabled={!isHost}
                    id={`timer-option-${t}`}
                    onClick={() => handleTimerChange(t)}
                    className={`flex-1 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      room.settings.roundTimer === t
                        ? "bg-amber-500 text-white shadow-lg font-black glow-orange"
                        : "text-slate-300 hover:text-white disabled:hover:text-slate-300"
                    }`}
                  >
                    {t}s
                  </button>
                ))}
              </div>
            </div>

            {/* Target winning score */}
            <div>
              <label className="block text-slate-200 font-mono text-xs uppercase mb-2 font-bold select-none tracking-wide">
                🏆 Score to Win
              </label>
              <div className="flex gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
                {[20, 30, 40, 50, 75].map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={!isHost}
                    id={`score-option-${s}`}
                    onClick={() => handleScoreChange(s)}
                    className={`flex-1 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      room.settings.winningScore === s
                        ? "bg-amber-500 text-white shadow-lg font-black glow-orange"
                        : "text-slate-300 hover:text-white disabled:hover:text-slate-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <label className="block text-slate-200 font-mono text-xs uppercase font-bold select-none tracking-wide">
              🚫 Restricted Words
            </label>
            <button
              onClick={handleRestrictedToggle}
              disabled={!isHost}
              className={`px-4 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                (room.settings.useRestrictedWords ?? true)
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 glow"
                  : "bg-rose-500/80 text-white shadow-lg shadow-rose-500/20"
              }`}
            >
              {(room.settings.useRestrictedWords ?? true) ? "ON" : "OFF"}
            </button>
          </div>
        </motion.div>

        {/* CATEGORY PACK SELECTOR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <h3 className="font-mono text-sm uppercase text-slate-200 font-bold tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 glow-orange" /> Active Category Packs
            </h3>
            <span className="text-amber-300 font-mono text-xs font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
              {activeCategories.length} selected
            </span>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed mb-4 font-mono select-none">
            {isHost
              ? "💡 Tip: Click to toggle category packs. We draw exactly 5 target cards each round, distributed across active categories!"
              : "Active packs chosen by your Host. Words will appear from these categories:"}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = activeCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`cat-card-${cat.id.replace(/\s+/g, "-")}`}
                  disabled={!isHost}
                  onClick={() => toggleCategory(cat.id)}
                  className={`relative flex flex-col justify-between text-left p-3.5 rounded-2xl border transition-all h-28 overflow-hidden active:scale-[0.98] cursor-pointer ${
                    isActive
                      ? `bg-white/15 border-amber-400 shadow-amber-400/10 shadow-lg scale-[1.02] backdrop-blur-sm`
                      : "bg-white/5 border-white/10 opacity-60 hover:opacity-90 disabled:hover:opacity-60 backdrop-blur-sm"
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <span className="text-2xl">{cat.emoji}</span>
                    {isActive && (
                      <span className="w-4.5 h-4.5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-black text-slate-950 shadow glow">
                        ✓
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white truncate w-full">{cat.name}</h4>
                    <span className="text-[10px] text-slate-300/80 block line-clamp-2 leading-snug mt-0.5">
                      {cat.description}
                    </span>
                  </div>
                  {/* Decorative faint background gradient strip */}
                  {isActive && (
                    <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r ${cat.gradient}`} />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
