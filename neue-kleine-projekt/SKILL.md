---
name: neue-kleine-projekt
description: Erstellt schnell neue kleine Projekte nach Skill-Format mit interaktiven Optionen
---

# Neue kleine Projekte erstellen

Schnelle Erstellung neuer Projekte unter `02_Beruf/Kleine-Projekte/` nach standardisierter Struktur.

## Verwendung

### Option 1: Mit Projektname (schnell)
```
/neue-kleine-projekt "Projektname"
```
Beispiel:
```
/neue-kleine-projekt "Firmengründung-Beratung"
```
→ Erstellt: `2026-09_Firmengründung-Beratung/`

### Option 2: Interaktiv (detailliert)
```
/neue-kleine-projekt
```
→ Fragt nach:
1. Projektname
2. Beschreibung/Thema (optional)
3. Beteiligte Personen (optional)
4. Bestätigung vor Erstellung

## Ordnerstruktur (automatisch erstellt)

```
[JJJJ-MM_Projektname]/
├── 01_Eingehende-Nachrichten/
├── 02_Ausgehende-Nachrichten/
├── 03_Backups/
└── README.md (mit Platzhaltern)
```

## Projektname-Format

- **Automatisch:** `JJJJ-MM_[Dein-Projektname]`
- Umlaute & Leerzeichen werden zu Bindestrichen konvertiert
- Beispiel: „Agentur für Arbeit" → `2026-09_Agentur-fuer-Arbeit`

## Nach der Erstellung

1. README.md öffnen und ausfüllen:
   - Kurzbeschreibung
   - Beteiligte
   - Aktionspunkte
   
2. Nachrichten in die passenden Ordner organisieren

3. Optional: Zu Google Drive hochladen

## Hinweise

- Projekte liegen unter: `~/Desktop/Cengiz/02_Beruf/Kleine-Projekte/`
- Alte oder abgeschlossene Projekte → `03_Backups/`
- Drive-Archiv für Langzeitaubewahrung

---

*Skill erstellt: 2026-09-24*
