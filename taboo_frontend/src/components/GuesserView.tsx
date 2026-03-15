import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';

interface GuesserViewProps {
  isTurnActive: boolean;
  onSubmitGuess: (guesses: string) => void;
  isMyTeamTurn: boolean;
}

const GuesserView: React.FC<GuesserViewProps> = ({ isTurnActive, onSubmitGuess, isMyTeamTurn }) => {
  const [guessInput, setGuessInput] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (guessInput.trim()) {
      onSubmitGuess(guessInput);
      setGuessInput('');
    }
  };

  if (!isMyTeamTurn) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-lg border border-gray-700 min-h-[200px] w-full mt-6">
        <h2 className="text-2xl font-bold text-gray-400 mb-2">It's not your team's turn.</h2>
        <p className="text-text-muted">Wait for the other team to finish.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-lg border border-gray-700 min-h-[200px] w-full mt-6">
      <h2 className="text-2xl font-bold text-accent mb-6">You are a Guesser!</h2>
      <p className="text-text-muted mb-4">Type your guesses below, separated by commas if you have multiple.</p>

      <form onSubmit={handleSubmit} className="flex w-full max-w-lg space-x-2">
        <input
          type="text"
          disabled={!isTurnActive}
          value={guessInput}
          onChange={(e) => setGuessInput(e.target.value)}
          placeholder={isTurnActive ? 'E.g., apple, tree, car...' : 'Wait for clue giver to start...'}
          aria-label="Your guess"
          className="flex-1 bg-primary border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
        />
        <Button type="submit" disabled={!isTurnActive || !guessInput.trim()} variant="primary" icon={<Send size={18} />}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default GuesserView;