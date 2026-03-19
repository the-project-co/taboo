import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import type { Player } from '../hooks/useGameRoom';
import PlayerCard from './PlayerCard';

interface DroppableColumnProps {
  id: string;
  title: string;
  players: Player[];
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ id, title, players }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className="flex flex-col bg-secondary rounded-lg p-4 w-full min-h-[300px] border border-gray-700">
      <h2 className="text-xl font-bold text-center text-accent mb-4">{title}</h2>
      <div ref={setNodeRef} className="flex-1 space-y-2">
        <SortableContext items={players.map(p => p.id)} strategy={verticalListSortingStrategy}>
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default DroppableColumn;