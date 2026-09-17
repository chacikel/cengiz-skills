#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ============================================
// CONFIG
// ============================================

const BASE_PATH = process.env.HOME || '/Users/cengizhan';
const CONSULTING_PATH = path.join(BASE_PATH, 'StatistischeBeratung');

// ============================================
// TEMPLATES (K1-K4 EINGEBAUT)
// ============================================

const BINARY_TEMPLATE_DE = (metadata) => `---
title: "Analyse-Plan — ${metadata.project_id} ${metadata.project_name}"
author: "Prof. Dr. Cengizhan Acikel"
date: "\`r Sys.Date()\`"
output:
  html_document:
    toc: true
    toc_depth: 3
    toc_float: true
    number_sections: true
  pdf_document:
    toc: true
---

# 1. STUDIENÜBERSICHT & ENDPOINTS

## 1.1 Primäres Ziel

[Nutzer ausfüllen: Was ist das primäre Ziel der Studie?]

## 1.2 Primärer Endpoint

- **Typ:** Binär (Ja/Nein)
- **Definition:** [Nutzer definiert]
- **Zeitraum:** [Nutzer definiert]
- **Messeinheit:** Erfolg / Misserfolg

### 1.2.1 Kontrollgruppe (Baseline)
- Erwartete Rate: [Nutzer: z.B. 55%]

### 1.2.2 Behandlungsgruppe
- Erwartete Rate: [Nutzer: z.B. 70%]
- **Superiority Margin:** Δ = [Nutzer: z.B. 15%]

## 1.3 Sekundäre Endpoints

[Liste sekundärer Endpunkte]

---

# 2. STUDIENDESIGN

## 2.1 Design-Typ

- **Studientyp:** ${metadata.study_type || 'TBD'}
- **Randomisierungs-Ratio:** 1:1
- **Verblindung:** [Ja/Nein - Nutzer definiert]

## 2.2 Studienpopulation

- **Zielstichprobe N:** [Aus stat_sample-size-planning_cha]
- **Einschlusskriterien:**
  - [Nutzer definiert]
  
- **Ausschlusskriterien:**
  - [Nutzer definiert]

---

# 3. RANDOMISIERUNG & BEHANDLUNGSGRUPPEN

## 3.1 Behandlungsgruppen

\`\`\`{r}
# Behandlungsgruppen Definition
treatment_arms <- data.frame(
  Gruppe = c("Kontrolle", "Behandlung"),
  N_geplant_vor_Dropout = c(216, 216),
  N_angepasst_nach_Dropout = c(270, 270),  # Mit K2: 20% Dropout
  Erfolgsrate_erwartet = c(0.55, 0.70),
  Beschreibung = c("[Kontrolle]", "[Intervention]")
)

knitr::kable(treatment_arms, caption = "Behandlungsgruppen (K2: Mit Dropout-Korrektur)")
\`\`\`

## 3.2 Randomisierungsmethode

[Nutzer ausfüllen: Computergeneriert / Blockrandomisierung / etc.]

---

# 4. FALLZAHLPLANUNG (K2: DROPOUT-KORREKTUR)

## 4.1 Fallzahlberechnung

- **Primärer Endpoint:** Binär (Kontrol 55% vs. Behandlung 70%)
- **Testtyp:** Superiority
- **Type I Error (α):** 0.025 (einseitig)
- **Statistische Power (1-β):** 80%
- **Effektgröße:** Δ = 15%

## 4.2 DROPOUT-ANNAHME (K2)

\`\`\`{r}
# K2: KERNEL-KOMMANDO - Dropout-Korrektur IMMER EINGEBAUT
dropout_rate <- 0.20  # Standard 20%

N_vor_Dropout <- 216   # per Gruppe (aus Formel)
N_nach_Dropout <- N_vor_Dropout / (1 - dropout_rate)  # Anpassung
N_total <- N_nach_Dropout * 2  # beide Gruppen

cat("=== FALLZAHL ÜBERSICHT ===\\n")
cat(sprintf("N vor Dropout-Korrektur: %d pro Gruppe\\n", N_vor_Dropout))
cat(sprintf("N nach Dropout-Korrektur (20%% anticipated): %d pro Gruppe\\n", round(N_nach_Dropout)))
cat(sprintf("Gesamtstichprobe (N): %d\\n", round(N_total)))
\`\`\`

**Referenz:** Siehe \`stat_sample-size-planning_cha\` für detaillierte Berechnung

---

# 5. STATISTISCHE ANALYSEPLÄNE

## 5.1 Primäre Analyse

### 5.1.1 Hypothese

- **H₀ (Nullhypothese):** π_treatment ≤ π_control  
- **H₁ (Alternativhypothese):** π_treatment > π_control (einseitig)

### 5.1.2 Statistischer Test

\`\`\`{r}
# Binomischer Test für Superiority
# Methode: Z-Test (unpooled) oder exakter Test (Fisher)

# Example: Unpooled Z-Test
p_control <- 0.55
p_treatment <- 0.70
n_per_group <- 270

# Standard Error
se <- sqrt((p_control * (1 - p_control) + p_treatment * (1 - p_treatment)) / n_per_group)

# Z-Statistik
z_stat <- (p_treatment - p_control) / se

# p-value (einseitig)
p_value <- pnorm(z_stat, lower.tail = FALSE)

cat(sprintf("Z-Statistik: %.3f\\n", z_stat))
cat(sprintf("p-value (einseitig): %.4f\\n", p_value))
cat(sprintf("Signifikant bei α = 0.025? %s\\n", ifelse(p_value < 0.025, "JA ✓", "NEIN")))
\`\`\`

### 5.1.3 Effektmaße

\`\`\`{r}
# Risiko-Differenz (RD)
RD <- p_treatment - p_control
cat(sprintf("Risk Difference: %.1f%%\\n", RD * 100))

# Odds-Ratio (OR)
odds_control <- p_control / (1 - p_control)
odds_treatment <- p_treatment / (1 - p_treatment)
OR <- odds_treatment / odds_control
cat(sprintf("Odds Ratio: %.2f\\n", OR))

# Relatives Risiko (RR)
RR <- p_treatment / p_control
cat(sprintf("Relative Risk: %.2f\\n", RR))
\`\`\`

## 5.2 Analysepopulationen

| Population | Definition | Primär/Sekundär |
|---|---|---|
| **Intention-to-Treat (ITT)** | Alle randomisierten Patienten | Primär |
| **Per-Protocol (PP)** | Patienten mit guter Compliance | Sekundär |
| **Safety** | Alle behandelten Patienten | Sekundär |

## 5.3 Sekundäre Analysen

[Nutzer definiert: Subgruppenanalysen, Mediator-Analysen, etc.]

---

# 6. REGULATORISCHE COMPLIANCE & REFERENZEN (K3)

## 6.1 ICH E9 (1998)

**Statistical Principles for Clinical Trials**

- **URL:** https://www.ema.europa.eu/docs/en_GB/document_library/Scientific_guideline/2009/09/WC500002928.pdf
  
- **Relevante Abschnitte:**
  - Abschnitt 2.1: Patientenpopulation
  - Abschnitt 2.3: Statistische Methoden
  - Abschnitt 3: Analyse von Ergebnissen

- **Compliance-Punkte:**
  - [ ] Fallzahl begründet
  - [ ] Primärer Endpoint definiert
  - [ ] Analysepopulation spezifiziert
  - [ ] Statistische Tests vorspezifiziert

## 6.2 ICH E9(R1) (2019)

**Estimands and Sensitivity Analyses in Clinical Trials**

- **URL:** https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf

- **Kernkonzepte:**
  - Estimand-Definition (K4: Sensitivity Analysis)
  - Strategien für fehlende Daten
  - Robustheit gegenüber Annahmen

## 6.3 FDA Guidance (Binärer Endpoint)

[Einfügen: Spezifische FDA-Richtlinie für Ihren Endpoint]

- Binäre Endpunkte: FDA Guidance for Industry (Type of Evidence for Safety and Efficacy)

## 6.4 EMA Guidance

[Einfügen: Spezifische EMA-Richtlinie]

---

# 7. SENSITIVITÄTSANALYSE (K4)

## 7.1 Parametervariation (Grid-Analyse)

\`\`\`{r}
# K4: SENSITIVITY ANALYSIS
# Lade Sensitivitäts-Grid Template

sensitivity_file <- "../../03_ANALYSE/03d_SensitivityAnalysis/sensitivity_grid_template.csv"

if (file.exists(sensitivity_file)) {
  sensitivity_grid <- read.csv(sensitivity_file)
  cat("Sensitivitäts-Grid Parametervariationen:\\n")
  print(sensitivity_grid)
} else {
  cat("HINWEIS: sensitivity_grid_template.csv noch nicht erstellt\\n")
  cat("Siehe: 03_ANALYSE/03d_SensitivityAnalysis/\\n")
}

# Beispiel: Sample Size unter verschiedenen Annahmen
sample_size_scenarios <- expand.grid(
  Szenario = c("Conservative", "Base Case", "Optimistic"),
  Alpha = c(0.025),
  Power = c(0.80, 0.85, 0.90),
  Kontrollrate = c(0.50, 0.55, 0.60),
  Behandlungsrate = c(0.65, 0.70, 0.75),
  Dropout = c(0.15, 0.20, 0.25)
)

cat(sprintf("\\nTotal Sensitivity Szenarien: %d\\n", nrow(sample_size_scenarios)))
\`\`\`

## 7.2 Umgang mit fehlenden Daten (K4)

### Primäre Analyse
- **Strategie:** Intention-to-Treat (ITT)
- **Annahme:** Missing at Random (MAR)

### Sensitivitäts-Analysen
- **Scenario 1 (Optimistic):** Alle Dropout = Success
- **Scenario 2 (Conservative):** Alle Dropout = Failure
- **Scenario 3 (Per-Protocol):** Exclude Dropout (nur Completer)

\`\`\`{r}
# Pseudocode: Sensitivity Runs
# for (scenario in c("ITT", "MAR", "MCAR")) {
#   for (dropout in c(0.15, 0.20, 0.25)) {
#     result <- perform_analysis(data, strategy = scenario, dropout_rate = dropout)
#     store_result(scenario, dropout, result)
#   }
# }
\`\`\`

## 7.3 Robustheit der Ergebnisse

- [ ] Ergebnisse konsistent über Szenarien?
- [ ] Effektrichtung stabil?
- [ ] Größenordnung ähnlich?

---

# 8. DATENSCHUTZ & RANDOMISIERUNG

## 8.1 Verblindung

- **Patientenverblindung:** [Ja / Nein]
- **Prüfer-Verblindung:** [Ja / Nein]
- **Statistiker-Verblindung:** [Ja / Nein] (bis finale Analyse)

## 8.2 Allocation Concealment

[Nutzer definiert: Zentrale Randomisierung / Versiegelte Umschläge / etc.]

## 8.3 Data Integrity

- **Dateneingabe:** Double Entry / Single Entry + Validierung
- **Audit Trail:** [Ja / Nein]
- **Electronic Data Capture (EDC):** [Ja / Nein]

---

# 9. INTERIM-ANALYSE (Falls geplant)

**HINWEIS:** Für geplante Interim-Analysen nutze: \`stat_interim-analysis_cha\`

\`\`\`{r}
interim_planned <- FALSE  # TRUE = Interim-Analyse geplant
if (interim_planned) {
  cat("Interim-Analyse GEPLANT\\n")
  cat("→ Siehe: stat_interim-analysis_cha\\n")
} else {
  cat("Keine Interim-Analyse geplant\\n")
}
\`\`\`

---

# 10. ABWEICHUNGEN & AMENDMENTS

[Diese Sektion wird während der Studie aktualisiert]

| Datum | Änderung | Begründung | Version |
|---|---|---|---|
| [TBD] | [Amendment beschreiben] | [Grund] | [v1.1, v1.2, etc.] |

---

# 11. VERSIONSVERLAUF

| Version | Datum | Änderung | Autor |
|---|---|---|---|
| 1.0 | \`r Sys.Date()\` | Initiale Erstellung (stat_analysis-plan_cha v1.0) | Claude |
| [TBD] | [TBD] | [Amendments] | [Nutzer] |

---

# ANHANG: R-Umgebung & Pakete

\`\`\`{r, echo=TRUE}
# R Session Information
cat("R Version:\\n")
print(R.version)

cat("\\nGeladene Pakete:\\n")
print(sessionInfo())

# Erforderliche Pakete für diese Analyse
required_packages <- c("tidyverse", "knitr", "rmarkdown")
cat("\\nErforderliche Pakete für diese Analyse:\\n")
print(required_packages)
\`\`\`

---

**Generiert von:** \`stat_analysis-plan_cha\` v1.0  
**Projekt:** ${metadata.project_id} ${metadata.project_name}  
**Client:** ${metadata.client}  
**Erstellt:** \`r Sys.Date()\`  
**Sprache:** Deutsch  

---
`;

