import React from 'react';
import Header from './Header';
import ClueGiverView from './ClueGiverView';
import GuesserView from './GuesserView';
import GuessLog from './GuessLog';
import type { GameRoom, GuessLogEntry } from '../hooks/useGameRoom';

interface GameScreenProps {
  room: GameRoom;
  timer: number;
  guesses: GuessLogEntry[];
  currentPlayerId: string;
  currentPlayerName: string;
  onStartTurn: () => void;
  onSubmitGuess: (playerName: string, guesses: string) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({
  room, timer, guesses, currentPlayerId, currentPlayerName, onStartTurn, onSubmitGuess
}) => {
  const isClueGiver = room.currentClueGiverId === currentPlayerId;
  const myTeam = room.players.find(p => p.id === currentPlayerId)?.team;
  const isMyTeamTurn = room.currentTurn === myTeam;
  const isTurnActive = room.currentWords && room.currentWords.length > 0;

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto p-6">
      <Header room={room} timer={timer} />

      <div className="flex flex-col md:flex-row gap-6 h-full mt-4">
        <div className="flex-1 flex flex-col">
          {isClueGiver ? (
            <ClueGiverView
              currentWords={room.currentWords || []}
              isTurnActive={isTurnActive}
              onStartTurn={onStartTurn}
            />
          ) : (
            <div className="flex-1 flex flex-col">
              <div className="flex-1 bg-secondary rounded-lg border border-gray-700 p-8 flex flex-col items-center justify-center text-center">
                 {!isTurnActive ? (
                   <div>
                     <h2 className="text-2xl font-bold text-accent mb-2">Waiting for Clue Giver...</h2>
                     <p className="text-text-muted">The clue giver is getting ready to start the turn.</p>
                   </div>
                 ) : (
                   <div>
                     <h2 className="text-3xl font-bold text-accent mb-4">Guess the words!</h2>
                     <p className="text-text-muted text-lg">Watch the guess log and work with your team.</p>
                   </div>
                 )}
              </div>
              <GuesserView
                isTurnActive={isTurnActive}
                onSubmitGuess={(guesses) => onSubmitGuess(currentPlayerName, guesses)}
                isMyTeamTurn={isMyTeamTurn}
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-96 shrink-0">
          <GuessLog guesses={guesses} />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;