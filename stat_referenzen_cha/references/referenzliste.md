# Statistische Referenzliste

**Teil I: Fallzahlschätzung (A–F)** · **Teil II: Statistische Auswertung (G–L)**

Stand 2026-10-07. Die Zeitschriftenartikel sind über PubMed geprüft (die wenigen nicht in PubMed indexierten über Crossref) (Autor, Jahr, Band, Seiten, DOI). Bücher und Leitlinien (F) sind **nicht** über PubMed geprüft, daher Auflage und Jahr vor dem Zitieren kontrollieren.
BibTeX-Schlüssel stehen in Backticks und entsprechen `assets/statistik_referenzen.bib`.
**F** = enthält Fallzahlformeln (✓ ausführlich, ◐ teilweise, – keine). **Tier/ANOVA** = relevant für ANOVA-, Block- oder faktorielle Tierversuchsdesigns. **OA** = frei zugänglich. ⚠ = Zeitschrift niedrigeren Rangs, aber hoch zitiert, daher nur ergänzend zu einer Kernreferenz verwenden.

---

## A. Allgemeine Grundlagen und Formeln (designübergreifend)

| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| A1 `lachin1981` | Lachin, J. M. (1981). Introduction to sample size determination and power analysis for clinical trials. *Controlled Clinical Trials, 2*(2), 93–113. https://doi.org/10.1016/0197-2456(81)90001-5 | ✓ | Klassiker. Allgemeine Herleitung, aus der sich die Formeln für t-Test, Anteile, Überlebenszeit und Korrelation ergeben. | | |
| A2 `julious2004` | Julious, S. A. (2004). Sample sizes for clinical trials with normal data. *Statistics in Medicine, 23*(12), 1921–1986. https://doi.org/10.1002/sim.1783 | ✓ | Umfassender Tutorial-Review mit Formeln und Tabellen für Überlegenheit, Äquivalenz, Nicht-Unterlegenheit, Bioäquivalenz und Präzision (Parallel- und Crossover-Design). Brücke zu Gruppe B. | | |
| A3 `noordzij2010` | Noordzij, M., Tripepi, G., Dekker, F. W., Zoccali, C., Tanck, M. W., & Jager, K. J. (2010). Sample size calculations: Basic principles and common pitfalls. *Nephrology Dialysis Transplantation, 25*(5), 1388–1393. https://doi.org/10.1093/ndt/gfp732 | ◐ | Didaktisch. Grundprinzipien und typische Fehler (Sensitivität gegenüber den Annahmen). | | |
| A4 `schulz2005` | Schulz, K. F., & Grimes, D. A. (2005). Sample size calculations in randomised trials: Mandatory and mystical. *The Lancet, 365*(9467), 1348–1353. https://doi.org/10.1016/S0140-6736(05)61034-3 | ◐ | Kritische Einordnung: Die angenommene Effektgröße ist subjektiv. Gut für den Abschnitt „Einschränkungen". | | |
| A5 `faul2007` | Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G\*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. *Behavior Research Methods, 39*(2), 175–191. https://doi.org/10.3758/BF03193146 | ◐ | Software-Referenz, falls G\*Power zur Kontrollrechnung dient. Nutzt wie `pwr` Cohen's f. | ✓ | |
| A6 `browne1995` | Browne, R. H. (1995). On the use of a pilot sample for sample size determination. *Statistics in Medicine, 14*(17), 1933–1940. https://doi.org/10.1002/sim.4780141709 | ✓ | SD aus einer kleinen Pilotstudie unterschätzt oft die wahre SD. Empfiehlt die obere Konfidenzgrenze von σ. Argument für eine Sensitivitätsanalyse der Varianz-/Effektannahme. | ✓ | |

## B. Klinische Studien — typspezifisch (Überlegenheit, Nicht-Unterlegenheit, Äquivalenz, weitere Designs)

### B1. Überlegenheit
| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| B1.1 `flight2016sup` | Flight, L., & Julious, S. A. (2016). Practical guide to sample size calculations: Superiority trials. *Pharmaceutical Statistics, 15*(1), 75–79. https://doi.org/10.1002/pst.1718 | ✓ | Schrittweise Anleitung mit Rechenbeispielen von Hand. | | |
| B1.2 `zhong2009` | Zhong, B. (2009). How to calculate sample size in randomized controlled trials? *Journal of Thoracic Disease, 1*(1), 51–54. [PMC3256489](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3256489/) | ✓ | Kurze Formelsammlung für RCTs. ⚠ Zeitschrift eher niedriger Rang, nur ergänzend zitieren. | | ✓ |

