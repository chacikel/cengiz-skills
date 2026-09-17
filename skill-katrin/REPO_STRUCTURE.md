# GitHub-Repository-Struktur für `skill-katrin`

```
skill-katrin/
├── README.md                 # Hauptdokumentation (Deutsch)
├── LICENSE                   # MIT License
├── .gitignore               # Git ignore rules
├── SKILL.md                 # Skill-Definition (direkt aus Claude)
├── CONTRIBUTING.md          # Beitragsrichtlinien
├── CHANGELOG.md             # Versionshistorie
│
├── docs/                    # Zusätzliche Dokumentation
│   ├── installation.md      # Schritt-für-Schritt Installation
│   ├── usage-examples.md    # Anwendungsbeispiele
│   └── faq.md              # Häufig gestellte Fragen
│
├── examples/                # Beispieldateien
│   ├── error-log.md        # Beispiel error-log.md (leer)
│   └── sample-corrections/ # Korrektionsbeispiele
│       ├── example-1.md
│       └── example-2.md
│
├── scripts/                 # Optionale Hilfsskripte
│   └── validate-skill.js   # Validierungsskript (optional)
│
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── workflows/           # GitHub Actions (optional)
        └── tests.yml
```

## Datei-Beschreibungen

| Datei | Zweck |
|-------|-------|
| **README.md** | Haupteinstiegspunkt — was ist katrin, wie installieren, Beispiele |
| **LICENSE** | MIT oder Apache 2.0 (Empfehlung: MIT für Einfachheit) |
| **.gitignore** | Ausschluss von `error-log.md`, `.DS_Store`, `node_modules/` etc. |
| **SKILL.md** | Die Skill-Definition selbst (1:1 aus Claude exportiert) |
| **CONTRIBUTING.md** | Wie können andere beitragen? (Issues, Pull Requests, Feedback) |
| **CHANGELOG.md** | Versionen, neue Features, Bugfixes |
| **docs/installation.md** | Schritt-für-Schritt: Claude-Konto → Skill installieren |
| **docs/usage-examples.md** | Fehlertypen, Ausgabeformate, Beispiele |
| **docs/faq.md** | Häufig gestellte Fragen (z.B. „Warum nur Deutsch?") |
| **examples/error-log.md** | Leeres Template für Nutzer |

## Initialisierung auf GitHub

```bash
# Repository erstellen und pushen
git init
git add .
git commit -m "Initial commit: katrin skill for German language correction"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/skill-katrin.git
git push -u origin main
```

## Zusätzliche GitHub-Features (optional)

- **Topics** hinzufügen: `claude-skill`, `german-language`, `grammar`, `education`
- **GitHub Pages** für Dokumentation aktivieren (Wenn gewünscht)
- **GitHub Actions** für automatische Tests/Validierung