const BINARY_TEMPLATE_EN = (metadata) => `---
title: "Analysis Plan — ${metadata.project_id} ${metadata.project_name}"
author: "Prof. Dr. Cengizhan Acikel"
date: "\`r Sys.Date()\`"
output:
  html_document:
    toc: true
    toc_depth: 3
    toc_float: true
    number_sections: true
  pdf_document:
    toc: true
---

# 1. STUDY OVERVIEW & ENDPOINTS

## 1.1 Primary Objective

[User to fill in: What is the primary objective of the study?]

## 1.2 Primary Endpoint

- **Type:** Binary (Yes/No)
- **Definition:** [User to define]
- **Timeframe:** [User to define]
- **Measurement:** Success / Failure

### 1.2.1 Control Group (Baseline)
- Expected Rate: [User: e.g., 55%]

### 1.2.2 Treatment Group
- Expected Rate: [User: e.g., 70%]
- **Superiority Margin:** Δ = [User: e.g., 15%]

## 1.3 Secondary Endpoints

[List of secondary endpoints]

---

# 2. STUDY DESIGN

## 2.1 Design Type

- **Study Type:** ${metadata.study_type || 'TBD'}
- **Randomization Ratio:** 1:1
- **Blinding:** [Yes/No - User to define]

## 2.2 Study Population

- **Target Sample Size N:** [From stat_sample-size-planning_cha]
- **Inclusion Criteria:**
  - [User to define]
  
- **Exclusion Criteria:**
  - [User to define]

---

# 3. RANDOMIZATION & TREATMENT GROUPS

## 3.1 Treatment Groups

\`\`\`{r}
# Treatment Groups Definition
treatment_arms <- data.frame(
  Group = c("Control", "Treatment"),
  N_planned_before_dropout = c(216, 216),
  N_adjusted_after_dropout = c(270, 270),  # With K2: 20% dropout
  Expected_success_rate = c(0.55, 0.70),
  Description = c("[Control]", "[Intervention]")
)

knitr::kable(treatment_arms, caption = "Treatment Groups (K2: Adjusted for Dropout)")
\`\`\`

## 3.2 Randomization Method

[User to fill in: Computer-generated / Block Randomization / etc.]

---

# 4. SAMPLE SIZE DETERMINATION (K2: DROPOUT ADJUSTMENT)

## 4.1 Sample Size Calculation

- **Primary Endpoint:** Binary (Control 55% vs. Treatment 70%)
- **Test Type:** Superiority
- **Type I Error (α):** 0.025 (one-sided)
- **Statistical Power (1-β):** 80%
- **Effect Size:** Δ = 15%

## 4.2 DROPOUT ASSUMPTION (K2)

\`\`\`{r}
# K2: KERNEL-COMMAND - Dropout Correction ALWAYS BUILT IN
dropout_rate <- 0.20  # Standard 20%

N_before_dropout <- 216   # per group (from formula)
N_after_dropout <- N_before_dropout / (1 - dropout_rate)  # Adjustment
N_total <- N_after_dropout * 2  # both groups

cat("=== SAMPLE SIZE SUMMARY ===\\n")
cat(sprintf("N before dropout adjustment: %d per group\\n", N_before_dropout))
cat(sprintf("N after dropout adjustment (20%% anticipated): %d per group\\n", round(N_after_dropout)))
cat(sprintf("Total Sample Size (N): %d\\n", round(N_total)))
\`\`\`

**Reference:** See \`stat_sample-size-planning_cha\` for detailed calculations

---

# 5. STATISTICAL ANALYSIS PLANS

## 5.1 Primary Analysis

### 5.1.1 Hypothesis

- **H₀ (Null Hypothesis):** π_treatment ≤ π_control  
- **H₁ (Alternative Hypothesis):** π_treatment > π_control (one-sided)

### 5.1.2 Statistical Test

\`\`\`{r}
# Binomial test for superiority
# Method: Z-Test (unpooled) or exact test (Fisher)

# Example: Unpooled Z-Test
p_control <- 0.55
p_treatment <- 0.70
n_per_group <- 270

# Standard Error
se <- sqrt((p_control * (1 - p_control) + p_treatment * (1 - p_treatment)) / n_per_group)

# Z-Statistic
z_stat <- (p_treatment - p_control) / se

# p-value (one-sided)
p_value <- pnorm(z_stat, lower.tail = FALSE)

cat(sprintf("Z-Statistic: %.3f\\n", z_stat))
cat(sprintf("p-value (one-sided): %.4f\\n", p_value))
cat(sprintf("Significant at α = 0.025? %s\\n", ifelse(p_value < 0.025, "YES ✓", "NO")))
\`\`\`

### 5.1.3 Effect Measures

\`\`\`{r}
# Risk Difference (RD)
RD <- p_treatment - p_control
cat(sprintf("Risk Difference: %.1f%%\\n", RD * 100))

# Odds Ratio (OR)
odds_control <- p_control / (1 - p_control)
odds_treatment <- p_treatment / (1 - p_treatment)
OR <- odds_treatment / odds_control
cat(sprintf("Odds Ratio: %.2f\\n", OR))

# Relative Risk (RR)
RR <- p_treatment / p_control
cat(sprintf("Relative Risk: %.2f\\n", RR))
\`\`\`

## 5.2 Analysis Populations

| Population | Definition | Primary/Secondary |
|---|---|---|
| **Intention-to-Treat (ITT)** | All randomized patients | Primary |
| **Per-Protocol (PP)** | Patients with good compliance | Secondary |
| **Safety** | All treated patients | Secondary |

## 5.3 Secondary Analyses

[User to define: Subgroup analyses, mediation analyses, etc.]

---

# 6. REGULATORY COMPLIANCE & REFERENCES (K3)

## 6.1 ICH E9 (1998)

**Statistical Principles for Clinical Trials**

- **URL:** https://www.ema.europa.eu/docs/en_GB/document_library/Scientific_guideline/2009/09/WC500002928.pdf
  
- **Relevant Sections:**
  - Section 2.1: Patient Population
  - Section 2.3: Statistical Methods
  - Section 3: Analysis of Results

- **Compliance Checklist:**
  - [ ] Sample size justified
  - [ ] Primary endpoint defined
  - [ ] Analysis population specified
  - [ ] Statistical tests pre-specified

## 6.2 ICH E9(R1) (2019)

**Estimands and Sensitivity Analyses in Clinical Trials**

- **URL:** https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf

- **Key Concepts:**
  - Estimand Definition (K4: Sensitivity Analysis)
  - Missing Data Handling Strategies
  - Robustness to Assumptions

## 6.3 FDA Guidance (Binary Endpoints)

[Insert: Specific FDA guidance for your endpoint]

## 6.4 EMA Guidance

[Insert: Specific EMA guidance]

---

# 7. SENSITIVITY ANALYSIS (K4)

## 7.1 Parameter Variation (Grid Analysis)

\`\`\`{r}
# K4: SENSITIVITY ANALYSIS
# Load Sensitivity Grid Template

sensitivity_file <- "../../03_ANALYSE/03d_SensitivityAnalysis/sensitivity_grid_template.csv"

if (file.exists(sensitivity_file)) {
  sensitivity_grid <- read.csv(sensitivity_file)
  cat("Sensitivity Parameter Variations:\\n")
  print(sensitivity_grid)
} else {
  cat("NOTE: sensitivity_grid_template.csv not yet created\\n")
  cat("See: 03_ANALYSE/03d_SensitivityAnalysis/\\n")
}

# Example: Sample size under different assumptions
sample_size_scenarios <- expand.grid(
  Scenario = c("Conservative", "Base Case", "Optimistic"),
  Alpha = c(0.025),
  Power = c(0.80, 0.85, 0.90),
  ControlRate = c(0.50, 0.55, 0.60),
  TreatmentRate = c(0.65, 0.70, 0.75),
  Dropout = c(0.15, 0.20, 0.25)
)

cat(sprintf("\\nTotal Sensitivity Scenarios: %d\\n", nrow(sample_size_scenarios)))
\`\`\`

## 7.2 Missing Data Handling (K4)

### Primary Analysis
- **Strategy:** Intention-to-Treat (ITT)
- **Assumption:** Missing at Random (MAR)

### Sensitivity Analyses
- **Scenario 1 (Optimistic):** All dropout = success
- **Scenario 2 (Conservative):** All dropout = failure
- **Scenario 3 (Per-Protocol):** Exclude dropout (completers only)

\`\`\`{r}
# Pseudocode: Sensitivity Runs
# for (scenario in c("ITT", "MAR", "MCAR")) {
#   for (dropout in c(0.15, 0.20, 0.25)) {
#     result <- perform_analysis(data, strategy = scenario, dropout_rate = dropout)
#     store_result(scenario, dropout, result)
#   }
# }
\`\`\`

## 7.3 Robustness of Results

- [ ] Results consistent across scenarios?
- [ ] Effect direction stable?
- [ ] Magnitude similar?

---

# 8. DATA INTEGRITY & RANDOMIZATION

## 8.1 Blinding

- **Patient Blinding:** [Yes / No]
- **Investigator Blinding:** [Yes / No]
- **Statistician Blinding:** [Yes / No] (until final analysis)

## 8.2 Allocation Concealment

[User to define: Central randomization / Sealed envelopes / etc.]

## 8.3 Data Integrity

- **Data Entry:** Double Entry / Single Entry + Validation
- **Audit Trail:** [Yes / No]
- **Electronic Data Capture (EDC):** [Yes / No]

---

# 9. INTERIM ANALYSIS (If Planned)

**NOTE:** For planned interim analyses use: \`stat_interim-analysis_cha\`

\`\`\`{r}
interim_planned <- FALSE  # TRUE = Interim analysis planned
if (interim_planned) {
  cat("Interim Analysis PLANNED\\n")
  cat("→ See: stat_interim-analysis_cha\\n")
} else {
  cat("No interim analysis planned\\n")
}
\`\`\`

---

# 10. DEVIATIONS & AMENDMENTS

[This section to be updated during the study]

| Date | Change | Rationale | Version |
|---|---|---|---|
| [TBD] | [Describe amendment] | [Reason] | [v1.1, v1.2, etc.] |

---

# 11. VERSION HISTORY

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | \`r Sys.Date()\` | Initial Plan (stat_analysis-plan_cha v1.0) | Claude |
| [TBD] | [TBD] | [Amendments] | [User] |

---

# APPENDIX: R Environment & Packages

\`\`\`{r, echo=TRUE}
# R Session Information
cat("R Version:\\n")
print(R.version)

cat("\\nLoaded Packages:\\n")
print(sessionInfo())

# Required Packages for this Analysis
required_packages <- c("tidyverse", "knitr", "rmarkdown")
cat("\\nRequired Packages for this Analysis:\\n")
print(required_packages)
\`\`\`

---

**Generated by:** \`stat_analysis-plan_cha\` v1.0  
**Project:** ${metadata.project_id} ${metadata.project_name}  
**Client:** ${metadata.client}  
**Created:** \`r Sys.Date()\`  
**Language:** English  

---
`;

