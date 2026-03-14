## 2024-05-18 - Stored XSS via WebSockets in GameRoom State
**Vulnerability:** User inputs (player names and IDs) were stored directly in the `GameRoom` in-memory state and broadcast unescaped to all clients via WebSockets.
**Learning:** In-memory state broadcast to clients needs just as much sanitization as data stored in a database, especially in real-time applications where clients render this data directly. Unsanitized strings present a severe Stored XSS vulnerability.
**Prevention:** Sanitize user input immediately at the service layer boundary. As per specific project requirements and memory instructions, `org.springframework.web.util.HtmlUtils.htmlEscape()` must be used to sanitize inputs before storage in shared state models like `GameRoom` that are broadcasted.
