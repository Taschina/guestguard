# GuestGuard – Prototyp (Next.js)

Ein schlanker Prototyp für die GuestGuard-Meldewebseite.

## Features
- Startseite im GuestGuard-Stil
- **Meldeformular** mit Feldern: Vorname, Nachname, Geburtsdatum, Grund (vorsätzlicher Diebstahl, vorsätzliche Sachbeschädigung, Zechprellerei), Status bezahlt/nicht bezahlt, Bemerkung
- Server-Route `/api/report` mit Validierung und E-Mail-Versand an `MAIL_TO`
- DSGVO-Hinweis & Basic-Styles
- Bereit für Deployment auf **Vercel**

## Lokale Entwicklung
```bash
npm install
cp .env.example .env.local
# .env.local anpassen (SMTP & Empfängeradresse)
npm run dev
```

Öffne `http://localhost:3000`.

## Deployment (z. B. Vercel)
- Repository pushen und bei Vercel importieren
- Environment Variables (aus `.env.example`) in Vercel setzen
- Build: `npm run build`

## E-Mail-Adresse
Dieser Prototyp sendet an `j.taschina@guestgard.ch`. Bitte das Postfach im gewünschten Anbieter (z. B. Microsoft 365/Google Workspace/Proton) **anlegen** und DNS korrekt konfigurieren:
- SPF, DKIM, DMARC setzen (für gute Zustellbarkeit).

## Sicherheit/DSGVO (Kurz)
- HTTPS (durch Hosting)
- Rate-Limiting/CAPTCHA können einfach ergänzt werden
- Datenschutzhinweis & Rechtsgrundlage anpassen


## Google Workspace (SMTP)
- **Variante A – Gmail SMTP:** Nutze `smtp.gmail.com` mit **App-Passwort** (2FA aktivieren, App-Passwort erzeugen). Setze `SMTP_USER` auf die Absender-Adresse (z. B. `no-reply@guestgard.ch`).
- **Variante B – SMTP Relay:** Nutze `smtp-relay.gmail.com` und erlaube die Server-IP in der Google Admin-Konsole. Für Serverless (Vercel) meist Variante A oder ein externer Transaktionsdienst (Mailjet/SendGrid) einfacher.
