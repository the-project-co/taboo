## 2024-05-24 - Stored XSS in WebSocket Broadcasts
**Vulnerability:** Unsanitized player names and IDs were stored in the `GameRoom` concurrent hash map state and broadcasted to clients via WebSockets, allowing Stored XSS.
**Learning:** In-memory state shared across WebSocket clients is a valid vector for Stored XSS, even if not persisted to a database.
**Prevention:** Always sanitize user inputs (e.g. using `HtmlUtils.htmlEscape()`) before writing them into shared game state objects.
