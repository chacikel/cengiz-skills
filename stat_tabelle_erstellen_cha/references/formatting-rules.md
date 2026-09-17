# Konsolidierte Formatierungsregeln

Zusammengeführt aus allen vier Quellen (Appsilon/gt, atable/R-Journal,
Table-1-Leitlinien, STROBE-EPIC). Im Zweifel gilt: **konsistent innerhalb
einer Tabelle**, auch wenn eine Regel nicht exakt passt.

## Zahlen

| Variablentyp | Format | Quelle |
|---|---|---|
| Kategorial | n (%) | Table-1-Leitlinien |
| Stetig, ~normalverteilt | Mittelwert (SD) | Table-1-Leitlinien, atable |
| Stetig, schief/Ausreißer | Median (IQR bzw. Q1–Q3) | Table-1-Leitlinien |
| Prozentsätze | auf ganze Zahl runden (73,1 % → 73 %) | Table-1-Leitlinien |
| Zusätzliche Nachkommastellen | nur wenn es Verständnis verbessert UND große Fallzahl vorliegt | Table-1-Leitlinien |

## p-Werte

- **In reinen Baseline-/Table-1-Tabellen: keine p-Werte** (Table-1-Leitlinien;
  CONSORT rät bei randomisierten Studien ebenfalls davon ab).
- Wenn p-Werte gezeigt werden (Ergebnistabellen, explizit gewünschte
  Vergleiche): exakten Wert zeigen (z. B. „p = 0,032"), nicht nur „p < 0,05" —
  außer bei sehr kleinen Werten: „p < 0,001".
  Kein „p = 0,000" (Rundungsartefakt vermeiden).
- Nicht-parametrische Tests bevorzugen, wenn Normalverteilungsannahme nicht
  gesichert ist (atable-Prinzip: Wilcoxon/Kruskal-Wallis/Chi-Quadrat).
- Wenn Signifikanzsterne verwendet werden (nur auf expliziten Wunsch, nicht
  Standard in Table 1): Konvention in einer Fußnote festhalten
  (z. B. „* p < 0,05, ** p < 0,01, *** p < 0,001").
- Immer Effektschätzer **mit 95-%-Konfidenzintervall** neben dem p-Wert zeigen,
  nicht den p-Wert allein (atable-Prinzip).

## Layout

- Numerische Spalten zentrieren; Textspalten (Zeilenbeschriftungen)
  linksbündig (Appsilon/gt).
- Stichprobengrößen im Spaltenkopf zeigen: „Behandlung (N = 84)", nicht nur
  in einer separaten Fußnote (Appsilon/gt).
- Gruppierte Zeilen (Organsystem, Kategorie) einrücken, nicht nur durch Fett-
  druck absetzen (`tab_stub_indent()`).
- **Keine leeren, unbeschrifteten Zellen** — „—" oder Schattierung für
  absichtliche Auslassung (Table-1-Leitlinien).
- Abkürzungen (SD, IQR, CI, OR, HR) in einer Fußnote auflösen, nicht im
  Fließtext der Tabelle wiederholen.
- Gesamt-Spalte am Tabellenende, nicht in der Mitte (sonst wird sie fälschlich
  als weitere Gruppe gelesen).
- Eine Tabelle sollte auf einer Seite lesbar bleiben; sekundäre Variablen bei
  Bedarf in ein Supplement auslagern statt die Haupttabelle zu überladen.

## Was NICHT in eine Tabellenzelle gehört

- Rohdaten-Dumps ohne Aggregation.
- Statistische Tests „weil man sie berechnen kann", ohne dass sie zur
  Fragestellung der Tabelle passen (v. a. Baseline-Vergleiche, s. o.).
- Uneinheitliche Rundung derselben Kennzahl über mehrere Zeilen/Spalten hinweg.
- Freitext-Interpretation („deutlich höher") statt Zahl + ggf. Fußnote.
