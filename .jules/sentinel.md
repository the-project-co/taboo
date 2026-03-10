## 2026-03-10 - [XSS and DoS Prevention in Game Room Creation and Guesses]
**Vulnerability:** Potential Cross-Site Scripting (XSS) via unescaped player and room names, and Denial of Service (DoS) via excessively large payload sizes during guess submissions.
**Learning:** WebSocket endpoints (`@MessageMapping`) receiving direct user input (maps or DTOs) lack default sanitization or length constraints in the base Spring configuration, allowing raw strings to be broadcast to all connected clients.
**Prevention:** Apply explicit length limits (e.g., 50 chars for names, 500 chars for guesses) and use robust escaping (e.g., `org.springframework.web.util.HtmlUtils.htmlEscape()`) immediately at the service layer entry points before processing or broadcasting state.
