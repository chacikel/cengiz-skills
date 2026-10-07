---
name: stat_referenzen_cha
description: "Geprüfte statistische Referenzliste (APA 7 + BibTeX) für statistische Dokumente: Berichte, SAPs, Protokolle, Fallzahlberichte, Tierversuchsanträge. Teil I Fallzahlschätzung (allgemeine Formeln; klinische Studien: Überlegenheit, Nicht-Unterlegenheit, Äquivalenz, Überlebenszeit, ANCOVA, Cluster; Populationsstudien: Prävalenz, Fall-Kontroll, Regression, Prädiktion, Diagnostik, Skalen/Reliabilität; Tierversuche: Resource Equation, Block-/faktorielles Design; Leitlinien ICH E9, EMA, ARRIVE). Teil II Statistische Auswertung (Lehrbücher SPSS/SAS/R, Randomisierung, Crossover, Überlebenszeit, Bland-Altman, Cronbachs Alpha, Kappa, Dichotomisierung, Altersstandardisierung). IMMER nutzen, wenn ein statistisches Dokument vorbereitet wird, das ein Literaturverzeichnis braucht: ca. 3 Fallzahl- und mind. 3 Auswertungsreferenzen; bei reinen Fallzahldokumenten nur Fallzahlreferenzen. Trigger: Bericht vorbereiten, SAP schreiben, Protokoll, Fallzahlbericht, Referenzen, Literaturverzeichnis, zitieren, Quellen, bib-Datei, Fallzahl zitieren, Poweranalyse Literatur, Auswertung zitieren."
category: statistics
metadata:
  skill-author: chacikel
  verified: "2026-10-07 — Zeitschriftenartikel über PubMed (bzw. Crossref) geprüft, inkl. Retraction-Status; Bücher/Leitlinien nicht"
---

# Statistische Referenzen (Fallzahl + Auswertung)

Liefert verifizierte, zitierfähige Quellen für statistische Dokumente. Ergänzt
`stat_sample-size-planning_cha` (Berechnung) und `stat_tabelle_erstellen_cha` (Tabellen).

## Dateien

- `references/referenzliste.md` enthält Teil I **Fallzahlschätzung** (Gruppen A–F, inkl. C8
  Skalen/Reliabilität) und Teil II **Statistische Auswertung** (Gruppen G–L). Jeder Eintrag hat
  APA 7, DOI, BibTeX-Schlüssel und Einsatzzweck. Am Ende stehen die **bewusst ausgeschlossenen
  Quellen** mit Begründung. **Vor der Auswahl lesen.**
- `assets/statistik_referenzen.bib` enthält alle Einträge als BibTeX.

## Zitierregel (verbindlich)

| Dokumenttyp | Fallzahl (Teil I) | Auswertung (Teil II) |
|---|---|---|
| **Nur Fallzahl** (Fallzahlbericht, Fallzahlabschnitt im Tierversuchsantrag, Power-Memo) | **ca. 3** | **keine** |
| **Fallzahl + Auswertung** (SAP, Protokoll, statistischer Bericht mit Ergebnissen) | **ca. 3** | **mind. 3** |
| **Nur Auswertung** (Ergebnisbericht ohne Fallzahlteil) | keine | **mind. 3** |

- Jede Referenz braucht eine konkrete Funktion im Text (Formel, Methode, Designbegründung,
  Berichtsstandard). Keine Alibi-Zitate.
- Die Auswahl richtet sich nach Design und Methode des Dokuments (siehe Kernsets). Eine Quelle,
  die beides abdeckt (z. B. `festing2002`, `sim2005`), zählt nur für **eine** Seite.
- Vor dem Rendern die Auswahl dem Nutzer kurz in einer Zeile pro Quelle nennen.

## Kernsets — Teil I Fallzahl

