---
name: cengiz-kleine-projekten
description: Vollständige Struktur und Workflows für kleine Projekte (E-Mail, Dokumenten, Backups) mit Google Drive Integration und Templates
---

# Kleine Projekte — Workflow und Struktur

Für ad-hoc-Projekte (E-Mail-Archivierung, schnelle Analysen, Kommunikationsverwaltung).

## Ordnerstruktur

**Lage:** `~/Desktop/Cengiz/02_Beruf/Kleine-Projekte/` (einziger Ort für alle kleinen Projekte)

```
Kleine-Projekte/
├── [Projekt-Name]/
│   ├── 01_Eingehende-Nachrichten/
│   │   └── (E-Mails, PDFs, Screenshots — nach Datum oder Sender benannt)
│   ├── 02_Ausgehende-Nachrichten/
│   │   └── (Entwürfe, Antworten, versendete E-Mails)
│   ├── 03_Dokumenten/
│   │   ├── Verträge/
│   │   ├── Verzeichnisse/
│   │   ├── Analyseergebnisse/
│   │   ├── Notizen/
│   │   └── Sonstiges/
│   ├── 04_Backups/
│   │   └── (Archivversionen, Exports, Sicherungen)
│   ├── README.md
│   │   (Projektübersicht: Thema, Beteiligte, Zeitraum, Aktionspunkte)
│   └── NOTIZEN.md (optional)
│       (Interne Arbeitsnotizen, Gedanken, Zu-Do-Listen)
```

## Projektname-Konvention

Format: `JJJJ-MM_[Thema]`

Beispiele:
- `2026-09_Agentur-Mustermann` (Beispielbehörde, Max Mustermann)
- `2026-09_Imedbild-Symposium` (aktuelles Projekt)
- `2026-10_Firmengründung-Beratung` (juristische/finanzielle Beratung)

## Workflows

### 1. E-Mail-Kommunikation archivieren

**Trigger:** Neuer Kontakt mit rechtlicher/finanzieller Relevanz (z. B. Max Mustermann)

```
1. Gmail-Label erstellen: [Kleine-Projekte] → [Projektname]
2. Thread als PDF exportieren → 01_Eingehende-Nachrichten/
3. Entwürfe/Antworten → 02_Ausgehende-Nachrichten/
4. Relevante Dokumente (Verträge, Verzeichnisse, Gutachten) → 03_Dokumenten/[Unterordner]/
5. README.md mit Zusammenfassung + Aktionspunkten füllen
6. (Optional) NOTIZEN.md für interne Notizen/Gedanken
7. Ganzen Ordner zu Google Drive hochladen
```

### 2. Juristische/finanzielle Fragen dokumentieren

**In README.md:**
- Frage(n) klar formulieren
- Kontext (wer, wann, warum)
- Antworten/Beratung nachtragen
- Datum der Beratung + Berater notieren

Beispiel:
```markdown
# Firmengründung Beratung (2026-10)

## Fragen an Buchhalter
1. Registrierung bei Beispielbehörde — Zeitpunkt?
2. Gewinnerwartung — wie dokumentieren?

## Antworten erhalten
- Datum: 2026-10-05
- Von: [Name des Beraters]
- Antwort: ...

## Nächste Schritte
- [ ] Registrierung bis 2026-10-15 durchführen
- [ ] Fragebogen ausfüllen
```

### 3. Backup & Archiv

- Monatlich: Ältere Ordner zu `04_Backups/` verschieben (oder ZIP erstellen)
- Nach Projektabschluss: Kompletten Projektordner zu Drive hochladen
- Jährlich: Abgeschlossene Projekte zu Drive → Archiv-Ordner

## Google Drive Integration

**Zielstruktur in Drive:**
```
Cengiz/
├── Kleine-Projekte/
│   ├── 2026-09_Agentur-Mustermann/
│   │   ├── Eingehende Nachrichten/
│   │   ├── Ausgehende Nachrichten/
│   │   ├── Dokumenten/
│   │   │   ├── Verträge/
│   │   │   ├── Verzeichnisse/
│   │   │   ├── Analyseergebnisse/
│   │   │   ├── Notizen/
│   │   │   └── Sonstiges/
│   │   ├── Backups/
│   │   ├── README.md
│   │   └── NOTIZEN.md
│   └── ...
```

**Upload:** Nach Projektabschluss oder monatlich (Claude Code MCP oder manuell)

## Tipps

- **Kleine Projekte ≠ große Ordnerstruktur** — max. 4 Ebenen
- **README.md ist zentral** — diese Datei immer aktuell halten
- **NOTIZEN.md für Prozess** — interne Gedanken, nicht für finale Archivierung
- **Datum konsistent** — JJJJ-MM-TT in Dateinamen
- **Dokumenten-Ordner flexibel** — Unterordner nach Bedarf anpassen (Verträge, Berichte, Gutachten, etc.)
- **Drive = Archiv** — lokal arbeiten, Drive für Langzeitaubewahrung
- **Klare Benennungen** — keine Datei mit rätselhafter Bezeichnung (statt "Datei1.pdf" → "2026-09-24_Mustermann-Vertrag.pdf")

## Nächste Schritte

1. Ordner `Kleine-Projekte` lokal erstellen
2. Erstes Projekt: `2026-09_Agentur-Mustermann`
3. Alle Mustermann-Mails archivieren + README.md schreiben
4. Zu Drive hochladen
