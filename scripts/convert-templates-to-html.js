#!/usr/bin/env node

/**
 * Script to convert inline templates to separate HTML files
 * Usage: node scripts/convert-templates-to-html.js
 */

const fs = require('fs');
const path = require('path');

function convertComponentFile(componentPath) {
  const content = fs.readFileSync(componentPath, 'utf8');
  
  // Check if it already uses templateUrl
  if (content.includes('templateUrl:')) {
    return false; // Already converted
  }
  
  // Extract template content - handle both regular and escaped backticks
  const templateMatch = content.match(/template:\s*\\?`([\s\S]*?)\\?`/);
  if (!templateMatch) {
    return false; // No template found
  }
  
  // Remove escape characters from template content
  let templateContent = templateMatch[1];
  templateContent = templateContent.replace(/\\`/g, '`');
  templateContent = templateContent.replace(/\\\$/g, '$');
  
  const htmlPath = componentPath.replace('.component.ts', '.component.html');
  
  // Create HTML file
  fs.writeFileSync(htmlPath, templateContent);
  
  // Update component file - match both regular and escaped backticks
  const updatedContent = content.replace(
    /template:\s*\\?`[\s\S]*?\\?`/,
    `templateUrl: './${path.basename(htmlPath)}'`
  );
  
  fs.writeFileSync(componentPath, updatedContent);
  
  return true;
}

// Find all component files
const componentsDir = path.join(__dirname, '..', 'src', 'app', 'pages', 'component');

function findComponentFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findComponentFiles(fullPath));
    } else if (entry.name.endsWith('.component.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

const componentFiles = findComponentFiles(componentsDir);
let converted = 0;

console.log(`Found ${componentFiles.length} component files to process...\n`);

componentFiles.forEach((file, index) => {
  if (convertComponentFile(file)) {
    converted++;
    const relativePath = path.relative(process.cwd(), file);
    console.log(`✅ [${index + 1}/${componentFiles.length}] Converted ${relativePath}`);
  }
});

console.log(`\n✅ Conversion complete! Converted ${converted} components.`);
