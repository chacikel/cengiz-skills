---
name: stat_tabelle_erstellen_cha
description: "Erstellt publikationsreife, international standardkonforme Tabellen für statistische Berichte in R (Baseline-/Table-1, Ergebnis-/Regressionstabellen, Adverse-Event-Tabellen) mit den Paketen gtsummary und gt. Nutzen, wenn der Nutzer eine Tabelle für einen Bericht, ein Manuskript oder eine Studie erstellen will, nach CONSORT/STROBE-konformen Tabellen fragt, Table 1 / Baseline-Charakteristika / deskriptive Tabellen braucht, oder eine bestehende Tabelle 'schöner', 'publikationsreif' oder 'wie im Journal' formatiert haben will. Trigger: Tabelle erstellen, Table 1, Baseline-Tabelle, gt package, gtsummary, publikationsreife Tabelle, CONSORT-Tabelle, STROBE-Tabelle, Ergebnistabelle, Regressionstabelle, Adverse-Event-Tabelle, Tabelle formatieren."
category: statistics
metadata:
  skill-author: chacikel
  based-on:
    - "https://www.appsilon.com/post/clinical-tables-with-the-gt-package-44a57"
    - "https://journal.r-project.org/articles/RJ-2019-001/ (atable, Ströbel 2019)"
    - "https://pmc.ncbi.nlm.nih.gov/articles/PMC6773463/ (Table-1-Leitlinien)"
    - "https://verixiv.org/articles/2-51 (STROBE EPIC)"
---

# Statistische Tabellen erstellen

Erzeugt Tabellen, die aussehen wie in einem Fachjournal — reproduzierbar aus R
generiert, nicht von Hand in Word/Excel nachgebaut. Deckt die drei häufigsten
Tabellentypen einer statistischen Beratung ab: **Baseline/Table 1**,
**Ergebnis-/Modelltabellen** und **Ereignis-/Sicherheitstabellen**.

## Wann diesen Skill nutzen

- Der Nutzer will eine Tabelle für einen Bericht/ein Manuskript erzeugen.
- Es soll eine "Table 1" (Baseline-Charakteristika je Gruppe) entstehen.
- Eine Ergebnistabelle (Regressionskoeffizienten, Odds Ratios, Hazard Ratios,
  CIs) soll publikationsreif formatiert werden.
- Der Nutzer sagt "sieht nicht professionell aus", "wie im Journal",
  "internationale Standards", "CONSORT/STROBE-konform".

## Werkzeugwahl: gtsummary vs. gt

| Situation | Werkzeug |
|---|---|
| Standard-Tabelle: Baseline, Vergleich nach Gruppe, Regressionsmodell | **gtsummary** (`tbl_summary()`, `tbl_regression()`, `tbl_svysummary()`) — macht in 1–3 Zeilen fast alles aus Abschnitt „Formatierungsregeln" automatisch richtig |
| Layout weicht vom Standard ab (verschachtelte Spannen, gemischte Zell-Merges, Firmen-/Journal-Template) | **gt** direkt — volle Kontrolle über jede Zelle (siehe `references/gt-gtsummary-patterns.md`) |
| Beides kombiniert | `tbl_summary()` bauen, dann mit `as_gt()` in gt konvertieren und dort feinjustieren |

Beide Pakete bauen auf derselben Grammatik auf (`gtsummary` erzeugt am Ende ein
`gt`-Objekt) — nichts widerspricht sich.

## Workflow

1. **Tabellentyp klären.** Baseline (Table 1)? Ergebnis-/Modelltabelle?
   Ereignis-/AE-Tabelle? → bestimmt die Vorlage in `assets/table_template.R`.
2. **Gruppierung/Stratifizierung festlegen.** Wonach wird gespalten
   (Behandlungsarm, Expositionsgruppe, Zeitpunkt)? Bei reinen Baseline-
   Tabellen: **keine** p-Werte für den Gruppenvergleich einfügen
   (Begründung: `references/table1-standards.md`).
3. **Variablentypen zuordnen.** Kategorial → n (%). Stetig, annähernd normal
   → Mittelwert (SD). Stetig, schief/mit Ausreißern → Median (IQR bzw. Q1–Q3).
   Regeln und Rundung: `references/formatting-rules.md`.
4. **Tabelle mit gtsummary erzeugen** (Standardfall) oder **gt direkt**
   (Sonderlayout) — Codepatterns: `references/gt-gtsummary-patterns.md`.
5. **Fußnoten/Kopf ergänzen.** Abkürzungen erklären (SD, IQR, CI), Stichproben-
   größen in den Spaltenköpfen, Signifikanzkonvention nur wenn p-Werte
   tatsächlich gezeigt werden (nie in einer reinen Baseline-Tabelle).
6. **Gegen die Checkliste prüfen** (`references/reporting-checklists.md`):
   passt die Tabelle zu CONSORT (RCT) bzw. STROBE (Beobachtungsstudie)?
7. **Export.** `gt::gtsave()` nach Word (`.docx`), HTML oder LaTeX/PDF — je
   nachdem, wohin der Bericht geht (siehe Codepatterns-Datei).

## Referenzdateien

- `references/table1-standards.md` — was in eine Baseline-/Table-1 gehört,
  was nicht (v. a.: keine p-Werte, Rundungsregeln, Stratifizierung), aus
  PMC6773463.
- `references/gt-gtsummary-patterns.md` — konkrete R-Codepatterns für gt
  (`fmt_*`, `cols_merge_n_pct`, `tab_header`, `tab_footnote`) und gtsummary
  (`tbl_summary`, `tbl_regression`, `add_p`, `bold_labels`), aus dem
  Appsilon-Artikel + Standardnutzung von gtsummary.
- `references/reporting-checklists.md` — CONSORT-Baseline-Tabelle (nach dem
  `atable`-Paket/R-Journal-Artikel) und STROBE/STROBE-EPIC-Berichtsitems, die
  Tabelleninhalt und -struktur beeinflussen.
- `references/formatting-rules.md` — konsolidierte, konkrete Regeln (Dezimal-
  stellen, p-Wert-Darstellung, Ausrichtung, was NICHT in eine Zelle gehört)
  aus allen vier Quellen.
- `assets/table_template.R` — lauffähiges R-Grundgerüst (gtsummary + gt) für
  Baseline-, Ergebnis- und Ereignistabellen zum Kopieren.

## Nicht Teil dieses Skills

- Abbildungen/Plots (siehe ggplot2/Basis-R-Visualisierung).
- Fallzahlplanung (siehe `stat_sample-size-planning_cha`, sofern befüllt) bzw.
  den Skill `experiment-design`.
- Ergebnisinterpretation (siehe `experimentation-analytics` /
  `statistical-analysis`).
