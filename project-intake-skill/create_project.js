#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');

// CONFIG
const BASE_PATH = process.env.HOME || '/Users/cengizhan';
const CONSULTING_PATH = path.join(BASE_PATH, 'StatistischeBeratung');

function getNextProjectId() {
  const year = new Date().getFullYear();
  const yearPath = path.join(CONSULTING_PATH, year.toString());
  
  if (!fs.existsSync(yearPath)) {
    return 'SK001';
  }
  
  const dirs = fs.readdirSync(yearPath);
  const ids = dirs
    .map(d => {
      const match = d.match(/_SK(\d+)_/);
      return match ? parseInt(match[1], 10) : 0;
    })
    .sort((a, b) => b - a);
  
  const nextId = (ids[0] || 0) + 1;
  return `SK${String(nextId).padStart(3, '0')}`;
}

function createFolderStructure(basePath) {
  const folders = [
    '00_ADMINISTRATIVE',
    '01_AUFTRAG',
    '02_ROHDATEN',
    '03_ANALYSE',
    '03_ANALYSE/03a_DataCleaning',
    '03_ANALYSE/03b_DescriptiveStats',
    '03_ANALYSE/03c_PrimaryAnalysis',
    '03_ANALYSE/03d_SensitivityAnalysis',
    '03_ANALYSE/03e_RegulatoryFiles',
    '04_BERICHTE',
    '04_BERICHTE/Sponsor_Feedback',
    '05_RECHNUNG'
  ];
  
  folders.forEach(folder => {
    const folderPath = path.join(basePath, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  });
}

function generateMetadata(projectId, projectName, client, contactPerson, email, phone, startDate, language, endpointType, studyType) {
  return {
    project_id: projectId,
    project_name: projectName,
    project_folder: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}_${projectId}_${projectName}`,
    client: client,
    contact_person: contactPerson || 'TBD',
    email: email || 'TBD',
    phone: phone || 'TBD',
    start_date: startDate,
    language: language || 'Deutsch',
    endpoint_type: endpointType || 'TBD',
    study_type: studyType || 'TBD',
    dropout_assumption: 0.20,
    regulatory_framework: ['ICH E9', 'FDA Guidance', 'EMA Guidance'],
    created_at: new Date().toISOString(),
    created_by: 'stat_project-intake_cha v1.0',
    status: 'intake_complete',
    version: '1.0'
  };
}

function createContactFile(basePath, projectId, projectName, client, contactPerson, email, phone) {
  const content = `=== PROJEKTKONTAKT ===

Projekt: ${projectId} - ${projectName}
Start: ${new Date().toISOString().split('T')[0]}
Status: Intake abgeschlossen

--- SPONSOR/CLIENT ---
Name: ${client}
Kontaktperson: ${contactPerson || 'TBD'}
Email: ${email || 'TBD'}
Phone: ${phone || 'TBD'}

--- STATISTIKER ---
Name: Prof. Dr. Cengizhan Acikel
Email: cengizhanacikel@mac
Phone: TBD

--- MEETING NOTES ---
[Hier später Notizen hinzufügen]
`;
  
  fs.writeFileSync(path.join(basePath, '00_ADMINISTRATIVE', 'Kontakt.txt'), content, 'utf-8');
}

function createAnalysisPlanDraft(basePath, projectId, projectName, endpointType, studyType) {
  const content = `# Analyse Plan — ${projectId} ${projectName}

## 1. Objective
[Nutzer ausfüllen]

## 2. Study Design
- Type: ${studyType || 'TBD'}
- Endpoint: ${endpointType || 'TBD'}
- Allocation: 1:1 (default)

## 3. Sample Size
- Berechnung erforderlich → stat_sample-size-planning_cha
- Dropout Correction: 20% (K2)

## 4. Statistical Analysis

### 4.1 Primary Analysis
[Nutzer definiert]

### 4.2 Secondary Analysis
[Nutzer definiert]

### 4.3 Sensitivity Analysis (K4)
- Grid-Parameter: [Zu definieren]

## 5. Regulatory References (K3)
- ICH E9 (1998): Statistical Principles for Clinical Trials
- ICH E9(R1) (2019): Estimands & Sensitivity Analysis
- FDA Guidance: [Je nach Endpoint]

## 6. Data Safety
- Blinding: [Ja/Nein]
- Interim Analysis: [Ja/Nein]

---
Generiert von: stat_project-intake_cha v1.0
`;
  
  fs.writeFileSync(path.join(basePath, '01_AUFTRAG', `Analysis_Plan_Draft_${projectId}.md`), content, 'utf-8');
}

function createProjectLog(basePath, projectId, projectName) {
  const content = `# PROJECT LOG — ${projectId} ${projectName}

## Timeline

| Datum | Aktion | Status | Anmerkungen |
|---|---|---|---|
| ${new Date().toISOString().split('T')[0]} | Projekt erstellt (Intake) | ✅ Complete | stat_project-intake_cha v1.0 |
| ${new Date().toISOString().split('T')[0]} | Ordnerstruktur generiert | ✅ Complete | Alle Templates vorbereitet |
| TBD | Angebot vorbereitet | ⏳ Pending | |

---
`;
  
  fs.writeFileSync(path.join(basePath, 'PROJECT_LOG.md'), content, 'utf-8');
}

function createReadmeFiles(basePath) {
  const readmes = {
    '00_ADMINISTRATIVE': '# Administrative Documents\n\nHier speichern: Angebot, Vertrag, Kontaktdaten\n',
    '01_AUFTRAG': '# Auftrag / Statement of Work\n\nDefinierte Anforderungen und Analyse-Plan.\n',
    '02_ROHDATEN': '# Raw Data\n\nOrginal-Daten (unmodifiziert).\n',
    '03_ANALYSE/03a_DataCleaning': '# Data Cleaning\n\nScripts: R-Dateien für Daten-Bereinigung.\n',
    '03_ANALYSE/03b_DescriptiveStats': '# Descriptive Statistics\n\nRMarkdown-Template für deskriptive Statistik.\n',
    '03_ANALYSE/03c_PrimaryAnalysis': '# Primary Analysis\n\nHauptanalyse nach Analysis Plan.\n',
    '03_ANALYSE/03d_SensitivityAnalysis': '# Sensitivity Analysis (K4)\n\nSensitivity Grids und Parameter-Tests.\n',
    '03_ANALYSE/03e_RegulatoryFiles': '# Regulatory Files (K3)\n\nICH E9, FDA Guidance, Regulatory Correspondence.\n',
    '04_BERICHTE': '# Berichte\n\nVersionierungsschema: v1, v2, ..., FINAL\n',
    '05_RECHNUNG': '# Rechnungen\n\nRechnung_SKnnn_v1.xlsx → FINAL\n'
  };
  
  for (const [folder, content] of Object.entries(readmes)) {
    const filePath = path.join(basePath, folder, 'README.md');
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  let projectName = null;
  let client = null;
  let startDate = null;
  let language = 'Deutsch';
  let contactPerson = null;
  let email = null;
  let phone = null;
  let endpointType = null;
  let studyType = null;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name' && args[i + 1]) projectName = args[++i];
    if (args[i] === '--client' && args[i + 1]) client = args[++i];
    if (args[i] === '--start_date' && args[i + 1]) startDate = args[++i];
    if (args[i] === '--language' && args[i + 1]) language = args[++i];
    if (args[i] === '--contact' && args[i + 1]) contactPerson = args[++i];
    if (args[i] === '--email' && args[i + 1]) email = args[++i];
    if (args[i] === '--phone' && args[i + 1]) phone = args[++i];
    if (args[i] === '--endpoint' && args[i + 1]) endpointType = args[++i];
    if (args[i] === '--study_type' && args[i + 1]) studyType = args[++i];
  }
  
  if (!projectName || !client || !startDate) {
    console.error('❌ Error: Required parameters missing.');
    process.exit(1);
  }
  
  try {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const projectId = getNextProjectId();
    const projectFolder = `${year}-${month}_${projectId}_${projectName.replace(/\s+/g, '-')}`;
    const basePath = path.join(CONSULTING_PATH, year.toString(), projectFolder);
    
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
      createFolderStructure(basePath);
      console.log(`✅ Folder structure created`);
    }
    
    const metadata = generateMetadata(projectId, projectName, client, contactPerson, email, phone, startDate, language, endpointType, studyType);
    fs.writeFileSync(path.join(basePath, '00_ADMINISTRATIVE', 'PROJECT_METADATA.json'), JSON.stringify(metadata, null, 2), 'utf-8');
    console.log(`✅ PROJECT_METADATA.json created`);
    
    createContactFile(basePath, projectId, projectName, client, contactPerson, email, phone);
    console.log(`✅ Kontakt.txt created`);
    
    createAnalysisPlanDraft(basePath, projectId, projectName, endpointType, studyType);
    console.log(`✅ Analysis_Plan_Draft.md created`);
    
    createProjectLog(basePath, projectId, projectName);
    console.log(`✅ PROJECT_LOG.md created`);
    
    createReadmeFiles(basePath);
    console.log(`✅ README.md files created`);
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ PROJEKT ERFOLGREICH ERSTELLT\n`);
    console.log(`📁 Ordner: ${projectFolder}`);
    console.log(`📍 Pfad: ${basePath}\n`);
    console.log(`Projekt-ID: ${projectId}`);
    console.log(`Client: ${client}\n`);
    console.log(`✅ Ordnerstruktur erstellt`);
    console.log(`✅ Kontakt.txt ausgefüllt`);
    console.log(`✅ Analysis_Plan_Draft.md erstellt`);
    console.log(`✅ PROJECT_LOG.md initialisiert\n`);
    console.log(`🚀 Nächste Schritte:`);
    console.log(`1. Öffne: 00_ADMINISTRATIVE/Kontakt.txt`);
    console.log(`2. Bearbeite Kontakt-Daten`);
    console.log(`3. Generiere Analyse-Plan`);
    console.log(`${'='.repeat(60)}\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
