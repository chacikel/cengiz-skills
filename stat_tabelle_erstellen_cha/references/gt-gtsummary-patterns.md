# Code-Patterns: gt und gtsummary

Quelle: Appsilon-Artikel „Clinical tables with the gt package" (konkrete
gt-Funktionen und Workflow) + Standardnutzung von gtsummary (gängigste
R-Bibliothek für Table 1 / Ergebnistabellen, baut auf gt auf).

## Schnellstart: Baseline-Tabelle mit gtsummary (Standardfall)

```r
library(gtsummary)
library(dplyr)

tbl <- daten |>
  select(gruppe, alter, geschlecht, gewicht_kg, befund) |>
  tbl_summary(
    by = gruppe,
    statistic = list(
      all_continuous()  ~ "{mean} ({sd})",   # bei Normalverteilung
      all_categorical() ~ "{n} ({p}%)"
    ),
    digits = list(all_continuous() ~ 1, all_categorical() ~ 0),
    missing = "ifany",
    missing_text = "Fehlend"
  ) |>
  add_overall(last = TRUE) |>          # Gesamt-Spalte, siehe Regel in
                                        # table1-standards.md
  modify_header(label ~ "**Merkmal**") |>
  modify_caption("**Tabelle 1. Baseline-Charakteristika**") |>
  bold_labels()

# KEIN add_p() bei einer reinen Baseline-/Table-1 (siehe table1-standards.md) –
# nur wenn ausdrücklich ein Signifikanztest gewünscht ist:
# tbl <- tbl |> add_p(test = list(all_continuous() ~ "wilcox.test"))

tbl
```

Bei schiefen/Ausreißer-Variablen statt Mittelwert/SD Median/IQR verwenden:

```r
tbl_summary(
  by = gruppe,
  statistic = list(gewicht_kg ~ "{median} ({p25}, {p75})")
)
```

## Ergebnis-/Regressionstabelle

```r
modell <- glm(ereignis ~ behandlung + alter + geschlecht,
              data = daten, family = binomial())

tbl_reg <- tbl_regression(
  modell,
  exponentiate = TRUE,              # Odds Ratio statt Log-Odds
  label = list(
    behandlung ~ "Behandlung",
    alter      ~ "Alter (Jahre)"
  )
) |>
  bold_p(t = 0.05) |>
  modify_header(estimate ~ "**OR**") |>
  modify_caption("**Tabelle 2. Logistische Regression**")
```

Für Cox-Modelle (Hazard Ratios, Überlebenszeit) funktioniert `tbl_regression()`
mit `coxph()`-Objekten genauso; `exponentiate = TRUE` liefert dann HR statt
Log-HR.

## Zwei Tabellen nebeneinander zusammenführen (z. B. deskriptiv + Modell)

```r
tbl_merge(
  list(tbl, tbl_reg),
  tab_spanner = c("**Baseline**", "**Multivariate Analyse**")
)
```

## Von gtsummary zu gt wechseln (Feinjustierung)

```r
library(gt)

tbl_gt <- tbl |> as_gt()

tbl_gt |>
  tab_source_note("Quelle: eigene Erhebung, N = 248.") |>
  tab_footnote(
    footnote = "SD = Standardabweichung; IQR = Interquartilsabstand.",
    locations = cells_column_labels()
  )
```

## gt direkt (Appsilon-Workflow, für Sonderlayouts)

Fünf-Schritte-Muster aus dem Appsilon-Artikel:

1. **Daten-Skelett bauen** (Zusammenfassen/Bereinigen), bevor `gt()` aufgerufen
   wird — Formatierung passiert NACH der Aggregation, nicht in `gt()` selbst.
2. **Initialisieren** mit `rowname_col` (Zeilenbeschriftung) und
   `groupname_col` (Gruppierung, z. B. Organsystem bei AE-Tabellen):
   ```r
   gt(daten_agg, rowname_col = "merkmal", groupname_col = "kategorie")
   ```
3. **Formatieren**, bevor gemerged wird (Präzision geht sonst verloren):
   ```r
   |> fmt_number(columns = mittelwert, decimals = 1)
   |> fmt_integer(columns = n)
   |> fmt_percent(columns = anteil, decimals = 0)
   ```
4. **Spalten zusammenführen**, z. B. „n (%)" aus zwei Hilfsspalten:
   ```r
   |> cols_merge_n_pct(col_n = n, col_pct = anteil)
   ```
   Allgemeiner (frei definiertes Muster):
   ```r
   |> cols_merge(columns = c(mittelwert, sd), pattern = "{1} ({2})")
   ```
5. **Feinschliff:**
   ```r
   |> tab_header(title = "Tabelle 3. Unerwünschte Ereignisse",
                 subtitle = "nach Organsystem und Behandlungsarm")
   |> cols_label_with(fn = \(x) paste0(x, "\n(n = ", n_gruppe, ")"))
   |> tab_stub_indent(rows = everything(), indent = 2)  # Detailzeilen einrücken
   |> cols_align(align = "center", columns = -1)
   |> opt_align_table_header(align = "left")
   ```

**Best Practices** (aus dem Appsilon-Artikel):
- Hilfsspalten während der Datenaufbereitung anlegen, erst am Ende mergen.
- Wiederholte Formatierungslogik mit `purrr::reduce()` statt Copy-Paste.
- Numerische Spalten zentrieren, Textspalten linksbündig.
- Stichprobengrößen im Spaltenkopf zeigen (`… (N = 84)`), nicht nur in einer
  Fußnote.

## Export

```r
# Word (für Berichte, die weiterbearbeitet werden)
gtsave(tbl_gt, "tabelle1.docx")

# Eigenständiges HTML
gtsave(tbl_gt, "tabelle1.html")

# LaTeX/PDF (Manuskript-Einreichung)
gtsave(tbl_gt, "tabelle1.tex")

# gtsummary direkt (praktisch für Word-Berichte via officer/flextable-Bridge)
# tbl |> as_flex_table() |> flextable::save_as_docx(path = "tabelle1.docx")
```
