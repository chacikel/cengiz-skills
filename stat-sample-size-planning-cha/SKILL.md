---
name: stat_sample-size-planning_cha
description: |
  Berechne erforderliche Stichprobengröße für klinische Studien nach ICH E9, FDA, EMA Standards.
  
  Verwende diesen Skill IMMER wenn:
  - Nutzer fragt „Wie viele Probanden brauchen wir?", „Sample Size berechnen", „Power-Analyse", „N berechnen"
  - Studienprotokoll wird vorbereitet und Stichprobengröße muss begründet werden
  - Regulatorische Einreichung (Protokoll, SAP, Clinical Investigational Plan) statistische Planung dokumentiert
  - Endpoint-Design, Non-Inferiority-Margin, Superiority-Grenze oder Äquivalenz-Margin definiert werden
  - Sensitivity-Analyse oder Dropout-Anpassung erforderlich ist
  - SOP (Standard Operating Procedure) für Sample Size Determination als DOCX erstellt werden muss
  
  Output: N pro Gruppe (mit Dropout-Korrektur, immer eingebaut), Berechnungsformeln, Regulatory Notes (ICH E9/E9(R1), FDA, EMA), DOCX-SOP strukturiert wie Ihr Scaffold-Beispiel.
compatibility: Optional; kann R/Python nutzen, läuft aber auch analytisch. Node.js (docx-Bibliothek) für DOCX-Output.
---

# Sample-Size-Planning Skill

## **⚠️ IMPORTANT: Language & Report Format**

**Claude behaves wie folgt:**

```
IF Nutzer sagt Sprache/Report-Format nicht:
  → Claude fragt IMMER: "In welcher Sprache soll der Bericht sein? (Deutsch/English/Andere?)"
  → Vor Berechnung starten
```

**Unterstützte Sprachen:**
- 🇩🇪 Deutsch (Standard für deine Büroumgebung)
- 🇬🇧 English
- 🇹🇷 Türkçe
- Andere (auf Anfrage)

**Report-Format:**
- 📄 DOCX (Standard, unterschreibbar)
- 📋 Markdown (einfach)
- 📊 JSON (strukturiert für weitere Verarbeitung)

---

## Schritt 0: Language & Format Abfrage (VOR Schritt 1!)

Stelle diese Fragen (oder nutze die Informationen aus dem Kontext):

### **A. Studiendesign & Endpoint**
- **Endpoint-Typ:** Kontinuierlich (Mittelwert), Binär (Erfolgsrate), Zeit-bis-Ereignis (Hazard Ratio)?
- **Primärer Endpunkt:** Name + Maßeinheit (z.B. "Reduktion des Blutdrucks (mmHg)")

### **B. Testtyp & Hypothese**
- **Testtyp:** Superiority, Non-Inferiority, Äquivalenz?
  - **Superiority:** Neue Behandlung besser als Kontrolle/Placebo?
  - **Non-Inferiority:** Neue Behandlung nicht schlechter als Standard um δ?
  - **Äquivalenz:** Beide Behandlungen funktionieren gleich (±Margin)?
- **Einseitig oder zweiseitig:** Standard = zweiseitig (außer bei Superiority gegen Placebo = einseitig)

### **C. Statistische Parameter**

| Parameter | Typischer Wert | Anmerkung |
|-----------|---|---|
| **α (Alpha)** | 5% = 0,05 | Typ-I-Fehler (False Positive); Zweiseitig: 0,025 je Seite |
| **Power (1-β)** | 80–90% | β = Typ-II-Fehler (False Negative); 1-β = Sensitivität |
| **Effect Size (Δ)** | Abhängig vom Kontext | Minimale klinisch relevante Differenz zw. Gruppen |
| **SD (Standardabweichung)** | Aus Literatur/Pilot | Für kontinuierliche Endpunkte; Variabilität in der Population |
| **Non-Inferiority-Margin (δ)** | Klinisch begründet | Z.B. -10%, -1 Punkt; MUSS regulatorisch gerechtfertigt sein |
| **Baseline-Rate (p₀)** | Für binäre Endpunkte | Erfolgsrate in Kontrollgruppe (z.B. 65%) |

---

## Schritt 2: Formelauswahl (Entscheidungsbaum)

