"use client";

import React from "react";

type ReportPayload = {
  firstName: string;
  lastName: string;
  birthDate: string;
  reason: "diebstahl" | "sachbeschaedigung" | "zechprellerei";
  paymentStatus: "bezahlt" | "nicht_bezahlt";
  remark?: string;
};

export default function ReportForm(){
  const [status, setStatus] = React.useState<null | {ok: boolean; message: string}>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const fd = new FormData(formRef.current!);
    const payload: ReportPayload = {
      firstName: String(fd.get("firstName")||"").trim(),
      lastName: String(fd.get("lastName")||"").trim(),
      birthDate: String(fd.get("birthDate")||""),
      reason: (fd.get("reason") as ReportPayload["reason"]),
      paymentStatus: (fd.get("paymentStatus") as ReportPayload["paymentStatus"]),
      remark: String(fd.get("remark")||"").trim() || undefined
    };

    try{
      const res = await fetch("/api/report", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(res.ok){
        setStatus({ok:true, message: "Meldung erfolgreich übermittelt. Danke!"});
        formRef.current!.reset();
      }else{
        setStatus({ok:false, message: data?.error || "Fehler beim Übermitteln."});
      }
    }catch(err: any){
      setStatus({ok:false, message: err?.message || "Unerwarteter Fehler."});
    }
  }

  return (
    <div id="report" className="card">
      <h2>Gast melden</h2>
      <p className="small muted">Bitte füllen Sie die Angaben wahrheitsgemäß aus.</p>
      {status && (
        <div className={status.ok ? "success" : "error"} role="alert">
          {status.message}
        </div>
      )}
      <form className="form" ref={formRef} onSubmit={onSubmit}>
        <div className="row">
          <label>Vorname
            <input name="firstName" required placeholder="z. B. Julia" />
          </label>
          <label>Nachname
            <input name="lastName" required placeholder="z. B. Kramer" />
          </label>
        </div>
        <div className="row">
          <label>Geburtsdatum
            <input type="date" name="birthDate" required />
          </label>
          <label>Grund
            <select name="reason" required defaultValue="diebstahl">
              <option value="diebstahl">Vorsätzlicher Diebstahl</option>
              <option value="sachbeschaedigung">Vorsätzliche Sachbeschädigung</option>
              <option value="zechprellerei">Zechprellerei</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label>Status
            <select name="paymentStatus" defaultValue="nicht_bezahlt">
              <option value="bezahlt">Bezahlt</option>
              <option value="nicht_bezahlt">Nicht bezahlt</option>
            </select>
          </label>
          <label>Bemerkung
            <input name="remark" placeholder="Optional: Details, Belege, etc." />
          </label>
        </div>
        <button type="submit" className="button">Meldung absenden</button>
      </form>
      <p className="small muted" id="privacy" style={{marginTop:12}}>
        Hinweis: Diese Meldung wird zweckgebunden verarbeitet. Bitte keine sensiblen Daten über das Erforderliche hinaus eintragen.
      </p>
    </div>
  );
}
