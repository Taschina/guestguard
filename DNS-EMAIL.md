# E-Mail-DNS für `guestgard.ch`

Damit E-Mails zuverlässig ankommen, benötigst du korrekte **SPF**, **DKIM** und **DMARC**-Einträge.

> Wähle deinen Mail-Anbieter. Unten stehen Beispiele für **Microsoft 365** und **Google Workspace**.

---

## Option A: Microsoft 365 (Exchange Online)

**SPF (TXT @):**
```
v=spf1 include:spf.protection.outlook.com -all
```

**DKIM:** In Microsoft 365 Security > DKIM aktivieren. Du erhältst zwei CNAMEs:
```
selector1._domainkey.guestgard.ch CNAME selector1-guestgard-ch._domainkey.<tenant>.onmicrosoft.com
selector2._domainkey.guestgard.ch CNAME selector2-guestgard-ch._domainkey.<tenant>.onmicrosoft.com
```

**DMARC (TXT _dmarc.guestgard.ch):**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@guestgard.ch; ruf=mailto:dmarc@guestgard.ch; fo=1; adkim=s; aspf=s; pct=100
```
> Später kannst du `p=reject` setzen, wenn alles stabil läuft.

**Benutzer/Adresse anlegen:**
- Benutzer `j.taschina@guestgard.ch` in Microsoft 365 Admin erstellen.
- Optional: `no-reply@guestgard.ch` für den Absender (`MAIL_FROM`).

---

## Option B: Google Workspace (Gmail)

**SPF (TXT @):**
```
v=spf1 include:_spf.google.com -all
```

**DKIM:** In Google Admin > Apps > Gmail > DKIM → Domain auswählen → Schlüssel generieren (2048 bit) und veröffentlichten TXT setzen:
```
google._domainkey.guestgard.ch TXT v=DKIM1; k=rsa; p=MIIBI... (langer Schlüssel)
```

**DMARC (TXT _dmarc.guestgard.ch):**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@guestgard.ch; ruf=mailto:dmarc@guestgard.ch; fo=1; adkim=s; aspf=s; pct=100
```

**Benutzer/Adresse anlegen:**
- Benutzer `j.taschina@guestgard.ch` in der Admin-Konsole anlegen.
- Optional: `no-reply@guestgard.ch` als separater Benutzer oder Alias.

---

## Beispiel-Zonendatei (BIND-Format, Platzhalter)
```
@   3600 IN A      <VERCEL-IP-ODER-NAME>
@   3600 IN TXT    "v=spf1 include:spf.protection.outlook.com -all"
_dmarc 3600 IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@guestgard.ch; ruf=mailto:dmarc@guestgard.ch; fo=1; adkim=s; aspf=s; pct=100"
selector1._domainkey 3600 IN CNAME selector1-guestgard-ch._domainkey.<tenant>.onmicrosoft.com.
selector2._domainkey 3600 IN CNAME selector2-guestgard-ch._domainkey.<tenant>.onmicrosoft.com.
```
> Ersetze `<tenant>` und ggf. nutze die genauen Werte aus deinem Anbieter-Portal.
