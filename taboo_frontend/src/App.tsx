
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WebSocketProvider } from './context/WebSocketProvider';
import { Home } from './Home';
import { Room } from './Room';
import './index.css';

function App() {
  return (
    <Router>
      <WebSocketProvider>
        <div className="bg-primary min-h-screen text-text font-sans selection:bg-accent selection:text-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<Room />} />
          </Routes>
        </div>
      </WebSocketProvider>
    </Router>
  );
}

export default App;