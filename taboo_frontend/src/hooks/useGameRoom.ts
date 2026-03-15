import { useEffect, useState, useCallback } from 'react';
import { useWebSocket } from '../context/WebSocketProvider';
import type { IMessage } from '@stomp/stompjs';
import confetti from 'canvas-confetti';

export interface Player {
    id: string;
    name: string;
    team: 'TEAM_A' | 'TEAM_B' | 'UNASSIGNED';
    host: boolean;
}

export interface GuessLogEntry {
    playerName: string;
    guess: string;
    result: 'CORRECT' | 'PARTIAL' | 'INCORRECT';
}

export interface GameRoom {
    id: string;
    state: 'LOBBY' | 'PLAYING' | 'FINISHED';
    players: Player[];
    teamAScore: number;
    teamBScore: number;
    currentTurn: 'TEAM_A' | 'TEAM_B';
    currentClueGiverId: string | null;
    timeRemaining: number;
    currentWords: string[];
}

export const useGameRoom = (roomId: string) => {
    const { client, connected } = useWebSocket();
    const [room, setRoom] = useState<GameRoom | null>(null);
    const [timer, setTimer] = useState<number>(30);
    const [guesses, setGuesses] = useState<GuessLogEntry[]>([]);

    useEffect(() => {
        if (!client || !connected || !roomId) return;

        console.log(`Subscribing to room ${roomId}`);

        // Initial fetch
        fetch(`http://localhost:8080/api/rooms/${roomId}`)
            .then((res) => res.json())
            .then((data) => setRoom(data))
            .catch(console.error);

        const roomSub = client.subscribe(`/topic/room/${roomId}`, (message: IMessage) => {
            setRoom(JSON.parse(message.body));
        });

        const timerSub = client.subscribe(`/topic/room/${roomId}/timer`, (message: IMessage) => {
            setTimer(parseInt(message.body, 10));
        });

        const guessSub = client.subscribe(`/topic/room/${roomId}/guesses`, (message: IMessage) => {
            const newGuess = JSON.parse(message.body) as GuessLogEntry;
            setGuesses((prev) => [...prev, newGuess]);

            if (newGuess.result === 'CORRECT') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#00ffcc', '#4ade80', '#ffffff']
                });
            }
        });

        return () => {
            roomSub.unsubscribe();
            timerSub.unsubscribe();
            guessSub.unsubscribe();
        };
    }, [client, connected, roomId]);

    const joinRoom = useCallback((playerName: string) => {
        if (client?.connected) {
            client.publish({
                destination: `/app/room/${roomId}/join`,
                body: JSON.stringify({ playerName })
            });
        }
    }, [client, roomId]);

    const assignTeam = useCallback((playerId: string, team: string) => {
        if (client?.connected) {
            client.publish({
                destination: `/app/room/${roomId}/team`,
                body: JSON.stringify({ playerId, team })
            });
        }
    }, [client, roomId]);

    const randomizeTeams = useCallback((playerId: string) => {
        if (client?.connected) {
            client.publish({
                destination: `/app/room/${roomId}/randomize`,
                body: JSON.stringify({ playerId })
            });
        }
    }, [client, roomId]);

    const startGame = useCallback((playerId: string) => {
        if (client?.connected) {
            client.publish({
                destination: `/app/room/${roomId}/start`,
                body: JSON.stringify({ playerId })
            });
        }
    }, [client, roomId]);

    const startTurn = useCallback(() => {
        setGuesses([]);
        if (client?.connected) {
            client.publish({ destination: `/app/room/${roomId}/start-turn` });
        }
    }, [client, roomId]);

    const submitGuess = useCallback((playerName: string, guesses: string) => {
        if (client?.connected) {
            client.publish({
                destination: `/app/room/${roomId}/guess`,
                body: JSON.stringify({ playerName, guesses })
            });
        }
    }, [client, roomId]);

    return {
        room, timer, guesses, connected,
        joinRoom, assignTeam, randomizeTeams, startGame, startTurn, submitGuess
    };
};