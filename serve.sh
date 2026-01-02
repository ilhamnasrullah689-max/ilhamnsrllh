#!/usr/bin/env bash
# Simple helper to serve the current folder on port 8000 using Python
PORT=${1:-8000}
HOST=127.0.0.1

echo "Serving $(pwd) at http://${HOST}:${PORT} (Ctrl-C to stop)"
python3 -m http.server "$PORT" --bind "$HOST"