### B2. Nicht-Unterlegenheit und Äquivalenz
| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| B2.1 `blackwelder1982` | Blackwelder, W. C. (1982). "Proving the null hypothesis" in clinical trials. *Controlled Clinical Trials, 3*(4), 345–353. https://doi.org/10.1016/0197-2456(82)90024-1 | ✓ | Grundlagenarbeit zum Nicht-Unterlegenheits-/Äquivalenzansatz mit verschobener Nullhypothese (binärer Endpunkt). | | |
| B2.2 `farrington1990` | Farrington, C. P., & Manning, G. (1990). Test statistics and sample size formulae for comparative binomial trials with null hypothesis of non-zero risk difference or non-unity relative risk. *Statistics in Medicine, 9*(12), 1447–1454. https://doi.org/10.1002/sim.4780091208 | ✓ | Standardformeln für Nicht-Unterlegenheit bei Anteilen (Risikodifferenz, relatives Risiko). In vielen Programmen implementiert. | | |
| B2.3 `schuirmann1987` | Schuirmann, D. J. (1987). A comparison of the two one-sided tests procedure and the power approach for assessing the equivalence of average bioavailability. *Journal of Pharmacokinetics and Biopharmaceutics, 15*(6), 657–680. https://doi.org/10.1007/BF01068419 | ◐ | Originalquelle des TOST-Verfahrens für Äquivalenz bzw. Bioäquivalenz. | | |
| B2.4 `flight2016ni` | Flight, L., & Julious, S. A. (2016). Practical guide to sample size calculations: Non-inferiority and equivalence trials. *Pharmaceutical Statistics, 15*(1), 80–89. https://doi.org/10.1002/pst.1716 | ✓ | Praxisleitfaden mit Rechenbeispielen. Gegenstück zu B1.1. | | |
| B2.5 `walker2011` | Walker, E., & Nowacki, A. S. (2011). Understanding equivalence and noninferiority testing. *Journal of General Internal Medicine, 26*(2), 192–196. https://doi.org/10.1007/s11606-010-1513-8 | ◐ | Verständliche Einführung, gut für einen nicht-statistischen Auftraggeber. | | ✓ [PMC3019319](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3019319/) |
| B2.6 `rothmann2003` | Rothmann, M., Li, N., Chen, G., Chi, G. Y. H., Temple, R., & Tsou, H.-H. (2003). Design and analysis of non-inferiority mortality trials in oncology. *Statistics in Medicine, 22*(2), 239–264. https://doi.org/10.1002/sim.1400 | ◐ | Wahl der Nicht-Unterlegenheitsgrenze (FDA-Autoren), Hazard Ratio, Erhalt eines Anteils des Kontrolleffekts. | | |
| B2.7 `piaggio2012` | Piaggio, G., Elbourne, D. R., Pocock, S. J., Evans, S. J. W., Altman, D. G., & CONSORT Group. (2012). Reporting of noninferiority and equivalence randomized trials: Extension of the CONSORT 2010 statement. *JAMA, 308*(24), 2594–2604. https://doi.org/10.1001/jama.2012.87802 | – | Berichtsstandard, unter anderem für die Begründung der Grenze und der Fallzahl. | | |