```
Testtyp?
├─ SUPERIORITY
│  ├─ Kontinuierlich (Mittelwert-Differenz)
│  │  └─ n = 2×SD²×(Z_{1-α/2} + Z_{1-β})² / Δ²
│  │     [Zweiseitig; Z_{0.975}≈1.96, Z_{0.90}≈1.282 für Power=80%]
│  │
│  └─ Binär (Proportionen)
│     └─ n = (p₁(1-p₁) + p₀(1-p₀)) × (Z_{1-α/2} + Z_{1-β})² / (p₁-p₀)²
│        [p₀=Baseline, p₁=erwartete Rate unter Behandlung]
│
├─ NON-INFERIORITY
│  ├─ Kontinuierlich
│  │  └─ n = SD² × (Z_{1-α} + Z_{1-β})² / δ²
│  │     [EINSEITIG; Z_{0.95}≈1.645 (α=0.05), Z_{0.90}≈1.282 (Power=80%)]
│  │     δ = Non-Inferiority-Margin (z.B. -1 Punkt)
│  │
│  └─ Binär
│     └─ n = (p₀(1-p₀) + p₁(1-p₁)) × (Z_{1-α} + Z_{1-β})² / (p₁-p₀+δ)²
│        [Margin δ als Anteil; z.B. δ=-0.10 für -10%]
│
└─ ÄQUIVALENZ
   ├─ Kontinuierlich
   │  └─ n = 2×SD²×(Z_{1-α/2} + Z_{1-β})² / Δ²
   │     [Ähnlich Superiority, aber symmetrische Margin ±Δ]
   │
   └─ Binär
      └─ n ≈ Superiority-Formel (konservativ)
```

---

## Schritt 3: Beispielrechnungen (mit Zahlen)

### **Beispiel 1: Superiority – Kontinuierlich**

**Szenario:** Neues Antidiabetikum vs. Standard; Zielparameter = HbA1c-Reduktion

| Parameter | Wert | Quelle |
|-----------|------|--------|
| Testtyp | Superiority, zweiseitig | — |
| Endpoint | HbA1c-Reduktion (%) | — |
| Δ (erwartete Differenz) | 0,5 % | Literatur: neue Substanz zeigt Δ≥0.5% |
| SD (Standardabw.) | 1,2 % | Pilot-Studie; ähnliche Populationen |
| α (Signifikanzniveau) | 0,05 (5%) | ICH E9 Standard |
| Power (1-β) | 0,90 (90%) | Konservativ für Zulassungsstudien |

**Z-Werte:**
- Z_{1-α/2} = Z_{0.975} ≈ 1,96 (zweiseitig 5%)
- Z_{1-β} = Z_{0.90} ≈ 1,282 (Power 90%, β=10%)

**Berechnung:**
```
n = 2 × (1,2)² × (1,96 + 1,282)² / (0,5)²
  = 2 × 1,44 × (3,242)² / 0,25
  = 2 × 1,44 × 10,51 / 0,25
  = 30,29 / 0,25
  = 121
```

**Resultat:** **n = 121 pro Gruppe** (insgesamt 242 Patienten)

**Mit Dropout (10% angenommen):** n_korrigiert = 121 / 0,9 ≈ **135 pro Gruppe** (insgesamt ~270)

---

### **Beispiel 2: Non-Inferiority – Binär**

**Szenario:** Neuer Impfstoff vs. Standardimpfstoff; Endpunkt = Serokonversion (Erfolgsrate)

| Parameter | Wert | Begründung |
|-----------|------|-----------|
| Testtyp | Non-Inferiority, einseitig | Ziel: neuer Impfstoff nicht schlechter |
| Endpoint | Serokonversion-Rate (%) | Anteil mit Antikörper >1:40 nach 28 Tagen |
| p₀ (Kontrolle) | 65% | Historische Daten Standardimpfstoff |
| p₁ (erwartet) | 63% | Annahme: neue Formulierung ähnlich |
| δ (Margin) | -10% | Regulatorisch akzeptabel: nicht <55% |
| α (einseitig) | 0,025 | Standard für Non-Inferiority (= 5% zweiseitig) |
| Power (1-β) | 0,90 (90%) | — |

**Z-Werte:**
- Z_{1-α} = Z_{0.975} ≈ 1,96 (einseitig 2,5%)
- Z_{1-β} = Z_{0.90} ≈ 1,282

**Berechnung:**
```
n = (p₀(1-p₀) + p₁(1-p₁)) × (Z_{1-α} + Z_{1-β})² / (p₁ - p₀ + δ)²
  = (0,65×0,35 + 0,63×0,37) × (1,96 + 1,282)² / (0,63 - 0,65 - 0,10)²
  = (0,2275 + 0,2331) × (3,242)² / (-0,12)²
  = 0,4606 × 10,51 / 0,0144
  = 4,84 / 0,0144
  = 336
```

