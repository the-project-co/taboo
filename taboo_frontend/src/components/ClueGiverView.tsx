import React from 'react';
import { Button } from './ui/Button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClueGiverViewProps {
  currentWords: string[];
  isTurnActive: boolean;
  onStartTurn: () => void;
}

const ClueGiverView: React.FC<ClueGiverViewProps> = ({ currentWords, isTurnActive, onStartTurn }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-lg border border-gray-700 w-full min-h-[400px]">
      <h2 className="text-2xl font-bold text-accent mb-6">You are the Clue Giver!</h2>

      {!isTurnActive ? (
        <Button onClick={onStartTurn} variant="primary" size="lg" icon={<Play size={24} />}>
          Start Turn
        </Button>
      ) : (
        <div className="flex flex-col items-center w-full">
          <p className="text-text-muted mb-6">Describe these words to your team without saying them:</p>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {currentWords.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary px-6 py-4 rounded-xl border-2 border-accent shadow-[0_0_15px_rgba(0,255,204,0.3)] min-w-[150px] text-center"
              >
                <span className="text-xl font-bold text-white uppercase tracking-wider">{word}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClueGiverView;