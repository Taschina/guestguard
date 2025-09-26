export const metadata = {
  title: "GuestGuard – Gäste melden",
  description: "Problematische Gäste sicher melden – GuestGuard"
};

import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="header">
          <div className="container">
            <div className="brand">Guest<span>Guard</span></div>
            <nav>
              <a href="/">Start</a>
              <a href="#report">Gast melden</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            <small>© {new Date().getFullYear()} GuestGuard · <a href="#privacy">Datenschutz</a></small>
          </div>
        </footer>
      </body>
    </html>
  );
}
