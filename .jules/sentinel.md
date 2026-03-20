## 2024-05-18 - Prevent Stored XSS in WebSocket message broadcasting
**Vulnerability:** User inputs (playerName, playerId) were stored in memory and broadcasted to clients over WebSockets without sanitization.
**Learning:** This could lead to Stored XSS where a malicious user could inject scripts into the game room state, affecting all clients.
**Prevention:** Always sanitize inputs handled by the backend and stored in the shared in-memory state (e.g., `GameRoom`) using `org.springframework.web.util.HtmlUtils.htmlEscape()` before processing or broadcasting.
