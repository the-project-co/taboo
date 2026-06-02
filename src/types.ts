/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Player {
  id: string;
  name: string;
  avatar: string; // emoji or design icon
  team: "A" | "B" | null; // null means spectator or unassigned
  isHost: boolean;
  isReady: boolean;
}

export interface WordCard {
  id: string;
  word: string;
  category: string;
  restricted: string[];
}

export interface RoundWordState extends WordCard {
  status: "unguessed" | "guessed" | "skipped" | "fouled";
  guessedBy: string | null; // player name who first guessed it
  guessedExactly: boolean;
  guessedText?: string;
}

export interface GameSettings {
  winningScore: number;
  roundTimer: number; // seconds, e.g. 60
  categories: string[]; // list of active categories
  useRestrictedWords: boolean;
}

export interface GameStats {
  bestDescriber: string | null; // name of player with most correct describer guesses
  fastestRound: { team: "A" | "B"; describer: string; timeTaken: number } | null;
  mostWordsGuessed: { playerName: string; count: number }[];
  funniestFails: { describer: string; word: string; type: "foul" | "skip" }[];
}

export interface GameTurn {
  team: "A" | "B";
  describerId: string;
  words: RoundWordState[];
  startedAt: number | null; // Date.now() timestamp when timer started
  timeLeft: number;
  isActive: boolean;
}

export interface GameRoom {
  code: string;
  players: Player[];
  teamScores: {
    A: number;
    B: number;
  };
  settings: GameSettings;
  state: "Lobby" | "TeamsSetup" | "Gameplay" | "RoundEnd" | "GameOver";
  turn: GameTurn | null;
  roundNumber: number;
  history: {
    round: number;
    team: "A" | "B";
    describerName: string;
    scoreGained: number;
    wordsGuessed: string[];
  }[];
  stats: GameStats;
  usedWordIds: string[];
}

export interface ChatMessage {
  id: string;
  senderName: string;
  senderTeam: "A" | "B" | null;
  text: string;
  isSystem: boolean;
  isCorrectGuess?: boolean;
}
