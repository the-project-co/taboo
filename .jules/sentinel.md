## 2024-05-20 - Stored XSS in WebSocket Broadcasts
**Vulnerability:** User input (`playerName`, `hostName`) in `GameManager` was being added to `GameRoom` and broadcasted via WebSockets to all clients without sanitization, leading to Stored XSS if the frontend renders these values directly.
**Learning:** WebSocket payloads broadcasted to multiple clients must be sanitized at the source (backend), especially when updating shared in-memory state.
**Prevention:** Always use `HtmlUtils.htmlEscape()` on user input before adding it to shared state and broadcasting via WebSockets.
