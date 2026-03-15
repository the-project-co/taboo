import React from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import DroppableColumn from './DroppableColumn';
import type { GameRoom } from '../hooks/useGameRoom';
import { Button } from './ui/Button';
import { Users, Play } from 'lucide-react';

interface LobbyProps {
  room: GameRoom;
  currentPlayerId: string;
  onAssignTeam: (playerId: string, team: string) => void;
  onRandomize: () => void;
  onStartGame: () => void;
}

const Lobby: React.FC<LobbyProps> = ({ room, currentPlayerId, onAssignTeam, onRandomize, onStartGame }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const playerId = active.id as string;
    let targetId = over.id as string;

    // Check if the drop target is a player instead of a column.
    // If so, get the team of the target player.
    const isTargetPlayer = room.players.find(p => p.id === targetId);
    if (isTargetPlayer) {
      targetId = isTargetPlayer.team;
    }

    const player = room.players.find(p => p.id === playerId);
    if (player && player.team !== targetId) {
      onAssignTeam(playerId, targetId);
    }
  };

  const getTeamPlayers = (team: string) => {
    return room.players.filter(p => p.team === team);
  };

  const currentPlayer = room.players.find(p => p.id === currentPlayerId);
  const isHost = currentPlayer?.host || false;

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Room Code: <span className="text-accent">{room.id}</span></h1>
          <p className="text-text-muted">Invite your friends to join this room.</p>
        </div>
        {isHost && (
          <div className="flex space-x-4">
            <Button onClick={onRandomize} variant="secondary" icon={<Users />}>
              Randomize Teams
            </Button>
            <Button onClick={onStartGame} variant="primary" icon={<Play />}>
              Start Game
            </Button>
          </div>
        )}
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DroppableColumn id="TEAM_A" title="Team A" players={getTeamPlayers('TEAM_A')} />
          <DroppableColumn id="UNASSIGNED" title="Unassigned" players={getTeamPlayers('UNASSIGNED')} />
          <DroppableColumn id="TEAM_B" title="Team B" players={getTeamPlayers('TEAM_B')} />
        </div>
      </DndContext>
    </div>
  );
};

export default Lobby;