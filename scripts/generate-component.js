#!/usr/bin/env node

/**
 * Script to generate component folder structure
 * Usage: node scripts/generate-component.js <component-route>
 * Example: node scripts/generate-component.js /forms/autocomplete
 */

const fs = require('fs');
const path = require('path');

const componentRoute = process.argv[2];

if (!componentRoute) {
  console.error('Usage: node scripts/generate-component.js <component-route>');
  console.error('Example: node scripts/generate-component.js /forms/autocomplete');
  process.exit(1);
}

// Convert route to folder structure
function routeToFolderPath(route) {
  return route.startsWith('/') ? route.substring(1) : route;
}

function routeToComponentName(route) {
  const parts = routeToFolderPath(route).split('/');
  return parts[parts.length - 1];
}

function routeToPascalCase(route) {
  const kebab = routeToComponentName(route);
  return kebab
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const folderPath = routeToFolderPath(componentRoute);
const componentName = routeToPascalCase(componentRoute);
const kebabName = routeToComponentName(componentRoute);
const categoryFolder = folderPath.split('/')[0];
const componentFolder = folderPath.split('/').slice(1).join('/');

const basePath = path.join(__dirname, '..', 'src', 'app', 'pages', 'components', categoryFolder, componentFolder);

// Create directories
const dirs = [
  basePath,
  path.join(basePath, `${kebabName}-home`),
  path.join(basePath, `${kebabName}-overview`),
  path.join(basePath, `${kebabName}-basic`),
  path.join(basePath, `${kebabName}-advanced`),
  path.join(basePath, `${kebabName}-styling`),
];

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate routes file
const routesContent = `import { Routes } from '@angular/router';

export const ${kebabName.replace(/-/g, '')}Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./${kebabName}-home/${kebabName}-home.component').then((m) => m.${componentName}HomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./${kebabName}-overview/${kebabName}-overview.component').then(
        (m) => m.${componentName}OverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./${kebabName}-basic/${kebabName}-basic.component').then(
        (m) => m.${componentName}BasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./${kebabName}-advanced/${kebabName}-advanced.component').then(
        (m) => m.${componentName}AdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./${kebabName}-styling/${kebabName}-styling.component').then(
        (m) => m.${componentName}StylingComponent
      ),
  },
];
`;

const routesFile = path.join(basePath, `${kebabName}-routes.ts`);
if (!fs.existsSync(routesFile)) {
  fs.writeFileSync(routesFile, routesContent);
  console.log(`Created file: ${routesFile}`);
}

// Generate component files
const components = [
  {
    name: 'home',
    template: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-${kebabName}-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: \\\`
    <div class="prose max-w-none">
      <h1>${componentName} Component</h1>
      <p>Welcome to the ${componentName} component documentation.</p>
      
      <nav class="mt-8 flex gap-4 border-b border-gray-200">
        <a routerLink="overview" routerLinkActive="border-b-2 border-blue-500" class="px-4 py-2">Overview</a>
        <a routerLink="basic" routerLinkActive="border-b-2 border-blue-500" class="px-4 py-2">Basic</a>
        <a routerLink="advanced" routerLinkActive="border-b-2 border-blue-500" class="px-4 py-2">Advanced</a>
        <a routerLink="styling" routerLinkActive="border-b-2 border-blue-500" class="px-4 py-2">Styling</a>
      </nav>

      <div class="mt-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  \\\`,
})
export class ${componentName}HomeComponent {}
`,
  },
  {
    name: 'overview',
    template: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-overview',
  standalone: true,
  imports: [CommonModule],
  template: \\\`
    <div class="prose max-w-none">
      <h2>Overview</h2>
      <p>This is the overview page for the ${componentName} component.</p>
      <p>Replace this content with actual component documentation, API reference, and usage examples.</p>
    </div>
  \\\`,
})
export class ${componentName}OverviewComponent {}
`,
  },
  {
    name: 'basic',
    template: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-basic',
  standalone: true,
  imports: [CommonModule],
  template: \\\`
    <div class="prose max-w-none">
      <h2>Basic Usage</h2>
      <p>This is the basic usage example page for the ${componentName} component.</p>
      <p>Replace this content with actual basic implementation examples.</p>
    </div>
  \\\`,
})
export class ${componentName}BasicComponent {}
`,
  },
  {
    name: 'advanced',
    template: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-advanced',
  standalone: true,
  imports: [CommonModule],
  template: \\\`
    <div class="prose max-w-none">
      <h2>Advanced Usage</h2>
      <p>This is the advanced usage example page for the ${componentName} component.</p>
      <p>Replace this content with actual advanced implementation examples.</p>
    </div>
  \\\`,
})
export class ${componentName}AdvancedComponent {}
`,
  },
  {
    name: 'styling',
    template: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-styling',
  standalone: true,
  imports: [CommonModule],
  template: \\\`
    <div class="prose max-w-none">
      <h2>Styling Examples</h2>
      <p>This is the styling examples page for the ${componentName} component.</p>
      <p>Replace this content with actual styling variations and customization examples.</p>
    </div>
  \\\`,
})
export class ${componentName}StylingComponent {}
`,
  },
];

components.forEach((comp) => {
  const filePath = path.join(basePath, `${kebabName}-${comp.name}`, `${kebabName}-${comp.name}.component.ts`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, comp.template);
    console.log(`Created file: ${filePath}`);
  }
});

console.log(`\n✅ Component structure generated for: ${componentRoute}`);
console.log(`\nNext steps:`);
console.log(`1. Update app.routes.ts to import and use ${kebabName.replace(/-/g, '')}Routes`);
console.log(`2. Add your component implementation to the generated files`);