**Resultat:** **n = 336 pro Gruppe** (insgesamt 672 Patienten)

---

## Schritt 4: SOP-Output (DOCX oder Markdown)

Der Skill produziert eine **strukturierte SOP als DOCX-Datei** (Word-konform) nach folgender **Vorlage:**

**Ausgabedatei:** `SOP_SampleSizeDetermination_[StudienID]_v1.0.docx`

**Inhaltsstruktur:**

1. **Titelseite:** Dokumenttitel, Versionskontrolle, Unterschriftenseite
2. **Purpose (A1):** Studienkontext & Ziele
3. **Assumptions (A2):** Software, statistische Parameter, Dropout
4. **Results (A3):** Hauptszenarien mit N-Berechnung
5. **Sensitivity Analysis (A4):** Grids für Unsicherheiten (Falls mehrere Szenarien)
6. **Assessment & Recommendation (A5):** Alternatives + Begründung
7. **Regulatory Notes (A6):** Methoden-Details, Referenzen

**Output ist IMMER:**
- ✅ Strukturiert wie Ihr Scaffold-Dokument
- ✅ Mit Dropout-Korrektion im Resultat-Feld
- ✅ Tabellarisch für leichte Regulierungs-Submission
- ✅ Mit Quellen & Regulatorischen Noten

---

## Schritt 5: Regulatory Checkpoints (Integration in Protokoll)

Folgende Dokumente MÜSSEN diese Rechnung referenzieren:

1. **Clinical Investigational Plan (Protocol):** Abschnitt „Statistical Considerations" → Sample Size Section
2. **Statistical Analysis Plan (SAP):** Abschnitt 4 „Sample Size Justification"
3. **Chemistry/Manufacturing/Controls (CMC)** oder **Regulatory Submissions:** Supporting document „Statistical Justification"

**Typischer Text für Protocol:**

> *Sample size was calculated to provide [Power]% power to detect a [Testtyp] of [Δ] in [Endpunkt] at a significance level of α=[α]. Assuming [SD/baseline rate], using [Formel-Name], we determined a sample size of n=[N] per group ([N_total] total). This calculation is based on ICH E9 guidelines and supported by [Literatur]. Accounting for anticipated dropout rate of [X]%, the target enrollment is [N_adjusted] patients.*

---

## Schritt 6: Häufige Fallstricke

| Problem | Lösung |
|---------|--------|
| Keine Begründung für Non-Inferiority-Margin | **MUSS regulatorisch / klinisch gerechtfertigt sein!** FDA: „Margin der größte klinisch akzeptable Verlust ist" |
| Power zu niedrig (z.B. 70%) | Standard in Zulassungsstudien: mindestens 80–90%; bei seltenen Krankheiten: 70–80% akzeptabel |
| Einseitig vs. zweiseitig falsch | Non-Inferiority = einseitig! Superiority = zweiseitig (Standard) |
| Dropout nicht berücksichtigt | ICH E9 fordert explicit „allowance for attrition"; typisch 5–15% |
| Falscher SD für kontinuierliche Endpunkte | Muss aus Literatur / Pilot sein (nicht aus Annahmen) |

---

## Schritt 7: Nächste Schritte

1. **Eingaben validieren** mit Biostatistiker
2. **SAP-Abschnitt 4** füllen (diesen SOP-Template nutzen)
3. **Interim-Analyse überlegen?** (siehe ICH E9 Abschnitt 4.5)
4. **Regulatorischer Input** (FDA/EMA Scientific Advice bei Unsicherheiten)

---

## Quellen & Literatur

- **ICH E9 (1998):** https://www.ema.europa.eu/docs/en_GB/document_library/Scientific_guideline/2009/09/WC500002928.pdf
- **ICH E9(R1) (2019):** Estimands Framework — https://database.ich.org/sites/default/files/E9-R1_Step4_Guideline_2019_1203.pdf
- **FDA Guidance (if applicable):** FDA-specific endpoint guidance
- **Chow, S.C., Shao, J., Wang, H. (2008):** Sample Size Calculations in Clinical Research (2nd ed.) — Standard-Referenzbuch
- **EMA Guideline (small populations):** EMA/CHMP 2006 — Flexibilität bei kleinen Populationen

---

**HINWEIS:** Dieser Skill liefert eine erste Berechnung. Vor regulatorischer Einreichung MUSS ein unabhängiger Biostatistiker die Annahmen und Berechnungen validieren.