| Studientyp | Kernreferenzen |
|---|---|
| Tierversuch, ANOVA/Cohen's f | `cohen1988`, `festing2002`, `dell2002` (+ `festing2018`, `perciedusert2020`) |
| … Block-/faktorielles Design | + `festing2014`, `shaw2002`, `lazic2018` |
| … Plausibilitätsprüfung | `arifin2017` ⚠, `browne1995` |
| RCT Überlegenheit | `julious2004`, `flight2016sup`, `chow2017` |
| RCT Nicht-Unterlegenheit/Äquivalenz | `julious2004`, `flight2016ni`, `farrington1990` (binär) bzw. `schuirmann1987` (TOST), `ema2005ni` |
| Überlebenszeit | `schoenfeld1983`; geclustert/gepaart `gangnon2004` |
| Baseline-Kovariate/wiederholte Messungen | `borm2007`, `frison1992` |
| Prävalenz/Querschnitt | `lwanga1991`, `arya2012` |
| Regression/Prädiktion | `riley2020`, `hsieh1998`, `green1991` |
| Diagnostik | `buderer1996`, `hajiantilaki2014` |
| Skalenvalidierung/Faktorenanalyse | `guadagnoli1988`, `anthoine2014`, `bonett2002` (α) |
| Reliabilität (κ) | `sim2005` |

## Kernsets — Teil II Auswertung

| Analyse | Kernreferenzen |
|---|---|
| Allgemein (t-Test, ANOVA, Regression) | `field2013` (SPSS) bzw. `field2010sas` (SAS), `landau2004` |
| Tierversuch | `festing2002`, `field2013`, `karp2021` |
| Klinische Studie | `chen2017`, `machin2004`, `iche9` |
| Randomisierung | `vickers2006`, `kim2014` ⚠ |
| Crossover | `senn2002` |
| Überlebenszeit | `iacobelli2013`; gematcht/geclustert `jung1999` |
| Methodenvergleich | `bland1986` |
| Interne Konsistenz | `bland1997`, `tavakol2011` |
| Interrater-Reliabilität | `sim2005` |
| Skalenentwicklung | `hinkin1997`, `guadagnoli1988` |
| Stetige Variablen nicht dichotomisieren | `altman2006`, `maccallum2002` |
| Populationsraten | `ahmad2001`, `wassertheilsmoller2004` |
| Software R | `citation()` bzw. `citation("paket")` direkt aus R |

## Einbindung

**R Markdown:**
```yaml
bibliography: statistik_referenzen.bib
csl: apa.csl   # APA 7; https://github.com/citation-style-language/styles
```
Zuerst die `.bib` in den Berichtsordner kopieren. Im Text mit `[@festing2002; @dell2002]` zitieren.
Pandoc listet nur die zitierten Einträge. Ohne `.csl` wird Chicago verwendet.

**Word/Markdown:** die APA-Zeile aus `referenzliste.md` übernehmen.

## Regeln

- APA 7, keine Preprints, höherrangige Zeitschriften bevorzugen, OA-Version verlinken.
- ⚠-Quellen sind hoch zitiert, stehen aber in Zeitschriften niedrigeren Rangs. Sie werden nur
  ergänzend zu einer Kernreferenz derselben Aussage zitiert.
- Bücher, Leitlinien und Gruppe G sind nicht PubMed-geprüft, daher Auflage und Jahr
  kontrollieren. Für `schoenfeld1983`, `dupont1988` und `sim2005` gibt es keine DOI in PubMed:
  nur die PMID verwenden und keine DOI erfinden.
- **Liste erweitern:** zuerst in PubMed prüfen (`lookup_article_by_citation`, danach
  `get_article_metadata`). **Den Retraction-Status prüfen** (`article_types` enthält „Retracted
  Publication" → ausschließen). Nicht in PubMed indexierte Artikel über die Crossref-API prüfen.
  Predatory-Verlage (z. B. OMICS) ausschließen. Danach den Eintrag in `referenzliste.md` **und**
  in der `.bib` ergänzen und `metadata.verified` aktualisieren.
- Keine Kunden- oder Studiennamen in diesen Skill schreiben.
