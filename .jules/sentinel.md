## 2024-05-20 - Stored XSS in GameManager User Inputs
**Vulnerability:** User-provided `hostName` and `playerName` are not sanitized before being added to `GameRoom` instances. Since `GameRoom` is broadcasted over WebSockets without escaping, malicious scripts could be injected.
**Learning:** In-memory shared state broadcasted via WebSockets requires server-side input sanitization.
**Prevention:** Always escape user inputs using `HtmlUtils.htmlEscape()` before persisting in shared application state.