### B3. Weitere Endpunkte und Designs
| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| B3.1 `schoenfeld1983` | Schoenfeld, D. A. (1983). Sample-size formula for the proportional-hazards regression model. *Biometrics, 39*(2), 499–503. PMID [6354290](https://pubmed.ncbi.nlm.nih.gov/6354290/) (DOI prüfen) | ✓ | Standardformel für die Anzahl der Ereignisse bei Überlebenszeit-Endpunkten (Cox-Modell). | | |
| B3.2 `frison1992` | Frison, L., & Pocock, S. J. (1992). Repeated measures in clinical trials: Analysis using mean summary statistics and its implications for design. *Statistics in Medicine, 11*(13), 1685–1704. https://doi.org/10.1002/sim.4780111304 | ✓ | Fallzahl bei wiederholten Messungen und ANCOVA mit Baseline-Wert. | ◐ | |
| B3.3 `borm2007` | Borm, G. F., Fransen, J., & Lemmens, W. A. J. G. (2007). A simple sample size formula for analysis of covariance in randomized clinical trials. *Journal of Clinical Epidemiology, 60*(12), 1234–1238. https://doi.org/10.1016/j.jclinepi.2007.02.006 | ✓ | Einfache Regel: Mit ANCOVA wird n auf (1 − ρ²)·n reduziert. Relevant, falls Baseline-Kovariaten genutzt werden. | ◐ | |
| B3.4 `campbell2004` | Campbell, M. K., Elbourne, D. R., Altman, D. G., & CONSORT Group. (2004). CONSORT statement: Extension to cluster randomised trials. *BMJ, 328*(7441), 702–708. https://doi.org/10.1136/bmj.328.7441.702 | ◐ | Designeffekt bzw. ICC bei Cluster-Randomisierung. | | ✓ [PMC381234](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC381234/) |
| B3.5 `gangnon2004` | Gangnon, R. E., & Kosorok, M. R. (2004). Sample-size formula for clustered survival data using weighted log-rank statistics. *Biometrika, 91*(2), 263–275. https://doi.org/10.1093/biomet/91.2.263 | ✓ | Fallzahl für gepaarte oder geclusterte Überlebenszeitdaten (z. B. mehrere Tiere pro Wurf, beide Augen). Über Crossref geprüft. | ◐ | |

## C. Populations- und Beobachtungsstudien (Epidemiologie, Prävalenz, Diagnostik, Regression)

| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| C1 `arya2012` | Arya, R., Antonisamy, B., & Kumar, S. (2012). Sample size estimation in prevalence studies. *Indian Journal of Pediatrics, 79*(11), 1482–1488. https://doi.org/10.1007/s12098-012-0763-3 | ✓ | Prävalenzschätzung mit gewünschter Präzision, Endlichkeitskorrektur, Cluster-Stichproben. ⚠ Zeitschrift mittlerer Rang. | | |
| C2 `dupont1988` | Dupont, W. D. (1988). Power calculations for matched case-control studies. *Biometrics, 44*(4), 1157–1168. PMID [3233252](https://pubmed.ncbi.nlm.nih.gov/3233252/) (DOI prüfen) | ✓ | Gematchte Fall-Kontroll-Studien (1:M), Einfluss der Korrelation der Exposition. | | |
| C3 `hsieh1998` | Hsieh, F. Y., Bloch, D. A., & Larsen, M. D. (1998). A simple method of sample size calculation for linear and logistic regression. *Statistics in Medicine, 17*(14), 1623–1634. https://doi.org/10.1002/(SICI)1097-0258(19980730)17:14<1623::AID-SIM871>3.0.CO;2-S | ✓ | Lineare und logistische Regression, Korrektur über den Varianzinflationsfaktor. Standard in Kohortenstudien. | | |
| C4 `peduzzi1996` | Peduzzi, P., Concato, J., Kemper, E., Holford, T. R., & Feinstein, A. R. (1996). A simulation study of the number of events per variable in logistic regression analysis. *Journal of Clinical Epidemiology, 49*(12), 1373–1379. https://doi.org/10.1016/S0895-4356(96)00236-3 | ◐ | Ursprung der Faustregel „10 EPV". Heute durch C5 relativiert. | | |
| C5 `riley2020` | Riley, R. D., Ensor, J., Snell, K. I. E., Harrell, F. E., Jr., Martin, G. P., Reitsma, J. B., Moons, K. G. M., Collins, G., & van Smeden, M. (2020). Calculating the sample size required for developing a clinical prediction model. *BMJ, 368*, m441. https://doi.org/10.1136/bmj.m441 | ✓ | Aktueller Standard für Prognose- und Prädiktionsmodelle (R-Paket `pmsampsize`). | | ✓ |
| C6 `buderer1996` | Buderer, N. M. (1996). Statistical methodology: I. Incorporating the prevalence of disease into the sample size calculation for sensitivity and specificity. *Academic Emergency Medicine, 3*(9), 895–900. https://doi.org/10.1111/j.1553-2712.1996.tb03538.x | ✓ | Diagnostische Studien: Sensitivität und Spezifität mit vorgegebener Präzision unter Berücksichtigung der Prävalenz. | | |
| C7 `hajiantilaki2014` | Hajian-Tilaki, K. (2014). Sample size estimation in diagnostic test studies of biomedical informatics. *Journal of Biomedical Informatics, 48*, 193–204. https://doi.org/10.1016/j.jbi.2014.02.013 | ✓ | Formelübersicht für Sensitivität, Spezifität, Likelihood-Ratio und AUC (Schätzen und Testen). | | |

### C8. Regression, Faktorenanalyse, Skalen, Reliabilität
| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| C8.1 `green1991` | Green, S. B. (1991). How many subjects does it take to do a regression analysis. *Multivariate Behavioral Research, 26*(3), 499–510. https://doi.org/10.1207/s15327906mbr2603_7 | ✓ | Klassische Faustregeln N ≥ 50 + 8m (Gesamtmodell) bzw. N ≥ 104 + m (Einzelprädiktor) und deren Grenzen. Ergänzt C3. | | |
| C8.2 `guadagnoli1988` | Guadagnoli, E., & Velicer, W. F. (1988). Relation of sample size to the stability of component patterns. *Psychological Bulletin, 103*(2), 265–275. https://doi.org/10.1037/0033-2909.103.2.265 | ◐ | Fallzahl für die PCA bzw. Faktorenanalyse hängt von den Ladungen ab, nicht von festen N:Item-Verhältnissen. | | |
| C8.3 `bonett2002` | Bonett, D. G. (2002). Sample size requirements for testing and estimating coefficient alpha. *Journal of Educational and Behavioral Statistics, 27*(4), 335–340. https://doi.org/10.3102/10769986027004335 | ✓ | Formel für die Fallzahl zu Cronbachs α (Test und Konfidenzintervall). Nicht in PubMed, über Crossref geprüft. | | |
| C8.4 `anthoine2014` | Anthoine, E., Moret, L., Regnault, A., Sébille, V., & Hardouin, J.-B. (2014). Sample size used to validate a scale: A review of publications on newly-developed patient reported outcomes measures. *Health and Quality of Life Outcomes, 12*, 176. https://doi.org/10.1186/s12955-014-0176-2 | – | Review zur Fallzahlpraxis bei der Validierung von PRO-Skalen (N:Item-Verhältnis). | | ✓ [PMC4275948](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4275948/) |
| C8.5 `sim2005` | Sim, J., & Wright, C. C. (2005). The kappa statistic in reliability studies: Use, interpretation, and sample size requirements. *Physical Therapy, 85*(3), 257–268. PMID [15733050](https://pubmed.ncbi.nlm.nih.gov/15733050/) | ✓ | Fallzahltabellen für κ. Gleichzeitig Auswertungsreferenz (siehe J). | | |

## D. Tierversuche — Fallzahl und Versuchsplanung

| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| D1 `festing2002` | Festing, M. F. W., & Altman, D. G. (2002). Guidelines for the design and statistical analysis of experiments using laboratory animals. *ILAR Journal, 43*(4), 244–258. https://doi.org/10.1093/ilar.43.4.244 | ✓ | **Kernreferenz.** Versuchseinheit, Randomisierung, Blockdesign, Poweranalyse und Resource Equation, ANOVA. | ✓ | ✓ |
| D2 `dell2002` | Dell, R. B., Holleran, S., & Ramakrishnan, R. (2002). Sample size determination. *ILAR Journal, 43*(4), 207–213. https://doi.org/10.1093/ilar.43.4.207 | ✓ | Fallzahlformeln für Tierversuche (Formeln im Anhang). Komplexe Designs lassen sich auf eine Kernfrage reduzieren. | ✓ | ✓ [PMC3275906](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3275906/) |
| D3 `festing2018` | Festing, M. F. W. (2018). On determining sample size in experiments involving laboratory animals. *Laboratory Animals, 52*(4), 341–350. https://doi.org/10.1177/0023677217738268 | ✓ | Vergleich von Tradition, Resource Equation und Poweranalyse. „KISS"-Ansatz: Aus einem vorläufigen n die nachweisbare Effektgröße zurückrechnen. | ✓ | |
| D4 `charan2013` | Charan, J., & Kantharia, N. D. (2013). How to calculate sample size in animal studies? *Journal of Pharmacology & Pharmacotherapeutics, 4*(4), 303–306. https://doi.org/10.4103/0976-500X.119726 | ✓ | Oft zitierte Kurzanleitung (Power und Resource Equation). ⚠ Zeitschrift niedriger Rang, nur ergänzend zu D1–D3 zitieren. | ◐ | ✓ [PMC3826013](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3826013/) |
| D5 `arifin2017` | Arifin, W. N., & Zahiruddin, W. M. (2017). Sample size calculation in animal studies using resource equation approach. *Malaysian Journal of Medical Sciences, 24*(5), 101–105. https://doi.org/10.21315/mjms2017.24.5.11 | ✓ | Umgestellte Formeln der Resource Equation (Fehler-FG 10–20) für das minimale und maximale n je Gruppe, auch für wiederholte Messungen. Gute **Plausibilitätsprüfung** einer Poweranalyse. ⚠ Zeitschrift niedriger Rang. | ✓ | ✓ [PMC5772820](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5772820/) |
| D6 `festing2014` | Festing, M. F. W. (2014). Randomized block experimental designs can increase the power and reproducibility of laboratory animal experiments. *ILAR Journal, 55*(3), 472–476. https://doi.org/10.1093/ilar/ilu045 | ◐ | Begründung für das **Blockdesign** (Zeit als Blockfaktor): mehr Power bei gleicher Tierzahl. | ✓ | |
| D7 `shaw2002` | Shaw, R., Festing, M. F. W., Peers, I., & Furlong, L. (2002). Use of factorial designs to optimize animal experiments and reduce animal use. *ILAR Journal, 43*(4), 223–232. https://doi.org/10.1093/ilar.43.4.223 | ◐ | Begründung für die **faktorielle Alternative** (Reduction im Sinne der 3R). | ✓ | |
| D8 `karp2021` | Karp, N. A., & Fry, D. (2021). What is the optimum design for my animal experiment? *BMJ Open Science, 5*(1), e100126. https://doi.org/10.1136/bmjos-2020-100126 | – | Fallbeispiele zu Blockbildung, Kovariaten, faktoriellem Design und Pseudoreplikation. | ✓ | ✓ [PMC8749281](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8749281/) |
| D9 `lazic2018` | Lazic, S. E., Clarke-Williams, C. J., & Munafò, M. R. (2018). What exactly is 'N' in cell culture and animal experiments? *PLOS Biology, 16*(4), e2005282. https://doi.org/10.1371/journal.pbio.2005282 | – | Definition der Versuchseinheit und Vermeidung von Pseudoreplikation (wichtig bei mehreren Messungen pro Tier). | ✓ | ✓ |
| D10 `kramer2017` | Kramer, M., & Font, E. (2017). Reducing sample size in experiments with animals: Historical controls and related strategies. *Biological Reviews, 92*(1), 431–445. https://doi.org/10.1111/brv.12237 | ◐ | Kontrollgruppe durch historische Kontrollen verkleinern (Reduction). Option für die Diskussion. | ◐ | |
| D11 `bonapersona2021` | Bonapersona, V., Hoijtink, H., RELACS Consortium, Sarabdjitsingh, R. A., & Joëls, M. (2021). Increasing the statistical power of animal experiments with historical control data. *Nature Neuroscience, 24*(4), 470–477. https://doi.org/10.1038/s41593-020-00792-3 | ◐ | Bayes'scher Ansatz mit historischen Kontrollen, Tool RePAIR. Bis zu ca. 50 % weniger Kontrolltiere. Hochrangige Zeitschrift. | ◐ | |
| D12 `button2013` | Button, K. S., Ioannidis, J. P. A., Mokrysz, C., Nosek, B. A., Flint, J., Robinson, E. S. J., & Munafò, M. R. (2013). Power failure: Why small sample size undermines the reliability of neuroscience. *Nature Reviews Neuroscience, 14*(5), 365–376. https://doi.org/10.1038/nrn3475 | – | Warnung: Geringe Power führt zu überschätzten Effekten. Hilft beim Argument gegen ein zu knappes n bzw. eine zu große Effektgröße. | ◐ | |
| D13 `festing2003` | Festing, M. F. W. (2003). Principles: The need for better experimental design. *Trends in Pharmacological Sciences, 24*(7), 341–345. https://doi.org/10.1016/S0165-6147(03)00159-7 | – | Kurzer Grundsatzartikel. Optional. | | |

## E. Berichtsstandards und Werkzeuge (Tierversuch)

| # | Referenz | F | Einsatz / Kernaussage | Tier/ANOVA | OA |
|---|---|---|---|---|---|
| E1 `perciedusert2020` | Percie du Sert, N., Hurst, V., Ahluwalia, A., Alam, S., Avey, M. T., Baker, M., … Würbel, H. (2020). The ARRIVE guidelines 2.0: Updated guidelines for reporting animal research. *PLOS Biology, 18*(7), e3000410. https://doi.org/10.1371/journal.pbio.3000410 | – | ARRIVE Essential 10, Item 2 („Sample size"): verlangt die Begründung der Fallzahl. Pflichtzitat für die Methodik. | ✓ | ✓ |
| E2 `perciedusert2017` | Percie du Sert, N., Bamsey, I., Bate, S. T., Berdoy, M., Clark, R. A., Cuthill, I., … Lings, B. (2017). The Experimental Design Assistant. *PLOS Biology, 15*(9), e2003779. https://doi.org/10.1371/journal.pbio.2003779 | – | NC3Rs-Tool zur Planung und Prüfung des Designs. Optional. | ◐ | ✓ |
| E3 `kilkenny2009` | Kilkenny, C., Parsons, N., Kadyszewski, E., Festing, M. F. W., Cuthill, I. C., Fry, D., Hutton, J., & Altman, D. G. (2009). Survey of the quality of experimental design, statistical analysis and reporting of research using animals. *PLOS ONE, 4*(11), e7824. https://doi.org/10.1371/journal.pone.0007824 | – | Belegt Defizite in der Praxis (fehlende Randomisierung und Verblindung). Optional. | | ✓ |

## F. Lehrbücher und Leitlinien (nicht über PubMed geprüft, bitte Auflage kontrollieren)

| # | Referenz | F | Einsatz | Gruppe |
|---|---|---|---|---|
| F1 `cohen1988` | Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum. | ✓ | Definition von Cohen's f. | A/D |
| F2 `chow2017` | Chow, S.-C., Shao, J., Wang, H., & Lokhnygina, Y. (2017). *Sample size calculations in clinical research* (3rd ed.). Chapman & Hall/CRC. | ✓ | Standardwerk: Formeln für alle Hypothesentypen (Überlegenheit, Nicht-Unterlegenheit, Äquivalenz) und Endpunkte. | A/B |
| F3 `machin2018` | Machin, D., Campbell, M. J., Tan, S. B., & Tan, S. H. (2018). *Sample sizes for clinical, laboratory and epidemiology studies* (4th ed.). Wiley-Blackwell. | ✓ | Tabellen und Formeln für Klinik, Labor und Epidemiologie, deckt also A–C ab. | A/B/C |
| F4 `lwanga1991` | Lwanga, S. K., & Lemeshow, S. (1991). *Sample size determination in health studies: A practical manual*. World Health Organization. | ✓ | WHO-Handbuch für Populations- und Querschnittsstudien. Frei verfügbar (WHO IRIS). | C |
| F5 `mead2012` | Mead, R., Gilmour, S. G., & Mead, A. (2012). *Statistical principles for the design of experiments*. Cambridge University Press. | ✓ | Ursprung der „Resource Equation" (Mead 1988). Block- und faktorielle Designs. | D |
| F6 `bate2014` | Bate, S. T., & Clark, R. A. (2014). *The design and statistical analysis of animal experiments*. Cambridge University Press. | ✓ | Lehrbuch speziell für Tierversuche (Power, Block, faktoriell, wiederholte Messungen). | D |
| F7 `iche9, iche9r1` | ICH. (1998). *E9: Statistical principles for clinical trials*. Dazu ICH. (2019). *E9(R1) Addendum on estimands*. | – | Regulatorischer Rahmen für die Fallzahlbegründung in klinischen Studien. | B |
| F8 `ema2005ni, fda2016ni` | EMA/CHMP. (2005). *Guideline on the choice of the non-inferiority margin* (EMEA/CPMP/EWP/2158/99). Dazu FDA. (2016). *Non-inferiority clinical trials to establish effectiveness: Guidance for industry*. | – | Wahl der Nicht-Unterlegenheitsgrenze. | B |
| F9 `eu2010_63` | Richtlinie 2010/63/EU zum Schutz der für wissenschaftliche Zwecke verwendeten Tiere. Dazu TierSchG und TierSchVersV. | – | Rechtlicher Rahmen (3R, „Reduction"). Begründet, warum die Fallzahl im Tierversuchsantrag gerechtfertigt werden muss. | D |

---

# Teil II: Statistische Auswertung

## G. Lehrbücher und Software-Handbücher (nicht über PubMed geprüft, Auflage kontrollieren)
| # | Referenz | Einsatz |
|---|---|---|
| G1 `field2013` | Field, A. (2013). *Discovering statistics using IBM SPSS Statistics* (4th ed.). SAGE. | Allgemeine Auswertung (t-Test, ANOVA, Regression, nichtparametrische Verfahren), Annahmenprüfung. Sehr hoch zitiert. |
| G2 `field2010sas` | Field, A., & Miles, J. (2010). *Discovering statistics using SAS*. SAGE. | Wie G1, wenn die Auswertung in SAS erfolgt. |
| G3 `landau2004` | Landau, S., & Everitt, B. S. (2004). *A handbook of statistical analyses using SPSS*. Chapman & Hall/CRC. | Kompaktes Methodenhandbuch (SPSS). |
| G4 `chen2017` | Chen, D.-G., Peace, K. E., & Zhang, P. (2017). *Clinical trial data analysis using R and SAS* (2nd ed.). Chapman & Hall/CRC. | Auswertung klinischer Studien mit R und SAS (ANCOVA, longitudinal, Überlebenszeit, Meta-Analyse). |
| G5 `machin2004` | Machin, D., Day, S., & Green, S. (Eds.). (2004). *Textbook of clinical trials*. Wiley. | Herausgeberwerk zu Design und Auswertung klinischer Studien. |
| G6 `wassertheilsmoller2004` | Wassertheil-Smoller, S. (2004). *Biostatistics and epidemiology: A primer for health and biomedical professionals* (3rd ed.). Springer. | Einführung in Biostatistik und Epidemiologie, auch für Populationsstudien. |
| → D1 `festing2002` | Festing & Altman (2002), siehe D1. | **Auswertung von Tierversuchen** (t-Test, ANOVA, Blockdesign). Doppelt einsetzbar. |

## H. Randomisierung und Crossover
| # | Referenz | Einsatz | OA |
|---|---|---|---|
| H1 `vickers2006` | Vickers, A. J. (2006). How to randomize. *Journal of the Society for Integrative Oncology, 4*(4), 194–198. https://doi.org/10.2310/7200.2006.023 | Prinzipien der Randomisierung und Geheimhaltung der Zuteilung (allocation concealment): Block, Stratifizierung, Minimierung. | ✓ [PMC2596474](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2596474/) |
| H2 `kim2014` | Kim, J., & Shin, W. (2014). How to do random allocation (randomization). *Clinics in Orthopedic Surgery, 6*(1), 103–109. https://doi.org/10.4055/cios.2014.6.1.103 | Praktische Anleitung: einfache, Block- und stratifizierte Randomisierung. ⚠ Zeitschrift niedrigeren Rangs. | ✓ [PMC3942596](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3942596/) |
| H3 `senn2002` | Senn, S. (2002). The AB/BA design with normal data. In *Cross-over trials in clinical research* (2nd ed., pp. 35–88). Wiley. https://doi.org/10.1002/0470854596.ch3 | Standardreferenz zur Auswertung von Crossover-Studien (Periode, Carry-over). | |

## I. Überlebenszeitanalyse, gepaarte und geclusterte Daten
| # | Referenz | Einsatz | OA |
|---|---|---|---|
| I1 `jung1999` | Jung, S.-H. (1999). Rank tests for matched survival data. *Lifetime Data Analysis, 5*(1), 67–79. https://doi.org/10.1023/A:1009635201363 | Logrank- bzw. Wilcoxon-Test mit korrigiertem Standardfehler für gematchte Daten (z. B. Würfe, Tiermodell). | |
| I2 `iacobelli2013` | Iacobelli, S., & EBMT Statistical Committee. (2013). Suggestions on the use of statistical methodologies in studies of the European Group for Blood and Marrow Transplantation. *Bone Marrow Transplantation, 48*(Suppl 1), S1–S37. https://doi.org/10.1038/bmt.2012.282 | Methodenleitfaden für Überlebenszeit: Kaplan-Meier, Cox, konkurrierende Risiken, Variablenkodierung, Berichterstattung. | |
| → B3.1, B3.5 | Schoenfeld (1983), Gangnon & Kosorok (2004) | Zugehörige Fallzahlformeln. | |

## J. Messmethodenvergleich, Reliabilität, Skalen
| # | Referenz | Einsatz | OA |
|---|---|---|---|
| J1 `bland1986` | Bland, J. M., & Altman, D. G. (1986). Statistical methods for assessing agreement between two methods of clinical measurement. *The Lancet, 1*(8476), 307–310. https://doi.org/10.1016/S0140-6736(86)90837-8 | Bland-Altman-Analyse (Übereinstimmungsgrenzen). Zeigt, warum die Korrelation hier ungeeignet ist. Extrem hoch zitiert. | |
| J2 `bland1997` | Bland, J. M., & Altman, D. G. (1997). Cronbach's alpha. *BMJ, 314*(7080), 572. https://doi.org/10.1136/bmj.314.7080.572 | Kurze Standardreferenz zu Cronbachs α. | ✓ [PMC2126061](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2126061/) |
| J3 `tavakol2011` | Tavakol, M., & Dennick, R. (2011). Making sense of Cronbach's alpha. *International Journal of Medical Education, 2*, 53–55. https://doi.org/10.5116/ijme.4dfb.8dfd | Interpretation von α (zu hoch bzw. zu niedrig, Itemzahl). Editorial, hoch zitiert. | ✓ [PMC4205511](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4205511/) |
| J4 `sim2005` | Sim & Wright (2005), siehe C8.5. | Gewichtetes und ungewichtetes κ, Einfluss von Prävalenz und Bias, Interpretation. | |
| J5 `hinkin1997` | Hinkin, T. R., Tracey, J. B., & Enz, C. A. (1997). Scale construction: Developing reliable and valid measurement instruments. *Journal of Hospitality & Tourism Research, 21*(1), 100–120. https://doi.org/10.1177/109634809702100108 | Schritte der Skalenentwicklung (Itemgenerierung, EFA/CFA, Reliabilität). Fachfremde Zeitschrift, daher nur bei Skalenentwicklung zitieren. Über Crossref geprüft. | |

## K. Variablenaufbereitung
| # | Referenz | Einsatz | OA |
|---|---|---|---|
| K1 `altman2006` | Altman, D. G., & Royston, P. (2006). The cost of dichotomising continuous variables. *BMJ, 332*(7549), 1080. https://doi.org/10.1136/bmj.332.7549.1080 | Begründung, stetige Variablen **nicht** zu dichotomisieren (Power- und Informationsverlust). | ✓ [PMC1458573](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1458573/) |
| K2 `maccallum2002` | MacCallum, R. C., Zhang, S., Preacher, K. J., & Rucker, D. D. (2002). On the practice of dichotomization of quantitative variables. *Psychological Methods, 7*(1), 19–40. https://doi.org/10.1037/1082-989X.7.1.19 | Ausführliche methodische Begründung gegen den Median-Split. | |

## L. Populationsstudien
| # | Referenz | Einsatz | OA |
|---|---|---|---|
| L1 `ahmad2001` | Ahmad, O. B., Boschi-Pinto, C., Lopez, A. D., Murray, C. J. L., Lozano, R., & Inoue, M. (2001). *Age standardization of rates: A new WHO standard* (GPE Discussion Paper Series No. 31). World Health Organization. | WHO-Standardbevölkerung für die Altersstandardisierung von Raten. Graue Literatur, aber der Standard. | ✓ (WHO) |

---

## Bewusst nicht aufgenommen (aus der Importdatei)

| Quelle | Grund |
|---|---|
| Suresh (2011), *J Hum Reprod Sci* 4:8–11, Randomisierungstechniken | **Zurückgezogen** (PubMed-Status „Retracted Publication"). Nicht zitieren. |
| Leonard/Alii (2010), *J Biometrics & Biostatistics* | Verlag OMICS, gilt als predatory. |
| Osborne & Costello (2004), *PARE* 9(11) | Weder in PubMed noch in Crossref verifizierbar. |
| Machin (1997), *Sample size tables for clinical studies* (2nd ed.) | Ersetzt durch die 4. Auflage (`machin2018`). |
| Gharibvand, Latouche, Park, Winner, Ornek, „Anon", WHO eHealth, POS-Manual, Cross-Validated-Webseite | Graue Literatur, Vorlesungsskripte, Webseiten oder fehlende bibliografische Angaben. |
| Biesecker (2013), *Genome Research* | Thema (Hypothesen generierende Forschung) passt nicht zu Fallzahl oder Auswertung. |
| Bowers et al. (2006), *Understanding Clinical Papers* | Autorenangaben in der Importdatei fehlerhaft, inhaltlich verzichtbar. |
