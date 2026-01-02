web.io — run locally

Run the static site locally on port 8000.

Option A — Node (recommended):

```bash
npm install
npm start
```

The server listens on port 8000 by default. To use a different port:

```bash
PORT=8000 npm start
```

Option B — Python (no install):

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Notes:
- If `npm install` fails with "command not found", install Node.js and npm first.
- The site is served from the repository root; open http://localhost:8000 in your browser.
