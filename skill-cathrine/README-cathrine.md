# Cathrine — English Grammar Correction Skill for Claude

**Cathrine** is a Claude skill for precise, helpful corrections of English texts. She corrects typos, grammar, and semantics — and explains word origins and register along the way.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Active](https://img.shields.io/badge/Status-Active-green.svg)
![Language: English](https://img.shields.io/badge/Language-English-blue.svg)

---

## 🎯 What does Cathrine do?

Cathrine corrects every faulty sentence in **three steps**:

| Step | Example |
|------|---------|
| **1. Correct** | "I have went to the store" → "I went to the store" |
| **2. Explain what was wrong** | Past tense of "go" is "went", not "have went" |
| **3. Add context** | Word origin, register (formal/colloquial), memory aid |

### Error types Cathrine recognizes

- **Typos:** "teh" → "the", "recieve" → "receive"
- **Grammar:** Subject-verb agreement, tense, articles, prepositions, word order
- **Semantics:** Wrong word choice, unclear phrasing, register mismatch

### Special features

✅ **Learning feature:** Cathrine remembers your frequent errors for 4 weeks  
✅ **Multilingual:** Translates German/Turkish texts, then gives feedback in English  
✅ **Concise:** Short explanations, no lengthy monologues  
✅ **Kind:** Corrects the writing, not the person

---

## 📦 Installation

### For Claude.ai users (easy)

1. Go to [claude.ai](https://claude.ai)
2. Open your **Profile** → **Skills**
3. Click **"Add Skill"** → choose **"Custom Skill"**
4. Copy the content of `SKILL-cathrine.md` into the text field
5. Save and start a new conversation

### For Claude Code / Desktop (advanced)

If you use Claude Code or Desktop, copy the skill definition to your `.claude/skills/` directory:

```bash
mkdir -p ~/.claude/skills/cathrine
cp SKILL-cathrine.md ~/.claude/skills/cathrine/SKILL.md
```

### Error log (optional)

Cathrine automatically creates an `error-log.md` at:  
`~/.claude/skills/cathrine/error-log.md`

You can customize this location by editing SKILL-cathrine.md.

---

## 🚀 Usage

### Normal correction (automatic)

Just write a sentence with errors:

**You:** "I have went to the store yesterday."

**Cathrine:**
> **Corrected Version:** I went to the store yesterday.  
> **What was wrong:** "have went" is incorrect — the past tense of "go" is "went", not "have went".  
> **Origin:** "Go" comes from Old English "gān", related to German "gehen". It's one of the most irregular verbs in English.  
> **Memory aid:** Compare: "I went home" (past) vs. "I have gone home" (present perfect, already there). Simple past is correct for a completed action at a specific time.

### Learning mode: Analyze frequent errors

**You:** "Cathrine, teach me something."

**Cathrine:**
> Shows your 3 most frequent errors from the last 4 weeks with practice examples.

### Foreign language translation

**You (German):** "Ich habe gestern das Auto gebringt."

**Cathrine:**
> **Translation:** I brought the car yesterday.  
> **What was wrong (in original):** "gebringt" is not the past participle of "bringen" — the irregular verb forms "gebracht".

---

## 📋 Output format

Cathrine always gives corrections in this order:

```
1. Corrected Version (required)
2. What was wrong (required, 1–2 bullet points)
3. Origin (optional, only if interesting)
4. Register (optional, only if relevant)
5. Memory aid (optional, one short example)
```

Each point max 1–2 sentences. If nothing useful to say → **omit it**.

---

## 🔧 Error log — How it works

Cathrine automatically saves every error in a local file:

```
~/.claude/skills/cathrine/error-log.md
```

**Format per line:**
```
- 2026-01-15 | Agreement | "she don't" → "she doesn't"
- 2026-01-14 | Article | "I have went" → "I went"
```

**Automatic cleanup:** Entries older than 4 weeks are deleted on the next write.

---

## 🎓 Trigger conditions

Cathrine corrects:
- ✅ Complete sentences in English
- ✅ Free-typed answers in follow-up questions
- ❌ Single-word answers
- ❌ Code snippets, file paths, Bash commands
- ❌ Configuration syntax

---

## 🌍 Language support

| Language | Status | Details |
|----------|--------|---------|
| **English** | ✅ Primary | All features fully available |
| **Deutsch** | ✅ Translation | German texts are translated into English, then corrected |
| **Türkçe** | ✅ Translation | Turkish texts are translated into English, then corrected |
| **Other languages** | ❌ No | Not supported |

---

## 📖 Error types: Detailed overview

### Typos
```
teh → the
recieve → receive
occured → occurred
```

### Grammar
- **Agreement:** Subject-verb ("she don't" → "she doesn't")
- **Tense:** Present, past, present perfect, past perfect
- **Articles:** a/an/the
- **Prepositions:** in/on/at/by/with + correct usage
- **Word order:** Verb position, adverb placement

### Semantics
- Wrong word choice (synonym but incorrect context)
- Unclear phrasing
- Register mismatch (too formal/too casual)

---

## 💡 Tips for best results

| Tip | Example |
|-----|---------|
| **Write complete sentences** | ✅ "I have went." (corrected) |
| | ❌ "Went? Help?" (ignored) |
| **Don't ask to correct code** | Write code separately or in code blocks |
| **German/Turkish OK** | Cathrine translates automatically into English |
| **Ask about frequent errors** | "Cathrine, what do I get wrong often?" |

---

## 🐛 Known limitations

- ❌ No dialect corrections (only standard English)
- ❌ No style improvements (only grammar/typos)
- ❌ No texts longer than ~500 words (too intensive)
- ❌ No spelling variants (British vs. American, old vs. new)

---

## 🤝 Contributing

Found an improvement or bug?

### GitHub Issues

Open an [Issue](../../issues) with:
- **Title:** Brief summary
- **Description:** What's the problem?
- **Example:** A concrete sentence that was corrected incorrectly

Example issue:
```
Title: Preposition "in" recognized incorrectly
Description: Cathrine corrects "I am in the house" to "I am in the house",
but this is already correct.
```

### Feature Requests

Similar to issues, but with label `enhancement`:

```
Title: Feature: British English variant
Description: Cathrine should recognize British spelling (colour, favour, etc.)
```

### Code contributions (Pull Requests)

1. **Fork** this repository
2. **Create branch:** `git checkout -b feature/your-feature`
3. **Make changes** → SKILL-cathrine.md or docs/
4. **Commit:** `git commit -m "Description of change"`
5. **Push:** `git push origin feature/your-feature`
6. **Open Pull Request** with description

---

## 📝 License

This project is licensed under the **MIT License**.

```
Copyright 2026 Prof. Dr. Cengizhan Acikel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

See `LICENSE` for full text.

---

## 📬 Questions?

- **Documentation:** See `docs/` folder
- **FAQ:** See `docs/faq.md`
- **Issues:** [GitHub Issues](../../issues)
- **Email:** (optional: add contact address)

---

## 🙏 Acknowledgments

- **Anthropic Claude** — for the skill infrastructure
- **User feedback** — for improvement suggestions

---

**Happy writing! ✍️**

Last updated: January 2026
