## 2024-05-20 - Stored XSS in WebSocket Broadcasts
**Vulnerability:** User inputs (playerName, hostName) were stored directly in the `GameRoom` object in `GameManager` and then broadcasted via WebSockets without any sanitization. This allowed Stored XSS if a user joined or created a room with a malicious name (e.g., `<script>alert(1)</script>`).
**Learning:** Real-time multiplayer games that rely heavily on in-memory backend state management to broadcast updates must sanitize inputs upon state mutation to prevent XSS payloads from being injected into the shared state.
**Prevention:** Always sanitize user inputs (e.g., using `org.springframework.web.util.HtmlUtils.htmlEscape()`) before storing them in shared models that will be broadcasted to clients.
