# Dateistruktur-Beispiel: Agentur-Mustermann Projekt

Dieses Beispiel zeigt, wie ein abgeschlossenes kleines Projekt organisiert sein sollte.

---

```
2026-09_Agentur-Mustermann/
│
├── 01_Eingehende-Nachrichten/
│   ├── 2026-09-20_Mustermann_Erstanfrage.pdf
│   ├── 2026-09-22_Mustermann_RE-Fragen_zur-Registrierung.pdf
│   ├── 2026-09-25_Mustermann_Vertrag_v1.pdf
│   └── 2026-09-28_Mustermann_Telefonat-Notizen.txt
│
├── 02_Ausgehende-Nachrichten/
│   ├── 2026-09-21_Antwort-Mustermann_Registrierungsprozess.pdf
│   ├── 2026-09-23_Entwurf-Fragenkatalog.docx
│   ├── 2026-09-26_Versendete-Fragen_an-Buchhalter.pdf
│   └── 2026-09-30_Abschluss-E-Mail.pdf
│
├── 03_Dokumenten/
│   ├── Verträge/
│   │   ├── 2026-09-25_Beratungsvertrag_Mustermann_v1.pdf
│   │   └── 2026-09-28_Beratungsvertrag_Mustermann_v2_signiert.pdf
│   │
│   ├── Verzeichnisse/
│   │   ├── 2026-09-20_Agentur-für-Arbeit_Kontaktinfo.txt
│   │   └── 2026-09-21_Buchhalter_Telefon-Email.txt
│   │
│   ├── Analyseergebnisse/
│   │   ├── 2026-09-24_Registrierungsprüfung_Ergebnis.pdf
│   │   └── 2026-09-27_Finanzielle-Anforderungen_Zusammenfassung.md
│   │
│   ├── Notizen/
│   │   ├── 2026-09-20_Erstanfrage-Zusammenfassung.md
│   │   └── 2026-09-28_Offene-Punkte.md
│   │
│   └── Sonstiges/
│       ├── 2026-09-22_Referenz-Links.md
│       └── 2026-09-25_Kostenübersicht.xlsx
│
├── 04_Backups/
│   └── 2026-09_Agentur-Mustermann_Backup_20261001.zip
│
├── README.md
│   (Projektübersicht, Fragen, Antworten, nächste Schritte)
│
└── NOTIZEN.md
    (Interne Arbeitsprozess-Notizen, Gedanken, Blockers)
```

---

## Erklärungen nach Unterordner

### 01_Eingehende-Nachrichten/
- **Inhalt:** Alle E-Mails/PDFs, die der Nutzer erhalten hat
- **Struktur:** Datum + Sender + Betreff
- **Format:** PDF oder TXT
- **Beispiel:** `2026-09-20_Mustermann_Erstanfrage.pdf`

### 02_Ausgehende-Nachrichten/
- **Inhalt:** Entwürfe, versendete E-Mails, Antworten, die der Nutzer geschrieben hat
- **Struktur:** Datum + Empfänger + Betreff
- **Format:** PDF oder DOCX (Entwürfe)
- **Beispiel:** `2026-09-21_Antwort-Mustermann_Registrierungsprozess.pdf`

### 03_Dokumenten/Unterordner

#### Verträge/
- Beratungsverträge, Vereinbarungen, Verträge mit Dritten
- Beispiel: `2026-09-28_Beratungsvertrag_Mustermann_v2_signiert.pdf`

#### Verzeichnisse/
- Kontaktinformationen, Adresslisten, Telefonnummern
- Beispiel: `2026-09-20_Agentur-für-Arbeit_Kontaktinfo.txt`

#### Analyseergebnisse/
- Auswertungen, Berichte, Ergebnisse von Recherchen/Berechnungen
- Beispiel: `2026-09-24_Registrierungsprüfung_Ergebnis.pdf`

#### Notizen/
- Zusammenfassungen von E-Mails, Kernpunkte, Gedanken
- Format: .md (Markdown) bevorzugt
- Beispiel: `2026-09-20_Erstanfrage-Zusammenfassung.md`

#### Sonstiges/
- Alles, was nicht in die anderen Kategorien passt (Links, Kostenübersichten, Screenshots, etc.)
- Beispiel: `2026-09-25_Kostenübersicht.xlsx`

### 04_Backups/
- ZIP-Archive von älteren Versionen oder monatliche Sicherungen
- Beispiel: `2026-09_Agentur-Mustermann_Backup_20261001.zip`

---

## Benennungs-Muster erklärt

```
2026-09-20_Mustermann_Erstanfrage.pdf
│           │             │         │
│           │             │         └─ Dateiformat
│           │             └─ Betreff/Inhalt (aussagekräftig)
│           └─ Sender/Kontakt
└─ Datum (JJJJ-MM-TT)
```

**Wichtig:** 
- Immer Datum nutzen (sortierbar)
- Person/Kontakt ergänzen (Übersicht)
- Aussagekräftiger Beschreibung (was ist der Inhalt?)
- Keine Unterstriche zwischen Datum und Person (`2026-09-20_Mustermann` nicht `2026-09-20_mustermann`)

---

## Übergang zu Google Drive

Nach Projektabschluss wird die ganze Struktur zu Drive hochgeladen:

```
Cengiz (Drive)/
├── Kleine-Projekte/
│   └── 2026-09_Agentur-Mustermann/
│       ├── Eingehende Nachrichten/
│       ├── Ausgehende Nachrichten/
│       ├── Dokumenten/
│       │   ├── Verträge/
│       │   ├── Verzeichnisse/
│       │   ├── Analyseergebnisse/
│       │   ├── Notizen/
│       │   └── Sonstiges/
│       ├── Backups/
│       ├── README.md
│       └── NOTIZEN.md
```

---

**Letztes Update:** 2026-09-24
