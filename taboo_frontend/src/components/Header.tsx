import React from 'react';
import { motion } from 'framer-motion';
import type { GameRoom } from '../hooks/useGameRoom';
import { Clock } from 'lucide-react';

interface HeaderProps {
  room: GameRoom;
  timer: number;
}

const Header: React.FC<HeaderProps> = ({ room, timer }) => {
  const isLowTime = timer <= 10;

  return (
    <div className="flex justify-between items-center bg-secondary p-4 rounded-lg border border-gray-700 mb-6 shadow-md">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-accent">Team A</span>
        <span className="text-3xl font-bold text-white">{room.teamAScore}</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-gray-400 mb-1">Current Turn</span>
        <span className="text-lg font-bold text-white mb-2">
          {room.currentTurn === 'TEAM_A' ? 'Team A' : 'Team B'}
        </span>

        <motion.div
          className={`flex items-center justify-center w-20 h-20 rounded-full border-4 ${isLowTime ? 'border-danger text-danger' : 'border-accent text-accent'}`}
          animate={{
            scale: isLowTime ? [1, 1.1, 1] : 1,
            boxShadow: isLowTime ? ['0px 0px 0px rgba(255, 76, 76, 0)', '0px 0px 20px rgba(255, 76, 76, 0.5)', '0px 0px 0px rgba(255, 76, 76, 0)'] : 'none',
          }}
          transition={{
            repeat: isLowTime ? Infinity : 0,
            duration: 1,
          }}
        >
          <div className="flex flex-col items-center">
            <Clock size={20} />
            <span className="text-2xl font-bold">{timer}</span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xl font-bold text-accent">Team B</span>
        <span className="text-3xl font-bold text-white">{room.teamBScore}</span>
      </div>
    </div>
  );
};

export default Header;