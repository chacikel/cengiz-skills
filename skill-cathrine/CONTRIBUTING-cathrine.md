# Contributing to `skill-cathrine`

Thank you for wanting to contribute to **Cathrine**! 🙏  
Every contribution — whether bug report, feature request, or code — is welcome.

---

## 📋 How you can contribute

### 1. **Report a bug**

Found an error? Open an [Issue](../../issues) with:

**Title:** Brief summary  
**Description:**
```
### Description
Cathrine corrects [what happens] to [what's not right].

### Expected behavior
Cathrine should instead [provide the correct correction].

### Example
User: "I have went to the store."
Current output: [wrong]
Expected output: [correct]

### Environment
- Claude: [Web/Desktop/Code]
- Operating system: [macOS/Windows/Linux]
```

### 2. **Request a feature**

Have an idea? Open an issue with label `enhancement`:

```
### Feature description
Cathrine should support [new functionality].

### Why?
This would [benefit], because [reason].

### Example
[Concrete example of how the feature would work]
```

### 3. **Code contribution (Pull Request)**

Want to make changes yourself?

#### Step 1: Fork and clone

```bash
# Your fork
git clone https://github.com/YOUR_USERNAME/skill-cathrine.git
cd skill-cathrine
```

#### Step 2: Create a branch

```bash
git checkout -b feature/your-feature-name
```

**Naming convention:**
- `feature/xyz` — new functionality
- `fix/xyz` — bug fix
- `docs/xyz` — documentation
- `refactor/xyz` — code restructuring

#### Step 3: Make changes

**What you can change:**
- ✅ `SKILL-cathrine.md` — main skill definition
- ✅ `README-cathrine.md` — documentation
- ✅ `docs/` — additional docs
- ✅ `examples/` — examples
- ✅ Tests/validation scripts

**What NOT to change without an issue:**
- ❌ Major architectural changes
- ❌ License changes
- ❌ Feature removals

#### Step 4: Commit

```bash
git add .
git commit -m "Description: What changed and why"
```

**Commit message format:**
```
feature: Add new rule for irregular verbs

- Expands error recognition for participles
- Adds tests for "bring", "take", "give"
- Updates error-log.md examples
```

#### Step 5: Push and open Pull Request

```bash
git push origin feature/your-feature-name
```

Go to [GitHub Pull Requests](../../pulls) and open a PR:

**PR title:** `feature: [Brief description]`  
**PR description:**
```markdown
## Description
What changed and why?

## Related issues
Closes #123

## Changes
- [ ] SKILL-cathrine.md updated
- [ ] README updated
- [ ] Documentation updated
- [ ] Tests/examples added

## How to test?
[Steps to verify the change]
```

---

## 🧪 Test before Pull Request

### Validate SKILL-cathrine.md

Check that your changes don't break formatting:

```bash
# If available: npm run validate-skill
# Otherwise: Manual check:
# - YAML frontmatter correct?
# - Markdown syntax valid?
# - All examples readable?
```

### Test manually

1. Copy updated `SKILL-cathrine.md` to your Claude instance
2. Test with multiple example sentences
3. Verify error categorization is correct

---

## 📝 Code style & guidelines

### Language
- **SKILL-cathrine.md & Docs:** English
- **Code comments:** English or German (consistent)
- **Issue/PR titles:** English or German (doesn't matter)

### Formatting (Markdown)
```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**Bold** for important
*Italic* for emphasis
`Code` for inline code

> Quote/Note
```

### Examples in SKILL-cathrine.md
Always use the format:

```
User: "..."

**Corrected Version:** "..."
**What was wrong:** ...
**Origin:** ... (optional)
**Register:** ... (optional)
**Memory aid:** ... (optional)
```

---

## ❓ Questions?

Have questions while contributing?

- **Search issues:** Your question may already be answered
- **Open discussions:** If GitHub Discussions enabled
- **Email:** [Optional: contact address]

---

## 🎯 Code of conduct

We want a friendly, respectful community.

**Please note:**
- ✅ Be polite and constructive
- ✅ Respect different opinions
- ❌ No insults, racism, sexism
- ❌ No spam or commercial advertising

---

## 🏆 Recognition

All contributions are appreciated:
- Your name in `CHANGELOG.md`
- Mention in next release
- GitHub Contributor Badge

---

**Thank you for your support! 💪**

Last updated: January 2026
