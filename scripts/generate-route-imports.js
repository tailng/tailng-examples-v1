#!/usr/bin/env node

/**
 * Script to generate route imports for app.routes.ts
 * Usage: node scripts/generate-route-imports.js
 */

const fs = require('fs');
const path = require('path');

// Read component types to get all routes
const componentTypesPath = path.join(__dirname, '..', 'src', 'app', 'shared', 'types', 'component.types.ts');
const componentTypesContent = fs.readFileSync(componentTypesPath, 'utf8');

// Extract all routes from the categories array
const routeMatches = componentTypesContent.matchAll(/route:\s*'([^']+)'/g);
const routes = Array.from(routeMatches).map(match => match[1]);

function routeToComponentName(route) {
  const parts = route.startsWith('/') ? route.substring(1) : route;
  return parts.split('/').pop();
}

function routeToVariableName(route) {
  const kebab = routeToComponentName(route);
  return kebab.replace(/-/g, '') + 'Routes';
}

function routeToImportPath(route) {
  const parts = route.startsWith('/') ? route.substring(1) : route;
  const categoryFolder = parts.split('/')[0];
  const componentFolder = parts.split('/').slice(1).join('/');
  return `./pages/component/${categoryFolder}/${componentFolder}/${routeToComponentName(route)}.routes`;
}

// Generate imports
const imports = routes.map(route => {
  const varName = routeToVariableName(route);
  const importPath = routeToImportPath(route);
  return `import { ${varName} } from '${importPath}';`;
}).join('\n');

// Generate map entries
const mapEntries = routes.map(route => {
  const varName = routeToVariableName(route);
  return `  '${route}': ${varName},`;
}).join('\n');

console.log('// Import component-specific routes');
console.log(imports);
console.log('\n// Map component routes to their route configurations');
console.log('const componentRoutesMap: Record<string, Routes> = {');
console.log(mapEntries);
console.log('};');
