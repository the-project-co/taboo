/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Timer, Send, ShieldAlert, Sparkles, CheckCircle, HelpCircle, AlertOctagon, CornerUpLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GameRoom, Player, RoundWordState, ChatMessage } from "../types";
import { CATEGORIES_LIST } from "../categoriesData";
import { playSound } from "../sound";

interface GameboardViewProps {
  room: GameRoom;
  currentPlayerId: string;
  socket: any; // Socket io connection to emit actions
}

export default function GameboardView({ room, currentPlayerId, socket }: GameboardViewProps) {
  const [guessText, setGuessText] = useState("");
  const [typedGuesses, setTypedGuesses] = useState<ChatMessage[]>([]);
  const [peerTypingStates, setPeerTypingStates] = useState<Record<string, string>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  const me = room.players.find((p) => p.id === currentPlayerId);
  const isHost = me?.isHost || false;

  const currentTurn = room.turn;
  if (!currentTurn) return null;

  const activeDescriber = room.players.find((p) => p.id === currentTurn.describerId);
  const isMeDescriber = currentTurn.describerId === currentPlayerId;
  const isMyTeamActive = me && me.team === currentTurn.team;
  const isOpponent = me && me.team !== null && me.team !== currentTurn.team;

  // Track if game is ready to start counting
  const isTurnActive = currentTurn.isActive;

  // Scrolling logs
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [typedGuesses, room.turn?.words]);

  // Network listening for chat messages & play sound effects
  useEffect(() => {
    if (!socket) return;

    const handleChatMessage = (msg: ChatMessage) => {
      setTypedGuesses((prev) => {
        // Prevent duplicate IDs
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, msg];
      });
    };

    const handleSoundFx = (type: "correct" | "foul" | "skip" | "tick" | "victory") => {
      playSound(type);
    };

    const handlePeerTyping = ({ playerName, text }: { playerName: string; text: string }) => {
      if (playerName !== me?.name) {
        setPeerTypingStates((prev) => ({
          ...prev,
          [playerName]: text,
        }));
      }
    };

    socket.on("chat_message", handleChatMessage);
    socket.on("play_fx", handleSoundFx);
    socket.on("live_typing_guess", handlePeerTyping);

    return () => {
      socket.off("chat_message", handleChatMessage);
      socket.off("play_fx", handleSoundFx);
      socket.off("live_typing_guess", handlePeerTyping);
    };
  }, [socket, me?.name]);

  // Clear peer typing state once word is guessed or state changes
  useEffect(() => {
    setPeerTypingStates({});
  }, [room.roundNumber, currentTurn.team]);

  // Core actions
  const handleStartTurn = () => {
    socket.emit("start_active_turn");
  };

  const handleDescriberAction = (wordId: string, action: "correct" | "skip" | "foul") => {
    socket.emit("describer_action", { wordId, action });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setGuessText(text);

    // Dynamic real-time guess matching
    socket.emit("submit_guesses", { guessText: text });
  };

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guessText.trim()) return;

    // Send chat text
    socket.emit("send_chat", { text: guessText.trim() });
    
    // Final clear matching submission
    socket.emit("submit_guesses", { guessText: guessText.trim() });
    setGuessText("");
  };

  // Sound triggering when time runs out or gets low
  useEffect(() => {
    if (isTurnActive && currentTurn.timeLeft <= 5 && currentTurn.timeLeft > 0) {
      playSound("tick");
    }
  }, [currentTurn.timeLeft, isTurnActive]);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-4 min-h-[85vh] flex flex-col justify-between gap-6">
      
      {/* 1. STATE BAR OVERVIEW */}
      <div className="glass p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl select-none">
        
        {/* Teams with current scores */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-amber-500/20 backdrop-blur-sm shadow-sm">
            <span className="text-sm">☕</span>
            <span className="text-xs font-mono text-slate-300 font-medium">Team Chai:</span>
            <span className="text-sm font-black text-amber-300 font-mono glow">{room.teamScores.A}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-rose-500/20 backdrop-blur-sm shadow-sm">
            <span className="text-sm">🥟</span>
            <span className="text-xs font-mono text-slate-300 font-medium">Team Samosa:</span>
            <span className="text-sm font-black text-rose-300 font-mono">{room.teamScores.B}</span>
          </div>
        </div>

        {/* Central visual indicator: turn & timer */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] uppercase font-mono text-slate-200 font-bold block tracking-wider">
              Round {room.roundNumber} Turn
            </span>
            <span className={`text-xs font-black uppercase tracking-wider leading-none ${currentTurn.team === "A" ? "text-amber-300 glow-orange" : "text-rose-300"}`}>
              {currentTurn.team === "A" ? "Team Chai (A) playing" : "Team Samosa (B) playing"}
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-2xl border font-mono text-lg font-black transition-all ${
              currentTurn.timeLeft <= 10
                ? "bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse scale-105 glow"
                : "bg-white/5 border-white/10 text-emerald-350 shadow-inner backdrop-blur-sm"
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>{currentTurn.timeLeft}s</span>
          </div>
        </div>

        {/* Active roles details */}
        <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 max-w-xs text-right backdrop-blur-sm shadow-sm">
          <span className="text-[10px] uppercase font-mono text-slate-300 block tracking-wider">Active Describer</span>
          <span className="text-xs font-bold text-white truncate max-w-[130px] inline-block mb-0.5">
            {activeDescriber ? (isMeDescriber ? "YOU" : activeDescriber.name) : "Offline Player"}
          </span>
        </div>
      </div>

      {/* 2. MAIN LAYOUT: SPLIT IN TWO (Left: Word Grid Cards, Right: Chat/Log Streams) */}
      
      {isHost && room.players.filter(p => !p.team).length > 0 && (
        <div className="glass p-3 border border-amber-500/30 flex flex-wrap gap-4 items-center mb-1">
          <span className="text-xs font-mono text-amber-300 font-bold">⚠️ Unassigned Players:</span>
          {room.players.filter(p => !p.team).map(p => (
            <div key={p.id} className="flex gap-2 items-center bg-white/5 px-2 py-1 rounded-lg">
              <span className="text-xs">{p.name}</span>
              <button 
                onClick={() => socket.emit("assign_team", { playerId: p.id, team: "A" })}
                className="text-[9px] bg-amber-500 text-slate-900 px-1.5 py-0.5 rounded font-black hover:scale-105"
              >
                Team A
              </button>
              <button 
                onClick={() => socket.emit("assign_team", { playerId: p.id, team: "B" })}
                className="text-[9px] bg-rose-500 text-white px-1.5 py-0.5 rounded font-black hover:scale-105"
              >
                Team B
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* WORD CARDS AREAL */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          
          {/* Cover if turn is not started */}
          {!isTurnActive ? (
            <div className="flex-1 glass p-8 flex flex-col items-center justify-center text-center min-h-[440px] shadow-xl relative overflow-hidden select-none">
              <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-5xl mb-4">🎬</span>
              <h3 className="text-lg font-black mb-2 text-slate-100 uppercase tracking-wide">
                Ready to describe?
              </h3>
              
              <p className="text-slate-300 text-xs font-mono max-w-sm mb-6 leading-relaxed">
                Describer is **{activeDescriber?.name}** ({activeDescriber?.avatar}). Teammates will type matching space/comma separated guesses in real-time. Click start to load cards!
              </p>

              {(isMeDescriber || isHost) ? (
                <button
                  type="button"
                  id="start-active-turn-btn"
                  onClick={handleStartTurn}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-550 to-indigo-550 hover:opacity-95 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all font-mono text-xs active:scale-[0.98] cursor-pointer glow"
                >
                  🚀 Start Turn Timer
                </button>
              ) : (
                <div className="flex items-center gap-2 text-amber-200 bg-amber-500/20 border border-amber-500/30 p-3 rounded-2xl text-xs font-mono backdrop-blur-sm">
                  <ShieldAlert className="w-4 h-4 animate-bounce text-amber-400" />
                  <span>Waiting for the Describer/Host to click Start!</span>
                </div>
              )}
            </div>
          ) : (
            
            /* ACTIVE CARDS PANEL */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[440px]">
              {currentTurn.words.map((word, index) => {
                const catMeta = CATEGORIES_LIST.find((c) => c.id === word.category);
                const isGuessed = word.status === "guessed";
                const isSkipped = word.status === "skipped";
                const isFouled = word.status === "fouled";

                return (
                  <motion.div
                    key={word.id}
                    layoutId={`word-card-${word.id}`}
                    className={`relative p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-md min-h-[230px] overflow-hidden ${
                      isGuessed
                        ? "bg-emerald-500/15 border-emerald-500/50 shadow-emerald-500/10 scale-[0.98] backdrop-blur-sm opacity-90"
                        : isSkipped
                        ? "bg-white/5 border-white/5 opacity-30 select-none filter grayscale text-slate-500"
                        : isFouled
                        ? "bg-rose-500/15 border-rose-500/40 opacity-40 shadow-rose-950/10 text-rose-300"
                        : "glass hover:bg-white/12 hover:border-white/20 transition-all cursor-pointer backdrop-blur-md"
                    }`}
                  >
                    {/* Top category label strip */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2 select-none">
                      <span className="text-[9px] uppercase font-bold tracking-widest font-mono text-slate-300 flex items-center gap-1">
                        <span>{catMeta?.emoji}</span> {word.category}
                      </span>
                      {isGuessed && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-350 px-2 py-0.5 rounded font-black font-mono">
                          GUESS +{word.guessedExactly ? "2" : "1"}
                        </span>
                      )}
                      {isFouled && (
                        <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-black font-mono">
                          FOUL -1
                        </span>
                      )}
                    </div>

                    {/* Word / Blurred display info */}
                    <div className="flex-1 flex flex-col justify-center">
                      {(isMeDescriber || isOpponent) ? (
                        <>
                          {isOpponent && !isGuessed && !isSkipped && !isFouled && (
                            <span className="text-[8.5px] bg-indigo-500/15 border border-indigo-500/25 text-indigo-200 font-mono font-bold uppercase tracking-wider block text-center py-0.5 rounded-lg mb-2 select-none">
                              👁️ Opponent Monitor View
                            </span>
                          )}
                          <h4 className="text-base font-black text-white text-center tracking-tight mb-2 select-all font-sans">
                            {word.word}
                          </h4>
                          
                          {/* Restricted Taboo words */}
                          {(room.settings.useRestrictedWords ?? true) && (
                            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 backdrop-blur-sm">
                              <span className="text-[8px] uppercase tracking-wider text-slate-300 font-mono font-bold block mb-1">
                                🚫 Restricted / Forbidden:
                              </span>
                              <div className="flex flex-wrap gap-1 leading-snug">
                                {word.restricted.map((restrictedWord, rIdx) => (
                                  <span
                                    key={rIdx}
                                    className="text-[9px] bg-white/10 text-slate-200 border border-white/10 px-1.5 py-0.5 rounded font-mono font-bold select-none"
                                  >
                                    {restrictedWord}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        /* Teammate Guesser sees BLURRED card details */
                        <div className="text-center py-4 select-none">
                          <AnimatePresence mode="wait">
                            {isGuessed ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-1"
                              >
                                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                                <h4 className="text-xs font-mono text-emerald-300 font-bold max-w-full truncate px-1">
                                  "{word.guessedText || word.word}"
                                </h4>
                                <span className="text-[8px] text-slate-300 italic block">
                                  by {word.guessedBy || "Guesser"}
                                </span>
                              </motion.div>
                            ) : isSkipped ? (
                              <div className="text-slate-400 text-xs font-mono">
                                <HelpCircle className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                                <span>Card Skipped</span>
                              </div>
                            ) : isFouled ? (
                              <div className="text-rose-455 text-xs font-mono">
                                <AlertOctagon className="w-6 h-6 text-rose-500/50 mx-auto mb-1" />
                                <span>Fouled / Forbidden</span>
                              </div>
                            ) : (
                              /* Still locked, guesser must type */
                              <div className="py-2">
                                <span className="filter blur-md bg-white/15 text-white/50 text-sm font-black px-4 py-1.5 rounded-lg select-none block max-w-xs mx-auto border border-white/10">
                                  Secret Word
                                </span>
                                <span className="text-[9px] text-slate-200 uppercase font-mono tracking-wider block mt-2 animate-pulse">
                                  Teammates guess this!
                                </span>
                              </div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    {/* Describer action controls */}
                    {isMeDescriber && !isGuessed && !isSkipped && !isFouled && (
                      <div className="flex gap-1.5 pt-3 border-t border-white/10 font-mono text-[9px] font-black uppercase">
                        <button
                          type="button"
                          id={`describer-foul-${word.id}`}
                          onClick={() => handleDescriberAction(word.id, "foul")}
                          className="flex-1 py-1.5 bg-rose-500/20 hover:bg-rose-550 border border-rose-500/30 text-rose-200 rounded-lg transition-all cursor-pointer"
                        >
                          Foul!
                        </button>
                        <button
                          type="button"
                          id={`describer-skip-${word.id}`}
                          onClick={() => handleDescriberAction(word.id, "skip")}
                          className="flex-1 py-1.5 bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 rounded-lg transition-all cursor-pointer"
                        >
                          Skip
                        </button>
                        <button
                          type="button"
                          id={`describer-correct-${word.id}`}
                          onClick={() => handleDescriberAction(word.id, "correct")}
                          className="flex-1.5 py-1.5 bg-emerald-500/30 hover:bg-emerald-500/50 border border-emerald-500/40 text-white rounded-lg transition-all text-[10px] cursor-pointer"
                        >
                          Correct ✓
                        </button>
                      </div>
                    )}

                    {/* Faint color indicator */}
                    <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r ${catMeta?.gradient}`} />
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* 3. GUESSING INPUT BOX (only for active teammate guessers) */}
          <div className="glass p-4 shadow-xl select-none">
            {isTurnActive && isMyTeamActive && !isMeDescriber ? (
              <form onSubmit={handleGuessSubmit} className="space-y-2">
                <div className="flex items-center gap-1">
                  <span className="text-amber-300 font-mono text-xs font-bold shrink-0">Type your guesses:</span>
                  <span className="text-[10px] text-slate-300 italic font-mono">(separate by spaces/commas)</span>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="guesser-text-input"
                    value={guessText}
                    onChange={handleTextChange}
                    placeholder="e.g. jalebi samosa dhoni virat salim"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-sm font-semibold tracking-wide pr-14 backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    id="submit-guess-arrow-btn"
                    className="absolute right-1.5 top-1.5 p-2 rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4 fill-slate-900" />
                  </button>
                </div>
                <div className="text-[10px] text-slate-300 font-mono">
                  💡 Spelling-tolerant engine! Ticks appear instantly above if a guess is close. Close spelling gets +1, exact matches get +2 points!
                </div>
              </form>
            ) : isTurnActive && isMeDescriber ? (
              <div className="text-center font-mono py-2 text-xs text-amber-200 bg-amber-500/20 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                🗣️ You are describing! DO NOT type or say the forbidden words. Your teammates are typing live guesses now.
              </div>
            ) : isTurnActive ? (
              <div className="text-center py-2 text-xs font-mono text-slate-300">
                🔒 Opposite team turn. You can chat, cheer, or mock, but you cannot submit round guesses!
              </div>
            ) : null}
          </div>
        </div>

        {/* LOG SECTION & CHAT */}
        <div className="lg:col-span-4 glass p-5 flex flex-col justify-between shadow-2xl min-h-[480px]">
          <div>
            <span className="text-xs uppercase font-mono tracking-wider font-bold text-slate-200 border-b border-white/10 pb-2 mb-3 block">
              💬 Masala Chat / Guess Feed
            </span>

            {/* PEER TYPING STATES */}
            <div className="space-y-1 mb-2 max-h-16 overflow-y-auto">
              {Object.entries(peerTypingStates).map(([player, text]) => {
                const strText = String(text || "");
                if (!strText.trim()) return null;
                return (
                  <div key={player} className="flex gap-1 items-baseline font-mono text-[10px] text-amber-300/80 animate-pulse">
                    <span className="font-bold truncate max-w-[60px] inline-block">{player} is typing:</span>
                    <span className="italic truncate max-w-[155px] inline-block">"{strText}"</span>
                  </div>
                );
              })}
            </div>

            {/* CHAT CHRONOS */}
            <div className="space-y-2 max-h-[340px] md:max-h-[380px] overflow-y-auto custom-scrollbar pr-1 flex-1">
              {typedGuesses.length === 0 ? (
                <div className="text-center py-10 font-mono text-xs text-slate-400 select-none">
                  No chat/guesses yet. Let's get shouting!
                </div>
              ) : (
                typedGuesses.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-2.5 rounded-xl border leading-snug ${
                      msg.isSystem && msg.isCorrectGuess
                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300 text-xs text-center font-bold tracking-wider"
                        : msg.isSystem
                        ? "bg-white/5 border-white/10 text-slate-300 text-[11px] backdrop-blur-sm"
                        : "bg-white/5 border-white/10 backdrop-blur-sm"
                    }`}
                  >
                    {!msg.isSystem && (
                      <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono select-none">
                        <span className={`font-semibold ${msg.senderTeam === "A" ? "text-amber-300" : msg.senderTeam === "B" ? "text-rose-350" : "text-slate-350"}`}>
                          {msg.senderName}
                        </span>
                        {msg.senderTeam ? (
                          <span className="text-[8px] bg-white/10 border border-white/10 px-1 py-0.2 rounded uppercase tracking-wide">
                            Team {msg.senderTeam}
                          </span>
                        ) : null}
                      </div>
                    )}
                    <p className={`text-xs ${msg.isSystem ? "font-mono leading-relaxed" : "text-slate-100"}`}>
                      {msg.text}
                    </p>
                  </div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Standard Chat textbox for SPECTATORS & passive peers */}
          <div className="mt-4 border-t border-white/10 pt-3">
            {(!isMyTeamActive || isMeDescriber) && isTurnActive ? (
              <form onSubmit={handleGuessSubmit} className="flex gap-2">
                <input
                  type="text"
                  id="spectator-chat-input"
                  value={guessText}
                  onChange={(e) => {
                    setGuessText(e.target.value);
                  }}
                  placeholder="Chat with everyone..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none backdrop-blur-sm"
                />
                <button
                  type="submit"
                  id="submit-spec-chat-btn"
                  className="p-2 bg-white/10 text-white rounded-xl hover:bg-white/15 border border-white/15 transition-all select-none cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
}
