import ReportForm from "@/components/ReportForm";

export default function Page(){
  return (
    <div className="hero">
      <div className="card">
        <span className="badge">GuestGuard</span>
        <h1>Wissen Sie, wer in Ihrem Haus nächtigt?</h1>
        <p>Problematische Gäste melden – zum Schutz Ihres Hauses und anderer Hoteliers. Schnell, sicher, DSGVO-bewusst.</p>
        <div className="cta">
          <a href="#report" className="button">Jetzt Gast melden</a>
          <a href="mailto:j.taschina@guestgard.ch" className="button secondary">Kontakt</a>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Typische Gründe</h3>
          <p className="small muted">Vorsätzlicher Diebstahl · Vorsätzliche Sachbeschädigung · Zechprellerei</p>
        </div>
        <div className="card">
          <h3>Einfach & schnell</h3>
          <p className="small muted">Nur die nötigen Felder – alles andere optional. Auf Wunsch mit Login & Zugriffsbeschränkung.</p>
        </div>
        <div className="card">
          <h3>Integration</h3>
          <p className="small muted">Anbindung per E-Mail, Webhook oder später direkt ins Hotel-CRM.</p>
        </div>
      </div>

      <ReportForm />

    </div>
  );
}
