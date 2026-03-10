import React, { createContext, useContext, useEffect, useState } from "react"; import type { ReactNode } from 'react';
import { Client } from "@stomp/stompjs";

interface WebSocketContextProps {
  client: Client | null;
  connected: boolean;
}

const WebSocketContext = createContext<WebSocketContextProps>({ client: null, connected: false });

export const useWebSocket = () => useContext(WebSocketContext);

interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // In dev, assuming the Spring backend runs on 8080
    const brokerURL = `ws://localhost:8080/ws`;

    const stompClient = new Client({
      brokerURL,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to WebSocket');
        setConnected(true);
      },
      onDisconnect: () => {
        console.log('Disconnected from WebSocket');
        setConnected(false);
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ client, connected }}>
      {children}
    </WebSocketContext.Provider>
  );
};