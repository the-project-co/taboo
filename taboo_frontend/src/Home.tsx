import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/ui/Button';

export const Home: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    if (!playerName.trim()) return;
    try {
      const res = await fetch('http://localhost:8080/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hostName: playerName }),
      });
      const data = await res.json();
      navigate(`/room/${data.id}?name=${encodeURIComponent(playerName)}`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleJoinRoom = () => {
    if (!playerName.trim() || !roomId.trim()) return;
    navigate(`/room/${roomId.toUpperCase()}?name=${encodeURIComponent(playerName)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-secondary p-8 rounded-xl border border-gray-700 w-full max-w-md shadow-lg flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-accent mb-8 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,255,204,0.5)]">
          Taboo
        </h1>

        <div className="w-full mb-6">
          <label className="block text-text-muted text-sm font-medium mb-2" htmlFor="playerName">
            Display Name
          </label>
          <input
            id="playerName"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full bg-primary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your name"
          />
        </div>

        <Button onClick={handleCreateRoom} className="w-full mb-6" size="lg">
          Create New Room
        </Button>

        <div className="flex items-center w-full mb-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="w-full flex space-x-2">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value.toUpperCase())}
            className="flex-1 bg-primary border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent uppercase"
            placeholder="Room Code"
            maxLength={6}
          />
          <Button onClick={handleJoinRoom} variant="secondary">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};