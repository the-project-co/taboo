import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGameRoom } from './hooks/useGameRoom';
import Lobby from './components/Lobby';
import GameScreen from './components/GameScreen';
import { Button } from './components/ui/Button';

export const Room: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [playerNameInput, setPlayerNameInput] = useState('');
  const playerName = searchParams.get('name') || '';

  const {
    room, timer, guesses, connected,
    joinRoom, assignTeam, randomizeTeams, startGame, startTurn, submitGuess
  } = useGameRoom(id!);

  useEffect(() => {
    if (connected && room && playerName && !room.players.find(p => p.name === playerName)) {
      joinRoom(playerName);
    }
  }, [connected, room, playerName, joinRoom]);

  const handleNameSubmit = () => {
    if (playerNameInput.trim()) {
      setSearchParams({ name: playerNameInput.trim() });
    }
  };

  if (!playerName) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-secondary p-8 rounded-xl border border-gray-700 w-full max-w-md shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold text-accent mb-6">Join Room {id}</h2>
          <div className="w-full mb-6">
            <label className="block text-text-muted text-sm font-medium mb-2" htmlFor="playerName">
              Display Name
            </label>
            <input
              id="playerName"
              type="text"
              value={playerNameInput}
              onChange={(e) => setPlayerNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
              className="w-full bg-primary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your name"
            />
          </div>
          <Button onClick={handleNameSubmit} className="w-full" size="lg">
            Join
          </Button>
        </div>
      </div>
    );
  }

  if (!connected) return <div className="text-center mt-20 text-text-muted text-xl animate-pulse">Connecting to server...</div>;
  if (!room) return <div className="text-center mt-20 text-text-muted text-xl animate-pulse">Loading room...</div>;

  const currentPlayer = room.players.find(p => p.name === playerName);

  if (room.state === 'LOBBY') {
    return (
      <Lobby currentPlayerId={currentPlayer?.id || ''}
        room={room}
        onAssignTeam={assignTeam}
        onRandomize={() => randomizeTeams(currentPlayer?.id || '')}
        onStartGame={() => startGame(currentPlayer?.id || '')}
      />
    );
  }

  return (
    <GameScreen
      room={room}
      timer={timer}
      guesses={guesses}
      currentPlayerId={currentPlayer?.id || ''}
      currentPlayerName={playerName}
      onStartTurn={startTurn}
      onSubmitGuess={submitGuess}
    />
  );
};