## 2026-03-21 - Stored XSS in WebSocket Broadcasting
**Vulnerability:** Unsanitized inputs stored in memory and broadcasted.
**Learning:** Real-time apps require sanitization before state modification.
**Prevention:** Use `HtmlUtils.htmlEscape()`.
