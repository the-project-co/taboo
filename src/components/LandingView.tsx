/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Play, Plus, Landmark } from "lucide-react";
import { motion } from "motion/react";

interface LandingViewProps {
  onCreateRoom: (name: string, avatar: string) => void;
  onJoinRoom: (code: string, name: string, avatar: string) => void;
  error?: string;
  isLoading?: boolean;
}

const AVATARS = ["🏏", "🍛", "🎬", "🪔", "🐘", "🐯", "🦚", "🥭", "🍵", "🚜", "🦁", "🚕", "🎧", "💃", "🤴", "🕶️", "🌶️", "🍨"];

export default function LandingView({ onCreateRoom, onJoinRoom, error, isLoading }: LandingViewProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [activeTab, setActiveTab] = useState<"create" | "join">("join");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreateRoom(name.trim(), selectedAvatar);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !code.trim()) return;
    onJoinRoom(code.trim().toUpperCase(), name.trim(), selectedAvatar);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 max-w-lg mx-auto w-full min-h-[90vh]">
      {/* Brand Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <span className="bg-amber-500/15 text-amber-300 font-mono text-xs px-3 py-1.5 rounded-full border border-amber-500/30 uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Indian Party Game
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">
          DESI TABOO
        </h1>
        <p className="text-xs md:text-sm text-slate-300/80 font-mono mt-2">
          Heads Up / Taboo for Bollywood, Memes, Food, Cricket & Masala!
        </p>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full glass rounded-3xl p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Colorful background glow items */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Name input */}
        <div className="mb-6">
          <label className="block text-slate-200 font-medium text-sm mb-2 font-mono">
            1. Enter Your Name
          </label>
          <input
            type="text"
            id="player-name-input"
            placeholder="e.g. Pappu / Simran / Raju"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 16))}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-sans text-base backdrop-blur-sm"
          />
        </div>

        {/* Avatar selector */}
        <div className="mb-8">
          <label className="block text-slate-200 font-medium text-sm mb-2.5 font-mono">
            2. Choose Your Avatar
          </label>
          <div className="grid grid-cols-6 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10 max-h-40 overflow-y-auto custom-scrollbar">
            {AVATARS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                id={`avatar-btn-${emoji}`}
                onClick={() => setSelectedAvatar(emoji)}
                className={`text-2xl p-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center ${
                  selectedAvatar === emoji ? "bg-amber-500 text-3xl scale-110 shadow-lg glow" : "scale-100"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 mb-6 font-mono text-sm">
          <button
            type="button"
            id="tab-join-room"
            onClick={() => setActiveTab("join")}
            className={`flex-1 py-2.5 rounded-xl text-center font-bold tracking-wide transition-all ${
              activeTab === "join"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow glow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Join Room
          </button>
          <button
            type="button"
            id="tab-create-room"
            onClick={() => setActiveTab("create")}
            className={`flex-1 py-2.5 rounded-xl text-center font-bold tracking-wide transition-all ${
              activeTab === "create"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow glow"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Create Room
          </button>
        </div>

        {/* Tabs Content */}
        {error && (
          <div className="mb-4 p-3 bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs rounded-xl font-mono text-center">
            ⚠️ {error}
          </div>
        )}

        {activeTab === "join" ? (
          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <label className="block text-slate-200 font-medium text-xs mb-1.5 font-mono uppercase">
                4-Letter Room Code
              </label>
              <input
                type="text"
                id="room-code-input"
                maxLength={4}
                placeholder="ABCD"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase().slice(0, 4))}
                disabled={isLoading}
                className="w-full text-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-2xl font-black font-mono text-amber-300 tracking-widest placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-amber-500/50 backdrop-blur-sm glow"
              />
            </div>
            <button
              type="submit"
              id="submit-join-btn"
              disabled={isLoading || !name.trim() || code.length < 4}
              className="w-full py-4 text-base font-black uppercase tracking-wider rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-orange-500/20 active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white text-white animate-pulse" /> Get in, Yaar!
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-slate-200 text-xs font-mono leading-relaxed backdrop-blur-sm">
              💡 As the **Host**, you can split everyone into Team A / Team B, toggle settings, choose categories, auto-balance, and control the timing.
            </div>
            <button
              type="submit"
              id="submit-create-btn"
              disabled={isLoading || !name.trim()}
              className="w-full py-4 text-base font-black uppercase tracking-wider rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-pink-500/20 active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Plus className="w-4 h-4" /> Start Party Room
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>

      {/* Decorative India Elements Footer */}
      <div className="mt-8 flex items-center gap-5 text-slate-500 text-xs font-mono opacity-60">
        <span className="flex items-center gap-1"><Landmark className="w-3.5 h-3.5" /> Made for Desi Evenings</span>
        <span>•</span>
        <span>No Boredom Allowed</span>
      </div>
    </div>
  );
}
