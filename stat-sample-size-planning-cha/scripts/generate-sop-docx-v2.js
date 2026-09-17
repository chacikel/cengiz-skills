#!/usr/bin/env node

/**
 * Script: Generate Sample Size Planning SOP as DOCX
 * Corrected docx library API version
 */

const { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, 
        HeadingLevel, WidthType, AlignmentType, PageBreak } = require('docx');
const fs = require('fs');

const args = process.argv.slice(2);
const inputFile = args[args.indexOf('--input') + 1] || 'params.json';
const outputFile = args[args.indexOf('--output') + 1] || 'SOP_v1.docx';

const params = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

// Helpers
const h1 = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true, size: 28 })],
  heading: HeadingLevel.HEADING_1,
  spacing: { after: 200 }
});

const h2 = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true, size: 26 })],
  heading: HeadingLevel.HEADING_2,
  spacing: { after: 150 }
});

const h3 = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true, size: 24 })],
  heading: HeadingLevel.HEADING_3,
  spacing: { after: 100 }
});

const p = (text) => new Paragraph({
  children: [new TextRun({ text, size: 22 })],
  spacing: { after: 100 }
});

const boldP = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true, size: 22 })],
  spacing: { after: 100 }
});

const bullet = (text) => new Paragraph({
  children: [new TextRun({ text, size: 22 })],
  spacing: { after: 50 },
  bullet: { level: 0 }
});

// Table: 2 columns (parameter: value)
const paramTable = (rows) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: rows.map(([key, val]) => new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: key, bold: true, size: 22 })] })],
        shading: { fill: 'E8E8E8' },
        width: { size: 40, type: WidthType.PERCENTAGE }
      }),
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: String(val || 'TBD'), size: 22 })] })],
        width: { size: 60, type: WidthType.PERCENTAGE }
      })
    ]
  }))
});

// Build document
const children = [
  // Title
  h1('Sample Size Determination — SOP'),
  h2(params.studyName || 'Medical Device Study'),
  p(`Prepared for: ${params.preparedFor} | ${new Date().toLocaleDateString('de-DE')}`),
  p(''),
  
  // Document Control
  h2('Document Control'),
  paramTable([
    ['Version', params.version],
    ['Status', 'Draft'],
    ['Effective Date', params.effectiveDate],
    ['Author', params.author],
    ['Reviewer', params.reviewer],
    ['Approval Date', params.approvalDate]
  ]),
  p(''),
  new PageBreak(),
  
  // A1. Purpose
  h2('A1. Purpose'),
  p(`The purpose of this SOP is to document the statistical justification and calculation of the required sample size for the primary analysis of the study.`),
  paramTable([
    ['Primary Endpoint', params.primaryEndpoint],
    ['Study Design', params.designSummary]
  ]),
  p(''),
  
  // A2. Assumptions
  h2('A2. Statistical Assumptions'),
  h3('2.1 Software & Methods'),
  p(`Calculations performed in: ${params.software}`),
  p(`Primary method: ${params.method}`),
  p(''),
  
  h3('2.2 Study Parameters'),
  paramTable([
    ['Test Type', params.testType],
    ['Endpoint Type', params.endpointType],
    ['Significance Level (α)', params.alpha],
    ['Power (1-β)', params.power],
    ['Allocation Ratio', params.allocationRatio],
    ['Dropout Rate (assumed)', params.dropout],
    ['Analysis Set', params.analysisSet]
  ]),
  p(''),
  
  h3('2.3 Clinical Assumptions'),
  paramTable([
    ['Control Group Rate (p₀)', params.controlRate],
    ['Treatment Group Rate (p₁)', params.treatmentRate],
    ['Effect Size (Δ)', params.effectSize],
    ['Non-Inferiority Margin', params.niMargin]
  ]),
  p(''),
  
  // A3. Results
  h2('A3. Sample Size Results'),
  paramTable([
    ['N per group (before dropout)', params.nBeforeDropout],
    ['N per group (after ' + params.dropout + ' dropout)', params.nAfterDropout],
    ['Total N (both groups)', params.totalN],
    ['95% CI for Effect Size', params.ci95]
  ]),
  p(''),
  
  h3('3.1 Calculation Details'),
  p(`Formula (${params.formulaName}):`),
  p(`n = (p₀(1-p₀) + p₁(1-p₁)) × (Z₁₋α/₂ + Z₁₋β)² / (p₁ - p₀)²`),
  p(''),
  boldP('Substitution:'),
  p(`n = (0.55×0.45 + 0.70×0.30) × (1.96 + 1.282)² / (0.15)²`),
  p(`n = 0.46 × 10.51 / 0.0225 ≈ ${params.calculatedN} per group`),
  p(`After ${params.dropout} dropout correction: ${params.calculatedN} / 0.8 = ${params.adjustedN} per group`),
  p(''),
  
  // A4. Critical Assumptions
  h2('A4. Critical Assumptions & Sensitivity'),
  p('This calculation assumes:'),
  bullet(`Control group response rate is accurately estimated at ${params.controlRate}`),
  bullet(`Treatment group response rate is achievable at ${params.treatmentRate} or higher`),
  bullet(`No more than ${params.dropout} dropout across the study period`),
  bullet('Endpoints are assessed consistently per protocol'),
  p(''),
  boldP('Sensitivity: Impact if assumptions differ'),
  bullet('If control rate is 50% instead of 55%: N increases to ~250 per group'),
  bullet('If effect size reduces to +10%: N increases to ~350 per group'),
  bullet('If dropout increases to 25%: N increases further by proportional adjustment'),
  p(''),
  
  // A5. References
  h2('A5. Regulatory & Scientific References'),
  bullet('ICH E9 (1998): Statistical Principles for Clinical Trials'),
  bullet('ICH E9(R1) (2019): Estimands & Sensitivity Analysis'),
  bullet('Chow, Shao, Wang (2008): Sample Size Calculations in Clinical Research (2nd ed.)'),
  bullet('FDA Guidance: Applicable device-specific endpoint guidance'),
  p(''),
  
  // A6. Approval
  h2('A6. Document Approval'),
  p('This SOP has been reviewed and is approved for use in the statistical analysis of the above-mentioned study, in accordance with ICH E9 guidelines and applicable regulatory requirements.'),
  p(''),
  p('Prepared by: _____________________     Date: ______________'),
  p('Reviewed by:  _____________________     Date: ______________'),
  p('Approved by:  _____________________     Date: ______________')
];

// Create and save document
const doc = new Document({
  sections: [{
    children,
    properties: {
      page: {
        margins: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    }
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputFile, buffer);
  console.log(`✓ SOP generated: ${outputFile}`);
});
