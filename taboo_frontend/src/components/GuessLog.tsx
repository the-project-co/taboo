import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GuessLogEntry } from '../hooks/useGameRoom';
import { CheckCircle, XCircle } from 'lucide-react';

interface GuessLogProps {
  guesses: GuessLogEntry[];
}

const GuessLog: React.FC<GuessLogProps> = ({ guesses }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [guesses]);

  const getIcon = (result: string) => {
    switch (result) {
      case 'CORRECT':
        return <CheckCircle size={18} className="text-success" />;
      case 'PARTIAL':
        return <span className="text-yellow-400 font-bold">🔤</span>; // ABC emoji or similar
      default:
        return <XCircle size={18} className="text-danger" />;
    }
  };

  return (
    <div className="bg-secondary rounded-lg border border-gray-700 p-4 h-full min-h-[400px] flex flex-col w-full max-w-sm ml-auto">
      <h3 className="text-xl font-bold text-accent mb-4 border-b border-gray-700 pb-2">Guess Log</h3>

      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        <AnimatePresence>
          {guesses.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between bg-primary p-3 rounded-md border border-gray-700"
            >
              <div className="flex flex-col">
                <span className="text-xs text-text-muted">{entry.playerName}</span>
                <span className="font-medium text-white break-words max-w-[200px]">{entry.guess}</span>
              </div>
              <div>{getIcon(entry.result)}</div>
            </motion.div>
          ))}
          {guesses.length === 0 && (
            <div className="text-center text-text-muted mt-10">No guesses yet...</div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GuessLog;