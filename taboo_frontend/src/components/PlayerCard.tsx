import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Player } from '../hooks/useGameRoom';
import { User, Crown } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: player.id,
    data: player,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-primary hover:bg-opacity-80 p-3 rounded-md flex items-center justify-between border border-gray-600 cursor-grab shadow-sm"
    >
      <div className="flex items-center space-x-2">
        <User size={18} className="text-gray-400" />
        <span className="font-medium">{player.name}</span>
      </div>
      {player.host && <Crown size={16} className="text-yellow-400"  />}
    </div>
  );
};

export default PlayerCard;