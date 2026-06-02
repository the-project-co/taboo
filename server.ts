/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

import { GameRoom, Player, WordCard, RoundWordState, GameStats } from "./src/types";
import { WORD_CARDS_DATABASE } from "./src/categoriesData";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 3000;

// Game rooms in memory
const rooms = new Map<string, GameRoom>();
// Active timer intervals indexed by room code
const roomIntervals = new Map<string, NodeJS.Timeout>();

// Helper: Levenshtein distance
function getLevenshteinDistance(a: string, b: string): number {
  const tmp = [];
  for (let i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1, // Deletion
        tmp[i][j - 1] + 1, // Insertion
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // Substitution
      );
    }
  }
  return tmp[a.length][b.length];
}

// Helper: Check if guess matches target (exact or close)
function checkWordMatch(guess: string, target: string): { matches: boolean; exact: boolean } {
  const g = guess.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "");
  const t = target.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "");
  
  if (!g || !t) return { matches: false, exact: false };

  const gNoSpace = g.replace(/\s+/g, "");
  const tNoSpace = t.replace(/\s+/g, "");

  // 1. Exact match (case insensitive)
  if (gNoSpace === tNoSpace) {
    return { matches: true, exact: true };
  }

  // 2. Exact match of a sub-word (length > 3) in a multi-word phrase
  const targetParts = t.split(/\s+/).filter(p => p.length > 3);
  const guessParts = g.split(/\s+/).filter(p => p.length > 0);

  // If they guess a significant part exactly correctly
  if (targetParts.some(tp => guessParts.includes(tp))) {
    return { matches: true, exact: false }; // Near match (no bonus point)
  }

  // 3. Forgiving spelling slip (Levenshtein distance) on whole phrase <= 10%
  const mainDist = getLevenshteinDistance(gNoSpace, tNoSpace);
  if (mainDist > 0 && mainDist / Math.max(tNoSpace.length, 1) <= 0.10) {
    return { matches: true, exact: false };
  }

  // 4. Forgiving spelling slip on sub-words <= 10%
  for (const part of targetParts) {
    for (const gPart of guessParts) {
      const dist = getLevenshteinDistance(gPart, part);
      if (dist > 0 && dist / Math.max(part.length, 1) <= 0.10) {
        return { matches: true, exact: false };
      }
    }
  }

  return { matches: false, exact: false };
}

// Helper: Select 5 words from 5 unique active categories
function drawTurnWords(activeCategories: string[], room: GameRoom): RoundWordState[] {
  const drawnWords: RoundWordState[] = [];
  
  // Clean active list
  const validCategories = activeCategories.length > 0 ? activeCategories : ["Bollywood"];
  
  // Shuffle categories
  const shuffledCats = [...validCategories].sort(() => 0.5 - Math.random());
  
  // Pick up to 5 categories
  const selectedCats = shuffledCats.slice(0, 5);
  
  // If we have fewer than 5 active categories, repeat some to make exactly 5 cards
  while (selectedCats.length < 5) {
    selectedCats.push(validCategories[Math.floor(Math.random() * validCategories.length)]);
  }

  selectedCats.forEach((cat) => {
    // Collect all unused cards in this category
    let pool = WORD_CARDS_DATABASE.filter(card => card.category === cat && !room.usedWordIds.includes(card.id));
    
    // If we exhausted all words in category, reset category pool
    if (pool.length === 0) {
      const allCatWords = WORD_CARDS_DATABASE.filter(card => card.category === cat);
      if (allCatWords.length > 0) {
         // Reset specifically these words from the used set
         room.usedWordIds = room.usedWordIds.filter(uid => !allCatWords.some(c => c.id === uid));
         pool = allCatWords;
      }
    }

    if (pool.length > 0) {
      // Pick a random one not already chosen THIS turn
      let poolAvail = pool.filter(c => !drawnWords.some(w => w.id === c.id));
      if (poolAvail.length === 0) poolAvail = pool; // fallback

      const card = poolAvail[Math.floor(Math.random() * poolAvail.length)];
      
      drawnWords.push({
        ...card,
        status: "unguessed",
        guessedBy: null,
        guessedExactly: false,
      });
      room.usedWordIds.push(card.id);
    } else {
      // Fallback: Pick any random unused card
      let fallbackPool = WORD_CARDS_DATABASE.filter(c => !room.usedWordIds.includes(c.id));
      if (fallbackPool.length === 0) {
        room.usedWordIds = [];
        fallbackPool = WORD_CARDS_DATABASE;
      }
      let poolAvail = fallbackPool.filter(c => !drawnWords.some(w => w.id === c.id));
      if (poolAvail.length === 0) poolAvail = fallbackPool;

      const fallbackCard = poolAvail[Math.floor(Math.random() * poolAvail.length)];
      drawnWords.push({
        ...fallbackCard,
        status: "unguessed",
        guessedBy: null,
        guessedExactly: false,
      });
      room.usedWordIds.push(fallbackCard.id);
    }
  });

  return drawnWords;
}

