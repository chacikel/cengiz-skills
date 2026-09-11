# ==============================================================================
# table_template.R
# Grundgerüst für publikationsreife Tabellen (Baseline / Ergebnis / Ereignis)
# Skill: stat_tabelle_erstellen_cha
#
# Benötigte Pakete: gtsummary, gt, dplyr
#   install.packages(c("gtsummary", "gt", "dplyr"))
# ==============================================================================

library(dplyr)
library(gtsummary)
library(gt)

# ------------------------------------------------------------------------------
# 1) BASELINE- / TABLE-1-TABELLE
#    Regeln: siehe references/table1-standards.md
#    -> KEINE p-Werte in einer reinen Baseline-Tabelle (Zeile mit add_p()
#       ist deshalb standardmässig auskommentiert).
# ------------------------------------------------------------------------------

baseline_tabelle <- function(daten, gruppe_var, variablen,
                              normalverteilt = character(0)) {
  # normalverteilt: Vektor der stetigen Variablen, die als Mittelwert (SD)
  #                 statt Median (IQR) gezeigt werden sollen.
  daten |>
    select(all_of(c(gruppe_var, variablen))) |>
    tbl_summary(
      by = all_of(gruppe_var),
      statistic = list(
        all_of(normalverteilt) ~ "{mean} ({sd})",
        all_continuous()       ~ "{median} ({p25}, {p75})",
        all_categorical()      ~ "{n} ({p}%)"
      ),
      digits = list(all_continuous() ~ 1, all_categorical() ~ 0),
      missing = "ifany",
      missing_text = "Fehlend"
    ) |>
    add_overall(last = TRUE) |>
    modify_header(label ~ "**Merkmal**") |>
    modify_caption("**Tabelle 1. Baseline-Charakteristika**") |>
    bold_labels()
  # Nur bei explizitem Wunsch nach Signifikanztest (siehe
  # reporting-checklists.md, Ausnahmefall):
  # |> add_p(test = list(all_continuous() ~ "wilcox.test"))
}

# Beispiel:
# tbl1 <- baseline_tabelle(
#   daten        = studiendaten,
#   gruppe_var   = "behandlungsarm",
#   variablen    = c("alter", "geschlecht", "gewicht_kg", "vorerkrankung"),
#   normalverteilt = "alter"
# )
# tbl1

# ------------------------------------------------------------------------------
# 2) ERGEBNIS-/REGRESSIONSTABELLE (OR/HR mit 95%-CI)
#    Regeln: siehe references/formatting-rules.md (Abschnitt "p-Werte")
# ------------------------------------------------------------------------------

ergebnis_tabelle <- function(modell, exponentiate = TRUE, titel = "Tabelle 2. Modellergebnisse") {
  tbl_regression(modell, exponentiate = exponentiate) |>
    bold_p(t = 0.05) |>
    modify_caption(paste0("**", titel, "**"))
}

# Beispiel (logistische Regression):
# modell <- glm(ereignis ~ behandlung + alter + geschlecht,
#               data = studiendaten, family = binomial())
# tbl2 <- ergebnis_tabelle(modell, exponentiate = TRUE, titel = "Tabelle 2. Logistische Regression (OR)")
# tbl2

# Beispiel (Cox-Modell, falls 'survival' geladen ist):
# library(survival)
# cox_modell <- coxph(Surv(zeit, ereignis) ~ behandlung + alter, data = studiendaten)
# tbl2b <- ergebnis_tabelle(cox_modell, titel = "Tabelle 2b. Cox-Regression (HR)")

# ------------------------------------------------------------------------------
# 3) EREIGNIS-/SICHERHEITSTABELLE (gt direkt, mit Gruppierung)
#    Codepatterns: siehe references/gt-gtsummary-patterns.md
# ------------------------------------------------------------------------------

ereignis_tabelle <- function(daten_agg, titel = "Tabelle 3. Unerwuenschte Ereignisse") {
  # daten_agg muss vorher aggregiert sein: Spalten z. B.
  #   kategorie (Organsystem), ereignis, gruppe, n, anteil
  daten_agg |>
    gt(rowname_col = "ereignis", groupname_col = "kategorie") |>
    fmt_integer(columns = n) |>
    fmt_percent(columns = anteil, decimals = 0) |>
    cols_merge_n_pct(col_n = n, col_pct = anteil) |>
    tab_header(title = titel) |>
    tab_stub_indent(rows = everything(), indent = 2) |>
    cols_align(align = "center", columns = -1) |>
    opt_align_table_header(align = "left")
}

# ------------------------------------------------------------------------------
# 4) EXPORT
# ------------------------------------------------------------------------------

# tbl1 |> as_gt() |> gtsave("tabelle1.docx")   # Word, fuer Berichte
# tbl1 |> as_gt() |> gtsave("tabelle1.html")   # eigenstaendiges HTML
# tbl1 |> as_gt() |> gtsave("tabelle1.tex")    # LaTeX, fuer Manuskript-Einreichung