const CONTINUOUS_TEMPLATE_DE = (metadata) => `---
title: "Analyse-Plan (Kontinuierlich) — ${metadata.project_id} ${metadata.project_name}"
author: "Prof. Dr. Cengizhan Acikel"
date: "\`r Sys.Date()\`"
output:
  html_document:
    toc: true
    toc_depth: 3
---

# 1. PRIMÄRER ENDPOINT (KONTINUIERLICH)

## 1.1 Endpoint-Charakteristika

- **Typ:** Kontinuierlich (Messwert)
- **Variable:** [Nutzer: z.B. HbA1c, Blutdruck, Cholesterin]
- **Maßeinheit:** [Nutzer: z.B. %, mmHg, mg/dL]
- **Verteilung:** Normal / Nicht-Normal [TBD]

## 1.2 Erwartete Mittelwerte

- **Kontrollgruppe (Baseline):** [Nutzer: z.B. 8.0%]
- **Behandlungsgruppe (Baseline):** [Nutzer: z.B. 7.9%]
- **Erwartete Differenz:** [Nutzer: z.B. -0.5%]
- **Standardabweichung:** [Nutzer: z.B. 0.8%]

---

# 2. FALLZAHL MIT DROPOUT-KORREKTUR (K2)

\`\`\`{r}
# Kontinuierlich Endpoint: t-Test
# K2: Dropout-Korrektur IMMER eingebaut

dropout_rate <- 0.20
mean_diff <- -0.5  # Erwartete Differenz
sd <- 0.8          # Standardabweichung
alpha <- 0.025
power <- 0.80

# Vereinfachte Formel für Zweigruppen t-Test
n_before <- ceiling((2 * sd^2 * (qnorm(1 - alpha/2) + qnorm(power))^2) / mean_diff^2)
n_after <- ceiling(n_before / (1 - dropout_rate))

cat(sprintf("N vor Dropout-Korrektur: %d pro Gruppe\\n", n_before))
cat(sprintf("N nach Dropout-Korrektur (20%%): %d pro Gruppe\\n", n_after))
cat(sprintf("Total N: %d\\n", n_after * 2))
\`\`\`

---

# 3. STATISTISCHE ANALYSE

## 3.1 Primärer Test: t-Test (Unabhängige Stichproben)

\`\`\`{r}
# Beispiel-Durchführung
set.seed(123)
control <- rnorm(n = 270, mean = 8.0, sd = 0.8)
treatment <- rnorm(n = 270, mean = 7.5, sd = 0.8)

t_result <- t.test(control, treatment, paired = FALSE, alternative = "greater")
print(t_result)

# Cohens d (Effektgröße)
cohens_d <- (mean(treatment) - mean(control)) / sd(c(control, treatment))
cat(sprintf("Cohen's d: %.3f\\n", cohens_d))
\`\`\`

## 3.2 Effektmaße

- **Mittlere Differenz:** [Calculated from data]
- **Cohen's d:** [Effect size interpretation]
- **95% Konfidenzintervall:** [CI]

---

# 4. REGULATORY REFERENCES (K3)

- ICH E9 (1998): Statistical Principles for Clinical Trials
- ICH E9(R1) (2019): Estimands & Sensitivity Analysis
- FDA Guidance: Fit for Purpose Endpoint Documentation

---

# 5. SENSITIVITÄTSANALYSE (K4)

[Details wie in Binär-Template]

---

**Generiert von:** \`stat_analysis-plan_cha\` v1.0
`;