// Generate unique room code
function generateRoomCode(): string {
  let code = "";
  const chars = "ABCDEFGHIJKLMNPQRSTUVWXYZ"; // skip 'O' to avoid confusion with zero
  do {
    code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (rooms.has(code));
  return code;
}

// System chat message helper
function sendSystemMessage(roomCode: string, text: string, isCorrect: boolean = false) {
  io.to(roomCode).emit("chat_message", {
    id: Math.random().toString(36).slice(2, 9),
    senderName: "Systems",
    senderTeam: null,
    text,
    isSystem: true,
    isCorrectGuess: isCorrect,
  });
}

// Start player's turn countdown
function startTurnCountdown(roomCode: string) {
  // Clear any existing timer for this room
  if (roomIntervals.has(roomCode)) {
    clearInterval(roomIntervals.get(roomCode)!);
  }

  const interval = setInterval(() => {
    const room = rooms.get(roomCode);
    if (!room || !room.turn || !room.turn.isActive) {
      clearInterval(interval);
      roomIntervals.delete(roomCode);
      return;
    }

    if (room.turn.startedAt !== null) {
      const elapsed = Math.floor((Date.now() - room.turn.startedAt) / 1000);
      const timeLeft = Math.max(0, room.settings.roundTimer - elapsed);
      room.turn.timeLeft = timeLeft;

      if (timeLeft <= 0) {
        // End round!
        clearInterval(interval);
        roomIntervals.delete(roomCode);
        handleTurnEnd(roomCode, "Time's up!");
      } else {
        io.to(roomCode).emit("room_state", room);
      }
    }
  }, 1000);

  roomIntervals.set(roomCode, interval);
}

// End the active turn
function handleTurnEnd(roomCode: string, reasonText: string) {
  const room = rooms.get(roomCode);
  if (!room || !room.turn) return;

  room.turn.isActive = false;
  if (roomIntervals.has(roomCode)) {
    clearInterval(roomIntervals.get(roomCode)!);
    roomIntervals.delete(roomCode);
  }

  // Calculate scores gained in this turn
  let scoreGained = 0;
  const turnsWordsGuessed: string[] = [];
  
  room.turn.words.forEach(w => {
    if (w.status === "guessed") {
      turnsWordsGuessed.push(w.word);
      scoreGained += 1;
      if (w.guessedExactly) {
        scoreGained += 1; // Extra exact spelling bonus
      }
    } else if (w.status === "fouled") {
      scoreGained -= 1; // Penalty
    }
  });

  const activeTeam = room.turn.team;
  room.teamScores[activeTeam] = Math.max(0, room.teamScores[activeTeam] + scoreGained);

  const describer = room.players.find(p => p.id === room.turn?.describerId);
  const describerName = describer ? describer.name : "Unknown Player";

  // Push to history
  room.history.push({
    round: room.roundNumber,
    team: activeTeam,
    describerName,
    scoreGained,
    wordsGuessed: turnsWordsGuessed,
  });

  // Log statistics
  if (scoreGained > 0 && describer) {
    // Track most words guessed by teammates under this describer
    const corrects = room.turn.words.filter(w => w.status === "guessed").length;
    if (corrects > 0) {
      if (!room.stats.mostWordsGuessed) room.stats.mostWordsGuessed = [];
      const statsRecord = room.stats.mostWordsGuessed.find(r => r.playerName === describerName);
      if (statsRecord) {
        statsRecord.count += corrects;
      } else {
        room.stats.mostWordsGuessed.push({ playerName: describerName, count: corrects });
      }
    }

    // Best describer is player with the highest total of correct words described
    let bestName: string | null = null;
    let maxGuessedCount = 0;
    room.stats.mostWordsGuessed.forEach(record => {
      if (record.count > maxGuessedCount) {
        maxGuessedCount = record.count;
        bestName = record.playerName;
      }
    });
    room.stats.bestDescriber = bestName;

    // Track fastest round (if they cleared all 5 words)
    if (corrects === 5 && room.turn.startedAt) {
      const timeTaken = Math.floor((Date.now() - room.turn.startedAt) / 1000);
      if (!room.stats.fastestRound || timeTaken < room.stats.fastestRound.timeTaken) {
        room.stats.fastestRound = {
          team: activeTeam,
          describer: describerName,
          timeTaken,
        };
      }
    }
  }

  // Funniest Fails log
  room.turn.words.forEach(w => {
    if (w.status === "fouled" || w.status === "skipped") {
      room.stats.funniestFails.push({
        describer: describerName,
        word: w.word,
        type: w.status === "fouled" ? "foul" : "skip",
      });
    }
  });

  sendSystemMessage(
    roomCode,
    `Round ${room.roundNumber} Turn for Team ${activeTeam} Ended (${reasonText})! Gained ${scoreGained} points. Total: Team A - ${room.teamScores.A} | Team B - ${room.teamScores.B}`
  );

  // Check Game Over
  const winningScore = room.settings.winningScore;
  const isTeamAWon = room.teamScores.A >= winningScore;
  const isTeamBWon = room.teamScores.B >= winningScore;

  if (isTeamAWon && isTeamBWon) {
    // Tiebreaker: Whoever has more points wins
    if (room.teamScores.A !== room.teamScores.B) {
      room.state = "GameOver";
      sendSystemMessage(roomCode, `🏆 Game Over! Team ${room.teamScores.A > room.teamScores.B ? "A" : "B"} wins the match! 🏆`);
    } else {
      // Exact tie: Continue one more round
      room.state = "RoundEnd";
    }
  } else if (isTeamAWon) {
    room.state = "GameOver";
    sendSystemMessage(roomCode, `🏆 Game Over! Team A wins the match! 🏆`);
  } else if (isTeamBWon) {
    room.state = "GameOver";
    sendSystemMessage(roomCode, `🏆 Game Over! Team B wins the match! 🏆`);
  } else {
    // Normal game flow: Proceed to Round End screen where the players review scores and start next turn
    room.state = "RoundEnd";
  }

  io.to(roomCode).emit("room_state", room);
}

// Helper: Choose next describer for a team using alternating rotation
function chooseNextDescriber(room: GameRoom, team: "A" | "B"): Player {
  const teamPlayers = room.players.filter(p => p.team === team);
  if (teamPlayers.length === 0) {
    throw new Error(`No players on Team ${team}`);
  }

  const describerCounts = new Map<string, number>();
  teamPlayers.forEach(p => describerCounts.set(p.name, 0));

  room.history.forEach(h => {
    if (h.team === team) {
      describerCounts.set(h.describerName, (describerCounts.get(h.describerName) || 0) + 1);
    }
  });

  // Find min count of turns described
  let minCount = Infinity;
  teamPlayers.forEach(p => {
    const cnt = describerCounts.get(p.name) || 0;
    if (cnt < minCount) minCount = cnt;
  });

  const candidates = teamPlayers.filter(p => (describerCounts.get(p.name) || 0) === minCount);

  // Sort candidates so those who described longest ago (earliest index in history) or never described come first
  candidates.sort((a, b) => {
    const lastIndexA = room.history.map(h => h.describerName).lastIndexOf(a.name);
    const lastIndexB = room.history.map(h => h.describerName).lastIndexOf(b.name);
    return lastIndexA - lastIndexB;
  });

  return candidates[0];
}

// Socket handlers
io.on("connection", (socket: Socket) => {
  console.log(`Socket connected: ${socket.id}`);

  // 1. Create Room
  socket.on("create_room", ({ name, avatar }, callback) => {
    try {
      const code = generateRoomCode();
      const host: Player = {
        id: socket.id,
        name,
        avatar: avatar || "😎",
        team: null,
        isHost: true,
        isReady: false,
      };

      const room: GameRoom = {
        code,
        players: [host],
        teamScores: { A: 0, B: 0 },
        settings: {
          winningScore: 40,
          roundTimer: 60,
          categories: ["Bollywood", "Indian Food", "IPL & Cricket", "Indian Memes", "Indian Cities"],
          useRestrictedWords: true, // Default to true
        },
        state: "Lobby",
        turn: null,
        roundNumber: 1,
        history: [],
        usedWordIds: [], // Track used words for this room
        stats: {
          bestDescriber: null,
          fastestRound: null,
          mostWordsGuessed: [],
          funniestFails: [],
        },
      };

      rooms.set(code, room);
      socket.join(code);
      console.log(`Room created: ${code} by ${name}`);

      callback({ success: true, roomCode: code, player: host });
      io.to(code).emit("room_state", room);
      sendSystemMessage(code, `✨ ${name} created the room! Welcome to Taboo India!`);
    } catch (e: any) {
      callback({ success: false, error: e.message });
    }
  });

  // 2. Join Room
  socket.on("join_room", ({ code, name, avatar }, callback) => {
    try {
      const roomCode = String(code).trim().toUpperCase();
      const room = rooms.get(roomCode);

      if (!room) {
        callback({ success: false, error: "Room not found. Check room code." });
        return;
      }

      // Check duplicate name
      if (room.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        callback({ success: false, error: "Name already taken in this room." });
        return;
      }

      const player: Player = {
        id: socket.id,
        name,
        avatar: avatar || "🤠",
        team: null, // Spectator or unassigned initially
        isHost: false,
        isReady: false,
      };

      room.players.push(player);
      socket.join(roomCode);
      console.log(`Player ${name} joined room ${roomCode}`);

      callback({ success: true, roomCode, player });
      io.to(roomCode).emit("room_state", room);
      sendSystemMessage(roomCode, `👋 ${name} joined the room!`);
    } catch (e: any) {
      callback({ success: false, error: e.message });
    }
  });

  // 3. Update Settings
  socket.on("update_settings", ({ winningScore, roundTimer, categories, useRestrictedWords }) => {
    // Find room the user is in
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      targetRoom.settings.winningScore = Number(winningScore) || 40;
      targetRoom.settings.roundTimer = Number(roundTimer) || 60;
      if (typeof useRestrictedWords === "boolean") {
        targetRoom.settings.useRestrictedWords = useRestrictedWords;
      }
      if (Array.isArray(categories) && categories.length > 0) {
        targetRoom.settings.categories = categories;
      }
      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `🔧 Game settings updated by Host.`);
    }
  });

  // 4. Toggle Ready
  socket.on("toggle_ready", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      const p = r.players.find(pl => pl.id === socket.id);
      if (p) {
        p.isReady = !p.isReady;
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      io.to(roomCode).emit("room_state", targetRoom);
    }
  });

  // 5. Team Assignment - Host custom drag option OR manual click
  socket.on("assign_team", ({ playerId, team }) => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        const targetPlayer = r.players.find(pl => pl.id === playerId);
        if (targetPlayer) {
          targetPlayer.team = team; // "A" | "B" | null
          targetRoom = r;
          roomCode = code;
        }
        break;
      }
    }

    if (targetRoom) {
      io.to(roomCode).emit("room_state", targetRoom);
    }
  });

  // 6. Auto-Balance Teams (Host trigger)
  socket.on("auto_balance", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      // Shuffle players
      const pool = [...targetRoom.players].sort(() => 0.5 - Math.random());
      pool.forEach((player, idx) => {
        player.team = idx % 2 === 0 ? "A" : "B";
      });
      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `⚖️ Host balanced teams automatically!`);
    }
  });

  // 7. Transition to Teams Allocation state
  socket.on("goto_teams_setup", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      targetRoom.state = "TeamsSetup";
      io.to(roomCode).emit("room_state", targetRoom);
    }
  });

  // 8. Start Game (transition from Lobby/Teams Setup to Gameplay)
  socket.on("start_game", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      // Check that there are players in team A & B
      const hasTeamA = targetRoom.players.some(p => p.team === "A");
      const hasTeamB = targetRoom.players.some(p => p.team === "B");

      if (!hasTeamA || !hasTeamB) {
        socket.emit("error_msg", "Need at least 1 player on both Team A and Team B to start!");
        return;
      }

      // Initialize scores and round
      targetRoom.teamScores = { A: 0, B: 0 };
      targetRoom.roundNumber = 1;
      targetRoom.state = "Gameplay";
      targetRoom.history = [];
      targetRoom.stats = {
        bestDescriber: null,
        fastestRound: null,
        mostWordsGuessed: [],
        funniestFails: [],
      };

      // Set up first turn
      // Alternate team turn starts with A
      const nextTeam = "A";
      const chosenDescriber = chooseNextDescriber(targetRoom, nextTeam);

      const drawnWords = drawTurnWords(targetRoom.settings.categories, targetRoom);

      targetRoom.turn = {
        team: nextTeam,
        describerId: chosenDescriber.id,
        words: drawnWords,
        startedAt: null, // Host/Describer starts the physical count
        timeLeft: targetRoom.settings.roundTimer,
        isActive: false,
      };

      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `🚀 Game Started! Turn 1: Team A's describer is ${chosenDescriber.name}. Guessers get ready!`);
    }
  });

  // 9. Start the physical turn timer (describer/host clicks "Start Turn")
  socket.on("start_active_turn", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.turn && (r.turn.describerId === socket.id || r.players.find(p => p.id === socket.id)?.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom && targetRoom.turn && !targetRoom.turn.isActive) {
      targetRoom.turn.isActive = true;
      targetRoom.turn.startedAt = Date.now();
      targetRoom.turn.timeLeft = targetRoom.settings.roundTimer;
      startTurnCountdown(roomCode);
      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `⏱️ Turn start! ${targetRoom.players.find(p => p.id === targetRoom.turn?.describerId)?.name} is describing! Go go!`);
    }
  });

  // 10. Describer clicks Skip / Correct / Foul on a word
  socket.on("describer_action", ({ wordId, action }) => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.turn && r.turn.isActive && r.turn.describerId === socket.id) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom && targetRoom.turn && targetRoom.turn.isActive) {
      const wordState = targetRoom.turn.words.find(w => w.id === wordId);
      if (wordState) {
        if (action === "correct" && wordState.status !== "guessed") {
          wordState.status = "guessed";
          wordState.guessedBy = "Describer Flag";
          wordState.guessedExactly = true;
          io.to(roomCode).emit("play_fx", "correct");
        } else if (action === "skip") {
          wordState.status = "skipped";
          io.to(roomCode).emit("play_fx", "skip");
        } else if (action === "foul") {
          wordState.status = "fouled";
          io.to(roomCode).emit("play_fx", "foul");
        }

        // Send feedback message
        const descName = targetRoom.players.find(p => p.id === socket.id)?.name || "Describer";
        sendSystemMessage(roomCode, `📢 ${descName} flagged "${wordState.word}" as ${action.toUpperCase()}!`);

        // Check if all 5 words now have a status that is not "unguessed"
        const allPlayed = targetRoom.turn.words.every(w => w.status !== "unguessed");
        if (allPlayed) {
          handleTurnEnd(roomCode, "All words loaded");
        } else {
          io.to(roomCode).emit("room_state", targetRoom);
        }
      }
    }
  });

  // Real-time text submission from guessers
  socket.on("submit_guesses", ({ guessText }) => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    let player: Player | undefined;

    for (const [code, r] of rooms.entries()) {
      player = r.players.find(p => p.id === socket.id);
      if (player && r.turn && r.turn.isActive && player.team === r.turn.team && r.turn.describerId !== player.id) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    // Process if it's the valid active guessing team (and NOT the describer)
    if (targetRoom && targetRoom.turn && player) {
      // Direct pass guess broadcast to team chats so others see live feedback
      socket.to(roomCode).emit("live_typing_guess", {
        playerId: player.id,
        playerName: player.name,
        text: guessText,
      });

      let wasSomethingCorrect = false;

      // Check entire guess against all unguessed words
      targetRoom.turn.words.forEach((wordState: RoundWordState) => {
        if (wordState.status === "unguessed") {
          const check = checkWordMatch(guessText, wordState.word);
          if (check.matches) {
            wordState.status = "guessed";
            wordState.guessedBy = player!.name;
            wordState.guessedExactly = check.exact;
            wordState.guessedText = guessText;
            wasSomethingCorrect = true;

            if (check.exact) {
              sendSystemMessage(roomCode, `🎉 PERFECT! ${player!.name} word-guessed "${guessText}" exactly! (+2 points)`, true);
            } else {
              sendSystemMessage(roomCode, `👍 CLOSE SPELLING! ${player!.name} guessed "${guessText}" (near enough, +1 point)`, true);
            }
          }
        }
      });

      if (wasSomethingCorrect) {
        io.to(roomCode).emit("play_fx", "correct");
        
        // Check if all 5 words are now completed
        const allPlayed = targetRoom.turn.words.every(w => w.status !== "unguessed");
        if (allPlayed) {
          handleTurnEnd(roomCode, "All words guessed!");
        } else {
          io.to(roomCode).emit("room_state", targetRoom);
        }
      }
    }
  });

  // 12. Proceed to next turn (trigger by Host/Active Players from Round End Screen)
  socket.on("next_turn", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom && targetRoom.state === "RoundEnd") {
      // Increment round count if Team B just played
      const lastTeam = targetRoom.turn?.team;
      let nextTeam: "A" | "B" = "A";
      
      if (lastTeam === "A") {
        nextTeam = "B";
      } else {
        nextTeam = "A";
        targetRoom.roundNumber += 1;
      }

      const teamPlayers = targetRoom.players.filter(p => p.team === nextTeam);
      
      if (teamPlayers.length === 0) {
        socket.emit("error_msg", `No players on Team ${nextTeam} to describe! Assign players first.`);
        return;
      }

      // Rotate describer using alternating rotation
      const chosenDescriber = chooseNextDescriber(targetRoom, nextTeam);

      const drawnWords = drawTurnWords(targetRoom.settings.categories, targetRoom);

      targetRoom.turn = {
        team: nextTeam,
        describerId: chosenDescriber.id,
        words: drawnWords,
        startedAt: null,
        timeLeft: targetRoom.settings.roundTimer,
        isActive: false,
      };

      targetRoom.state = "Gameplay";
      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `🎬 Next turn loaded! Team ${nextTeam}'s describer is ${chosenDescriber.name}. Click Start when ready!`);
    }
  });

  // 13. Reset and play again
  socket.on("reset_game", () => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    for (const [code, r] of rooms.entries()) {
      if (r.players.some(p => p.id === socket.id && p.isHost)) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom) {
      targetRoom.state = "Lobby";
      targetRoom.teamScores = { A: 0, B: 0 };
      targetRoom.roundNumber = 1;
      targetRoom.turn = null;
      targetRoom.history = [];
      targetRoom.usedWordIds = [];
      targetRoom.stats = {
        bestDescriber: null,
        fastestRound: null,
        mostWordsGuessed: [],
        funniestFails: [],
      };
      
      // Reset players ready trigger
      targetRoom.players.forEach(p => p.isReady = false);

      io.to(roomCode).emit("room_state", targetRoom);
      sendSystemMessage(roomCode, `🔄 Host reset the game. Let's lobby up!`);
    }
  });

  // 14. Chat message from users
  socket.on("send_chat", ({ text }) => {
    let targetRoom: GameRoom | null = null;
    let roomCode = "";
    let player: Player | undefined;

    for (const [code, r] of rooms.entries()) {
      player = r.players.find(p => p.id === socket.id);
      if (player) {
        targetRoom = r;
        roomCode = code;
        break;
      }
    }

    if (targetRoom && player) {
      io.to(roomCode).emit("chat_message", {
        id: Math.random().toString(36).slice(2, 9),
        senderName: player.name,
        senderTeam: player.team,
        text,
        isSystem: false,
      });
    }
  });

  // 15. Disconnects
  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
    
    // Find rooms containing player
    for (const [code, r] of rooms.entries()) {
      const pIdx = r.players.findIndex(p => p.id === socket.id);
      if (pIdx !== -1) {
        const p = r.players[pIdx];
        r.players.splice(pIdx, 1);
        sendSystemMessage(code, `❌ ${p.name} disconnected.`);

        // If turn was active under this describer, end it
        if (r.turn && r.turn.describerId === socket.id) {
          handleTurnEnd(code, "Describer disconnected");
        }

        // If room is empty, clear it
        if (r.players.length === 0) {
          if (roomIntervals.has(code)) {
            clearInterval(roomIntervals.get(code)!);
            roomIntervals.delete(code);
          }
          rooms.delete(code);
          console.log(`Room ${code} cleaned up - no players.`);
        } else {
          // If the host left, assign new host!
          if (p.isHost) {
            r.players[0].isHost = true;
            sendSystemMessage(code, `👑 Host disconnected. ${r.players[0].name} is the new host!`);
          }
          io.to(code).emit("room_state", r);
        }
        break;
      }
    }
  });
});

// Serve assets based on environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
