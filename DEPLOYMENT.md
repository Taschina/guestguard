# Deployment-Anleitung (Vercel)

Diese Schritte deployen den Prototyp **ohne Codeänderungen**.

## 1) Repository erstellen
1. Neues Git-Repo lokal anlegen oder direkt auf GitHub/GitLab/Bitbucket.
2. Den Ordner `guestguard-prototype` committen und pushen.

## 2) Vercel-Project
1. Auf https://vercel.com einloggen.
2. "Add New Project" → Dein Repository importieren.
3. Framework: **Next.js** (wird automatisch erkannt).
4. Build Command: `next build` (Standard)
5. Output: `.next` (Standard)

## 3) Environment Variables setzen
In Vercel → Project → Settings → Environment Variables (Scope: Production + Preview):
- `SMTP_HOST`
- `SMTP_PORT` (z. B. `587`)
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM` (z. B. `GuestGuard <no-reply@guestgard.ch>`)
- `MAIL_TO` (z. B. `j.taschina@guestgard.ch`)

Danach "Redeploy".

## 4) Domain `guestgard.ch` verbinden
1. In Vercel → Project → Settings → **Domains** → `Add` → `guestgard.ch` eintragen.
2. Vercel zeigt dir notwendige **A/AAAA/NS/CNAME**-Einträge an (je nach Registrar).
3. Diese Einträge beim Domain-Registrar setzen (oder Nameserver auf Vercel umstellen).

> Tipp: Für eine Subdomain (z. B. `app.guestgard.ch`) genügt meist ein CNAME auf `cname.vercel-dns.com`.

## 5) Test
- Auf die Domain gehen und das Formular testweise absenden.
- Das Postfach `MAIL_TO` prüfen.
