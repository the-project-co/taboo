## 2026-03-12 - [XSS] Fix Stored XSS via WebSocket Broadcasts
**Vulnerability:** User-provided `hostName`, `hostId`, `playerName`, and `playerId` parameters were added to the `GameRoom` state without sanitization and broadcasted to clients over WebSockets via `broadcastRoomUpdate`.
**Learning:** In a real-time multiplayer backend, any player state data received from a WebSocket message and added to shared room state can act as a Stored XSS vector for all players in that room when the state is broadcasted back.
**Prevention:** Use standard sanitation libraries like `org.springframework.web.util.HtmlUtils.htmlEscape()` on any user input before adding it to shared state objects that are serialized and broadcasted.
