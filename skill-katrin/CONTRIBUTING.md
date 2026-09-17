# Beitragsrichtlinien für `skill-katrin`

Danke, dass du zu **Katrin** beitragen möchtest! 🙏  
Jede Hilfe — ob Bug-Report, Feature-Request oder Code-Beitrag — ist willkommen.

---

## 📋 Wie du beitragen kannst

### 1. **Bug-Report öffnen**

Gefunden einen Fehler? Öffne ein [Issue](../../issues) mit:

**Titel:** Kurze Zusammenfassung  
**Beschreibung:**
```
### Beschreibung
Katrin korrigiert [was passiert] zu [was nicht richtig ist].

### Erwartetes Verhalten
Katrin sollte stattdessen [die richtige Korrektur] machen.

### Beispiel
Nutzer: "Ich habe ein Frage."
Aktuelle Ausgabe: [falsch]
Erwartete Ausgabe: [richtig]

### Umgebung
- Claude: [Web/Desktop/Code]
- Betriebssystem: [macOS/Windows/Linux]
```

### 2. **Feature-Request einreichen**

Hast du eine Idee? Öffne ein Issue mit dem Label `enhancement`:

```
### Feature-Beschreibung
Katrin sollte [neue Funktionalität] unterstützen.

### Begründung
Das würde [Vorteil] bringen, weil [Grund].

### Beispiel
[Konkretes Beispiel, wie das Feature funktionieren würde]
```

### 3. **Code-Beitrag (Pull Request)**

Möchtest du selbst Änderungen vornehmen?

#### Schritt 1: Repository forken und klonen

```bash
# Dein Fork
git clone https://github.com/DEIN_USERNAME/skill-katrin.git
cd skill-katrin
```

#### Schritt 2: Branch erstellen

```bash
git checkout -b feature/dein-feature-name
```

**Naming Convention:**
- `feature/xyz` — neue Funktionalität
- `fix/xyz` — Bugfix
- `docs/xyz` — Dokumentation
- `refactor/xyz` — Code-Umstrukturierung

#### Schritt 3: Änderungen vornehmen

**Was du ändern darfst:**
- ✅ `SKILL.md` — Hauptskill-Definition
- ✅ `README.md` — Dokumentation
- ✅ `docs/` — Zusätzliche Docs
- ✅ `examples/` — Beispiele
- ✅ Tests/Validierungsskripte

**Was du NICHT ohne Issue ändern solltest:**
- ❌ Größere architektonische Änderungen
- ❌ Neue Lizenz/Lizenzänderung
- ❌ Entfernung von Features

#### Schritt 4: Commit

```bash
git add .
git commit -m "Beschreibung: Was wurde geändert und warum"
```

**Commit-Nachricht Format:**
```
feature: Neue Regel für unregelmäßige Verben hinzugefügt

- Erweitert die Fehler-Erkennung um Partizipien
- Addiert Tests für "bringen", "nehmen", "geben"
- Aktualisiert error-log.md Beispiele
```

#### Schritt 5: Pushen und Pull Request öffnen

```bash
git push origin feature/dein-feature-name
```

Gehe zu [GitHub Pull Requests](../../pulls) und öffne einen PR:

**PR-Titel:** `feature: [Kurze Beschreibung]`  
**PR-Beschreibung:**
```markdown
## Beschreibung
Was wurde geändert und warum?

## Verwandte Issues
Closes #123

## Änderungen
- [ ] SKILL.md aktualisiert
- [ ] README aktualisiert
- [ ] Dokumentation aktualisiert
- [ ] Tests/Beispiele hinzugefügt

## Wie testen?
[Schritte zum Überprüfen der Änderung]
```

---

## 🧪 Testen vor dem Pull Request

### SKILL.md validieren

Prüfe, ob deine Änderungen die Formatierung nicht brechen:

```bash
# Falls vorhanden: npm run validate-skill
# Sonst: Manuell prüfen:
# - YAML-Frontmatter korrekt?
# - Markdown-Syntax gültig?
# - Alle Beispiele lesbar?
```

### Manuell testen

1. Kopiere die aktualisierte `SKILL.md` in deine Claude-Instanz
2. Teste mit mehreren Beispiel-Sätzen
3. Prüfe, dass Fehler-Kategorisierung korrekt ist

---

## 📝 Code-Style & Richtlinien

### Sprache
- **SKILL.md & Docs:** Deutsch
- **Code-Kommentare:** Deutsch oder Englisch (konsistent)
- **Issue/PR Titel:** Deutsch oder Englisch (egal)

### Formatierung (Markdown)
```markdown
# H1 Überschrift
## H2 Überschrift
### H3 Überschrift

**Fett** für wichtig
*Kursiv* für Betonung
`Code` für Inline-Code

> Zitat/Hinweis
```

### Beispiele in SKILL.md
Nutze immer das Format:

```
Nutzer: "..."

**Korrigierte Version:** "..."
**Was war falsch:** ...
**Herkunft:** ... (optional)
**Register:** ... (optional)
**Merkbeispiel:** ... (optional)
```

---

## ❓ Fragen?

Hast du Fragen beim Beitrag?

- **Issues durchsuchen:** Deine Frage wurde vielleicht schon beantwortet
- **Diskussionen öffnen:** Falls GitHub Discussions aktiviert
- **Mail an:** [Optional: Kontaktadresse]

---

## 🎯 Code of Conduct

Wir möchten eine freundliche, respektvolle Community.

**Bitte beachte:**
- ✅ Höflich und konstruktiv bleiben
- ✅ Unterschiedliche Meinungen respektieren
- ❌ Keine Beleidigungen, Rassismus, Sexismus
- ❌ Keine Spam oder kommerzielle Werbung

---

## 🏆 Anerkennungen

Alle Beitrag werden gewürdigt:
- Dein Name in `CHANGELOG.md`
- Erwähnung im nächsten Release
- GitHub Contributor Badge

---

**Danke für deine Unterstützung! 💪**

Zuletzt aktualisiert: Januar 2026