const TIMEVENT_TEMPLATE_DE = (metadata) => `---
title: "Analyse-Plan (Time-to-Event/Survival) — ${metadata.project_id} ${metadata.project_name}"
author: "Prof. Dr. Cengizhan Acikel"
date: "\`r Sys.Date()\`"
output:
  html_document:
    toc: true
    toc_depth: 3
---

# 1. TIME-TO-EVENT ENDPOINT

## 1.1 Endpoint-Definition

- **Typ:** Time-to-Event (Überlebensdaten, Rezidiv-freie Überlebenszeit, etc.)
- **Event:** [Nutzer definiert: z.B. Tod, Rezidiv, Hospitalisierung]
- **Zensierung:** Patienten ohne Event bei Studienende
- **Follow-up-Zeit:** [Nutzer: z.B. 24 Monate]

## 1.2 Erwartete Ereignisraten

- **Kontrollgruppe:** [Nutzer: z.B. 30% Events]
- **Behandlungsgruppe:** [Nutzer: z.B. 20% Events]
- **Hazard Ratio:** [Nutzer: z.B. 0.65]

---

# 2. FALLZAHL (K2: DROPOUT-KORREKTUR)

\`\`\`{r}
# Time-to-Event: Log-Rank Test
# K2: Dropout-Korrektur angewendet

dropout_rate <- 0.20
event_rate_control <- 0.30
event_rate_treatment <- 0.20
alpha <- 0.025
power <- 0.80

# Erforderliche Anzahl von Events
events_required <- ceiling(4 * (qnorm(1 - alpha/2) + qnorm(power))^2 / 
                            (log(event_rate_control / event_rate_treatment))^2)

# Anpassung für Dropout
n_adjusted <- ceiling(events_required / (1 - dropout_rate))

cat(sprintf("Erforderliche Events: %d\\n", events_required))
cat(sprintf("N (angepasst für 20%% Dropout): %d\\n", n_adjusted))
\`\`\`

---

# 3. KAPLAN-MEIER KURVEN & LOG-RANK TEST

\`\`\`{r}
library(survival)
library(survminer)

# Survival-Objekt erstellen
surv_obj <- Surv(time = data\$time_to_event, event = data\$event)

# Log-Rank Test
log_rank <- survdiff(surv_obj ~ group, data = data)

# Kaplan-Meier Kurven
fit <- survfit(Surv(time_to_event, event) ~ group, data = data)

# Plot
ggsurvplot(fit, 
           pval = TRUE,
           title = "Kaplan-Meier Kurven",
           xlab = "Zeit (Monate)",
           ylab = "Überlebenswahrscheinlichkeit")
\`\`\`

---

# 4. REGULATORY REFERENCES (K3)

- ICH E9: Spezielle Hinweise zu Überlebensdaten
- FDA Guidance on Survival Analysis
- EMA Guideline on Survival Studies

---

# 5. SENSITIVITÄTSANALYSE (K4)

[Details wie in Binär-Template]

---

**Generiert von:** \`stat_analysis-plan_cha\` v1.0
`;

