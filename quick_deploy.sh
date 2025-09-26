#!/usr/bin/env bash
set -euo pipefail

# Quick-Start Deploy (lokal)
# Voraussetzungen: node >=18, npm, git

echo "🔧 Abhängigkeiten installieren..."
npm install

if [ ! -f ".env.local" ]; then
  cp .env.example .env.local
  echo "⚠️  Bitte .env.local mit SMTP/MAIL-Daten befüllen."
fi

echo "🚀 Start Dev-Server: http://localhost:3000"
npm run dev
