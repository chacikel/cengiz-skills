# Projekt-Startcheckliste

Verwende diese Checkliste, wenn du ein neues Kleinprojekt anlegst.

---

## Schritt 1: Ordnerstruktur erstellen

```bash
mkdir -p "Kleine-Projekte/JJJJ-MM_[Thema]"
cd "Kleine-Projekte/JJJJ-MM_[Thema]"

mkdir -p 01_Eingehende-Nachrichten
mkdir -p 02_Ausgehende-Nachrichten
mkdir -p 03_Dokumenten/{Verträge,Verzeichnisse,Analyseergebnisse,Notizen,Sonstiges}
mkdir -p 04_Backups
```

---

## Schritt 2: Dokumentation vorbereiten

- [ ] **README.md** erstellen (nutze README-Template.md)
- [ ] **NOTIZEN.md** erstellen (optional, nutze NOTIZEN-Template.md)

---

## Schritt 3: E-Mail & Kommunikation archivieren

- [ ] Gmail-Label in Format erstellen: `[Kleine-Projekte] → [Projektname]`
- [ ] E-Mail-Threads als PDF exportieren → `01_Eingehende-Nachrichten/`
- [ ] Entwürfe/Antworten sammeln → `02_Ausgehende-Nachrichten/`
- [ ] Relevante Dokumente sortieren → `03_Dokumenten/[Unterordner]/`

---

## Schritt 4: README.md ausfüllen

Folgende Informationen mindestens eintragen:

- [ ] Projektname & Erstellt-Datum
- [ ] Beteiligte Personen/Organisationen
- [ ] Kurze Übersicht (Worum geht es?)
- [ ] Aktuelle Fragen/Punkte (nummeriert)
- [ ] Nächste Schritte mit Fristen

---

## Schritt 5: Google Drive hochladen

Nach Projektabschluss oder monatlich:

- [ ] Ganzen Ordner zu Drive hochladen unter `Cengiz/Kleine-Projekte/`
- [ ] Ordnerstruktur in Drive mit lokaler Struktur abgleichen
- [ ] README.md & NOTIZEN.md mit hochladen

---

## Schritt 6: Backup erstellen

- [ ] Monatlich: Alte Dateien zu `04_Backups/` verschieben oder ZIP erstellen
- [ ] Abgeschlossene Projekte archivieren (z.B. ZIP-Datei mit Datum)

---

## Benennungskonventionen

| Element | Format | Beispiel |
|---------|--------|----------|
| Projektordner | `JJJJ-MM_[Thema]` | `2026-09_Agentur-Mustermann` |
| Dateien | `JJJJ-MM-TT_[Beschreibung]` | `2026-09-24_Mustermann-Vertrag.pdf` |
| E-Mails | Nach Sender oder Datum | `2026-09-24_Mustermann_RE-Frage.pdf` |
| Gmail-Label | `[Kleine-Projekte] → [Projektname]` | `[Kleine-Projekte] → Agentur-Mustermann` |

---

## Tipps

- **Klare Benennungen:** Keine `Datei1.pdf`, `Dokument.docx` — immer aussagekräftige Namen
- **Datum konsistent:** JJJJ-MM-TT überall
- **Dokumenten-Ordner flexibel:** Unterordner nach Bedarf anpassen (z.B. statt "Verträge" → "Gutachten")
- **README aktuell halten:** Mindestens wöchentlich nachschauen, ob Einträge noch stimmen
- **NOTIZEN.md ist Arbeitstool:** Nicht für finale Archivierung gedacht

---

**Letztes Update:** 2026-09-24