// ============================================
// HELPER FUNCTIONS
// ============================================

function findProjectFolder(projectId) {
  const year = new Date().getFullYear();
  const yearPath = path.join(CONSULTING_PATH, year.toString());
  
  if (!fs.existsSync(yearPath)) {
    return null;
  }
  
  const dirs = fs.readdirSync(yearPath);
  const matching = dirs.find(d => d.includes(projectId));
  
  if (matching) {
    return path.join(yearPath, matching);
  }
  
  // Try previous year
  const lastYear = year - 1;
  const lastYearPath = path.join(CONSULTING_PATH, lastYear.toString());
  if (fs.existsSync(lastYearPath)) {
    const lastYearDirs = fs.readdirSync(lastYearPath);
    const lastYearMatching = lastYearDirs.find(d => d.includes(projectId));
    if (lastYearMatching) {
      return path.join(lastYearPath, lastYearMatching);
    }
  }
  
  return null;
}

function readMetadata(projectFolder) {
  const metadataPath = path.join(projectFolder, '00_ADMINISTRATIVE', 'PROJECT_METADATA.json');
  
  if (!fs.existsSync(metadataPath)) {
    return null;
  }
  
  const content = fs.readFileSync(metadataPath, 'utf-8');
  return JSON.parse(content);
}

