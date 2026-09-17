# Katrin — Deutschkorrektions-Skill für Claude

**Katrin** ist eine Claude-Skill für präzise, hilfreiche Korrektionen deutscher Texte. Sie korrigiert Tippfehler, Grammatik und Semantik — und erklärt dabei Wortherkunft und Register.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Active](https://img.shields.io/badge/Status-Active-green.svg)
![Language: Deutsch](https://img.shields.io/badge/Language-Deutsch-blue.svg)

---

## 🎯 Was macht Katrin?

Katrin korrigiert jeden fehlerh­aften Satz des Nutzers in **drei Schritten**:

| Schritt | Beispiel |
|---------|----------|
| **1. Korrigieren** | „Das ist ein sehr wichtigen Thema" → „Das ist ein sehr wichtiges Thema" |
| **2. Erklären, was falsch war** | Adjektiv-Endung: „wichtigen" (Akkusativ falsch) → „wichtiges" (Nominativ richtig) |
| **3. Kontext hinzufügen** | Herkunft, Register (formell/umgangssprachlich), Merkbeispiel |

### Fehlertypen, die Katrin erkennt

- **Tippfehler:** „das" statt „dass", „gebringt" statt „gebracht"
- **Grammatik:** Kasus (Nominativ/Akkusativ/Dativ/Genitiv), Kongruenz, Wortstellung, Zeitformen, Präpositionen
- **Semantik:** Falsches Wort, missverständliche Formulierung, Register-Fehler

### Besonderheiten

✅ **Lernfeature:** Katrin merkt sich Ihre häufigen Fehler 4 Wochen lang  
✅ **Mehrsprachig:** Übersetzt englische/türkische Texte, dann Feedback auf Deutsch  
✅ **Prägnant:** Kurze Erklärungen, keine langen Monologe  
✅ **Höflich:** Korrigiert die Person, nicht das Verhalten

---

## 📦 Installation

### Für Claude.ai Nutzer (einfach)

1. Gehe zu [claude.ai](https://claude.ai)
2. Öffne dein **Profil** → **Skills**
3. Klicke **„Skill hinzufügen"** → wähle **„Custom Skill"**
4. Kopiere den Inhalt von `SKILL.md` (siehe nächster Punkt) in das Textfeld
5. Speichere und starte eine neue Konversation

### Für Claude Code / Desktop (fortgeschritten)

Falls du Claude Code oder Desktop nutzt, kannst du die Skill-Definition in deine `.claude/skills/` Verzeichnis kopieren:

```bash
mkdir -p ~/.claude/skills/katrin
cp SKILL.md ~/.claude/skills/katrin/SKILL.md
```

### Fehlerlog (optional)

Katrin erstellt automatisch ein `error-log.md` unter:  
`~/.claude/skills/katrin/error-log.md`

Du kannst diesen Ort anpassen, indem du die SKILL.md bearbeitest.

---

## 🚀 Verwendung

### Normale Korrektur (automatisch)

Schreib einfach einen Satz mit Fehler:

**Du:** „Ich habe gestern das Auto gebringt."

**Katrin:**
> **Korrigierte Version:** Ich habe gestern das Auto gebracht.  
> **Was war falsch:** „gebringt" ist kein Partizip II von „bringen" — das unregelmäßige Verb bildet „gebracht".  
> **Herkunft:** „bringen" stammt vom althochdeutschen „bringan", verwandt mit dem englischen „to bring".  
> **Merkbeispiel:** Wie im Sprichwort „Was du heute kannst besorgen, das verschiebe nicht auf morgen" — auch „bringen" folgt keinem regelmäßigen Muster, man muss es sich einprägen.

### Lernmodus: Häufige Fehler analysieren

**Du:** „Katrin, bringen Sie mir etwas bei."

**Katrin:**
> Zeigt deine 3 häufigsten Fehler der letzten 4 Wochen mit Übungsbeispielen.

### Fremdsprachen übersetzen

**Du (Englisch):** „When I write texts in English, it translates them into German."

**Katrin:**
> **Übersetzung:** Wenn ich Texte auf Englisch schreibe, übersetzt sie diese ins Deutsche.  
> **Was war falsch (im Original):** „it translates" — falsches Pronomen (sollte „she translates" sein).

---

## 📋 Ausgabeformat

Katrin gibt Korrektionen immer in dieser Reihenfolge aus:

```
1. Korrigierte Version (pflicht)
2. Was war falsch (pflicht, 1–2 Stichpunkte)
3. Herkunft (optional, nur wenn interessant)
4. Register (optional, nur wenn relevant)
5. Merkbeispiel (optional, kurzer Beispielsatz)
```

Jeder Punkt max. 1–2 Sätze. Wenn nichts Sinnvolles zu sagen ist → **weglassen**.

---

## 🔧 Fehlerlog — So funktioniert's

Katrin speichert automatisch jeden Fehler in einer lokalen Datei:

```
~/.claude/skills/katrin/error-log.md
```

**Format je Zeile:**
```
- 2026-01-15 | Kasus | "das ist ein wichtigen Thema" → "das ist ein wichtiges Thema"
- 2026-01-14 | Wortstellung | "Katrin bringen Sie mir" → "Katrin, bringen Sie mir"
```

**Automatisches Cleanup:** Einträge älter als 4 Wochen werden beim nächsten Schreibzugriff gelöscht.

---

## 🎓 Triggerbedingungen

Katrin korrigiert bei:
- ✅ Vollständigen Sätzen in Deutsch
- ✅ Frei getippten Antworten in Frageformularen
- ❌ Reinen Ein-Wort-Antworten
- ❌ Code-Schnipseln, Dateipfaden, Bash-Befehlen
- ❌ Konfigurationssyntax

---

## 🌍 Sprachunterstützung

| Sprache | Status | Details |
|---------|--------|---------|
| **Deutsch** | ✅ Primär | Alle Funktionen voll verfügbar |
| **Englisch** | ✅ Übersetzung | Englische Texte werden ins Deutsche übersetzt, dann korrigiert |
| **Türkçe** | ✅ Übersetzung | Türkische Texte werden ins Deutsche übersetzt, dann korrigiert |
| **Andere Sprachen** | ❌ Nein | Nicht vorgesehen |

---

## 📖 Fehlertypen: Detaillierte Übersicht

### Tippfehler
```
das → dass
gebringt → gebracht (unregelmäßiges Verb)
deswegen → deshalb (Wort verwechselt)
```

### Grammatik
- **Kasus:** Nominativ, Akkusativ, Dativ, Genitiv
- **Kongruenz:** Adjektiv-Substantiv-Abweichung
- **Wortstellung:** Verb-Position, Inversion
- **Zeitformen:** Präsens, Perfekt, Präteritum, Plusquamperfekt
- **Präpositionen:** in/an/auf + Dativ/Akkusativ

### Semantik
- Falsches Wort (Synonym, aber fehlerhaft)
- Missverständliche Formulierung
- Register-Fehler (zu formell/zu locker)

---

## 💡 Tipps für beste Ergebnisse

| Tipp | Beispiel |
|------|----------|
| **Schreib vollständige Sätze** | ✅ „Ich habe ein Frage." (wird korrigiert) |
| | ❌ „Frage? Hilfe?" (wird ignoriert) |
| **Code nicht korrigieren lassen** | Schreib Code separat oder in Code-Blöcken |
| **Englisch/Türkisch OK** | Katrin übersetzt es automatisch ins Deutsche |
| **Frag nach häufigen Fehlern** | „Katrin, was mache ich oft falsch?" |

---

## 🐛 Bekannte Limitationen

- ❌ Keine Dialekt-Korrektionen (nur Standard-Deutsch)
- ❌ Keine Stilistik-Verbesserungen (nur Grammatik/Tippfehler)
- ❌ Keine Texte länger als ~500 Wörter (zu aufwendig)
- ❌ Keine Orthografie-Vorschläge (z.B. neue Rechtschreibung vs. alt)

---

## 🤝 Beitragen

Du hast eine Verbesserung oder einen Bug gefunden?

### GitHub Issues

Öffne ein [Issue](../../issues) mit:
- **Titel:** Kurze Zusammenfassung
- **Beschreibung:** Was ist das Problem?
- **Beispiel:** Ein konkreter Satz, der falsch korrigiert wurde

Beispiel Issue:
```
Title: Präposition "in" wird falsch erkannt
Description: Katrin korrigiert "Ich bin in dem Haus" zu "Ich bin im Haus", 
aber das ist ein Register-Unterschied, keine Fehler.
```

### Feature Requests

Ähnlich wie Issues, aber mit dem Label `enhancement`:

```
Title: Feature: Dialekt-Erkennung
Description: Katrin sollte Schweizer Deutsch oder österreichische Besonderheiten erkennen.
```

### Code-Beiträge (Pull Requests)

1. **Fork** dieses Repository
2. **Branch erstellen:** `git checkout -b feature/dein-feature`
3. **Änderungen machen** → SKILL.md oder docs/
4. **Commit:** `git commit -m "Beschreibung der Änderung"`
5. **Push:** `git push origin feature/dein-feature`
6. **Pull Request** öffnen mit Beschreibung der Änderung

---

## 📝 Lizenz

Dieses Projekt ist unter der **MIT License** lizenziert.

```
Copyright 2026 Prof. Dr. Cengizhan Acikel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

Siehe `LICENSE` für vollständigen Text.

---

## 📬 Fragen?

- **Dokumentation:** Siehe `docs/` Ordner
- **FAQ:** Siehe `docs/faq.md`
- **Issues:** [GitHub Issues](../../issues)
- **Mail:** (optional: Kontaktadresse eintragen)

---

## 🙏 Danksagungen

- **Anthropic Claude** — für die Skill-Infrastruktur
- **Nutzer-Feedback** — für Verbesserungsvorschläge

---

**Viel Spaß beim Deutsch verbessern! 📚**

Zuletzt aktualisiert: January 2026
