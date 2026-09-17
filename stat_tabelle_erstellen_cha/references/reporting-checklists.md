# Reporting-Checklisten: CONSORT / STROBE

Diese Checklisten bestimmen, **was inhaltlich** in die Tabellen gehört —
zusätzlich zu den Formatregeln in `formatting-rules.md`.

## CONSORT-Baseline-Tabelle (randomisierte Studien)

Quelle: R-Journal-Artikel zum Paket `atable` (Ströbel, 2019), das CONSORT-
konforme Baseline-Tabellen automatisiert.

Prinzipien, die `atable` (und dieser Skill) umsetzen:

- **Formel-Denkweise:** Zielvariablen ~ Gruppierungsvariable [ | Stratifizierung]
  — hilft, vor dem Tabellenbau explizit festzulegen, was verglichen wird.
- **Automatische Methodenwahl nach Variablentyp:**
  - Faktor (kategorial) → Häufigkeiten/Anteile, i. d. R. Chi-Quadrat-Test
  - Geordnet (ordinal) → rangbasierte Tests (z. B. Wilcoxon)
  - Numerisch → parametrisch (t-Test) oder bei Verletzung der Annahmen
    nicht-parametrisch (Wilcoxon-Rangsummentest, Kruskal-Wallis)
- **Nicht-parametrische Tests bevorzugen**, wenn Normalverteilung nicht
  gesichert ist.
- **Effektschätzer mit 95-%-Konfidenzintervall** ausweisen, nicht nur den
  p-Wert.
- **Fehlende Werte separat auszählen und ausweisen**, nicht stillschweigend
  weglassen.
- **Export in Word/LaTeX/HTML**, damit die Tabelle direkt ins Manuskript geht.

→ In der Praxis mit `gtsummary::tbl_summary()` + `add_p()` +
`add_ci()` umsetzbar; siehe `gt-gtsummary-patterns.md`.

**Achtung:** Für eine *reine* Baseline-/Table-1 (Randomisierung soll gezeigt,
nicht getestet werden) gilt trotzdem die Regel aus `table1-standards.md`:
keine p-Werte. CONSORT selbst rät ebenfalls davon ab, Baseline-Unterschiede
nach Randomisierung signifikanztestend zu vergleichen — `add_p()` ist für
CONSORT-Tabellen daher die Ausnahme, nicht die Regel, und nur sinnvoll, wenn
explizit ein Vergleich (z. B. bei einer Beobachtungsstudie, nicht nach echter
Randomisierung) gefragt ist.

## STROBE / STROBE-EPIC (Beobachtungsstudien)

Quelle: STROBE-EPIC-Erweiterung (verixiv.org/articles/2-51) — eine STROBE-
Erweiterung speziell für Prävalenz-/Inzidenzstudien.

STROBE selbst verlangt für Beobachtungsstudien u. a.:

- Teilnehmerfluss darstellen (wie viele untersucht, eingeschlossen,
  ausgeschlossen, mit Gründen) — meist als eigenes Flussdiagramm, nicht als
  Tabelle, aber die Zahlen müssen mit der Table 1 konsistent sein.
- Deskriptive Daten je Expositionsgruppe **und** eine Gesamt-Spalte
  (deckt sich mit `table1-standards.md`).
- Fehlende Daten je Variable ausweisen.

Die STROBE-EPIC-Erweiterung ergänzt bei Prävalenz-/Inzidenzstudien u. a.:

- **Nenner-Populationsschätzung** transparent machen (wie wurde die
  Grundgesamtheit bestimmt?) — gehört ggf. als Fußnote/Zusatzzeile in die
  Tabelle, nicht nur in den Fließtext.
- **Fallerfassungsmethode** (Case Ascertainment) benennen — beeinflusst, wie
  Zeilen in der Tabelle zu interpretieren sind (z. B. Meldedaten vs.
  aktive Surveillance).
- **Limitationen unvollständiger Erfassung** und Faktoren, die
  Prävalenz/Inzidenz künstlich verändern (Diagnosekriterien-Wechsel,
  Meldeverzögerung), gehören in Fußnoten der entsprechenden Tabelle, wenn die
  Tabelle Trends über Zeit oder Regionen zeigt.
- 47 Items insgesamt (Titel 1, Abstract 2, Einleitung 1, Methoden 25,
  Ergebnisse 6, Diskussion 7, Sonstiges 5) — für Prävalenz-/Inzidenzstudien
  gilt: vor Tabellenbau prüfen, ob die volle Checkliste relevant ist
  (Original: verixiv.org/articles/2-51).

## Kurz-Entscheidungshilfe

| Studientyp | Tabellen-Standard | p-Werte in Table 1? |
|---|---|---|
| RCT (randomisiert) | CONSORT | Nein |
| Kohorte / Fall-Kontroll | STROBE | Nein |
| Prävalenz-/Inzidenzstudie | STROBE + STROBE-EPIC | Nein |
| Reiner Gruppenvergleich (kein Studiendesign-Anspruch) | — | Nur wenn explizit gewünscht, dann kennzeichnen |
