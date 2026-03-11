## 2024-05-18 - WebSocket Stored XSS via In-Memory Room State
**Vulnerability:** Unsanitized user inputs (`hostName`, `hostId`, `playerName`, `playerId`) were accepted during room creation and joining, stored in a `ConcurrentHashMap`, and broadcasted to all connected clients in the room via WebSockets.
**Learning:** In a real-time multiplayer architecture using WebSockets, inputs that are stored server-side and immediately broadcasted to other clients act as a potent vector for Stored XSS if not sanitized, bypassing typical request/response validation patterns.
**Prevention:** Always sanitize any user-provided string (e.g., using `HtmlUtils.htmlEscape`) before storing it in shared application state (like a game room object) that will be broadcasted to clients.