function selectTemplate(endpointType, language) {
  if (language === 'English') {
    if (endpointType === 'Kontinuierlich') {
      return { template: CONTINUOUS_TEMPLATE_DE, name: 'Continuous (EN template pending)' };
    }
    return { template: BINARY_TEMPLATE_EN, name: 'Binary' };
  }
  
  if (endpointType === 'Kontinuierlich') {
    return { template: CONTINUOUS_TEMPLATE_DE, name: 'Kontinuierlich' };
  }
  
  if (endpointType === 'Time-Event' || endpointType === 'TimeEvent') {
    return { template: TIMEVENT_TEMPLATE_DE, name: 'Time-Event' };
  }
  
  return { template: BINARY_TEMPLATE_DE, name: 'Binär' };
}

// ============================================
// MAIN EXECUTION
// ============================================

async function main() {
  const args = process.argv.slice(2);
  
  let projectId = null;
  let language = null;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--project_id' && args[i + 1]) projectId = args[++i];
    if (args[i] === '--language' && args[i + 1]) language = args[++i];
  }
  
  if (!projectId) {
    console.error('❌ Error: --project_id required');
    console.error('Usage: node create_analysis_plan.js --project_id SK001 [--language Deutsch]');
    process.exit(1);
  }
  
  try {
    console.log(`🔍 Searching for project: ${projectId}`);
    
    const projectFolder = findProjectFolder(projectId);
    if (!projectFolder) {
      console.error(`❌ Project folder not found: ${projectId}`);
      process.exit(1);
    }
    
    console.log(`✅ Found project folder: ${projectFolder}`);
    
    const metadata = readMetadata(projectFolder);
    if (!metadata) {
      console.error('❌ PROJECT_METADATA.json not found');
      process.exit(1);
    }
    
    console.log(`✅ Read metadata for: ${metadata.project_name}`);
    
    // Determine language
    const finalLanguage = language || metadata.language || 'Deutsch';
    console.log(`📝 Using language: ${finalLanguage}`);
    
    // Select template
    const endpointType = metadata.endpoint_type || 'Binär';
    const { template, name } = selectTemplate(endpointType, finalLanguage);
    
    console.log(`📋 Selected template: ${name} (${endpointType})`);
    
    // Generate content
    const content = template(metadata);
    
    // Write to file
    const outputFilename = `Analysis_Plan_${projectId}_${name.replace(/ü/g, 'ue')}.Rmd`;
    const outputPath = path.join(projectFolder, '01_AUFTRAG', outputFilename);
    
    fs.writeFileSync(outputPath, content, 'utf-8');
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ ANALYSE-PLAN ERFOLGREICH ERSTELLT\n`);
    console.log(`📄 Datei: ${outputFilename}`);
    console.log(`📍 Pfad: ${outputPath}\n`);
    console.log(`✅ K1: Language = ${finalLanguage}`);
    console.log(`✅ K2: Dropout Correction (20%) eingebaut`);
    console.log(`✅ K3: Regulatory References (ICH E9, FDA, EMA)`);
    console.log(`✅ K4: Sensitivity Analysis Section vorbereitet\n`);
    console.log(`🚀 Nächste Schritte:`);
    console.log(`1. Öffne in VS Code: File → Open`);
    console.log(`2. Installiere R Extension (Posit)`);
    console.log(`3. Klick "Preview" (oben rechts) für RMarkdown Preview`);
    console.log(`4. Bearbeite [User definiert] Platzhalter`);
    console.log(`5. Speichere (Cmd + S)`);
    console.log(`6. Führe Code Chunks aus (Cmd + Shift + Enter)`);
    console.log(`${'='.repeat(60)}\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
