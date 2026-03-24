## 2024-05-24 - Cross-Site Scripting (XSS) via WebSockets
**Vulnerability:** User inputs (player names, IDs) were added directly to the shared `GameRoom` state without sanitization, creating a Stored XSS vulnerability when this state was broadcasted to all connected clients via WebSockets.
**Learning:** Real-time applications must sanitize user input before storing it in shared state, especially when that state is broadcasted back to other clients via WebSockets, as the clients might render the unsanitized input directly into the DOM.
**Prevention:** Use established sanitization libraries like Spring's `HtmlUtils.htmlEscape()` on all user-provided strings before adding them to shared state or broadcasting them.
