#!/usr/bin/env node

/**
 * Script to generate all component structures from component.types.ts
 * Usage: node scripts/generate-all-components.js
 */

const fs = require('fs');
const path = require('path');

// Read component types to get all routes
const componentTypesPath = path.join(__dirname, '..', 'src', 'app', 'shared', 'types', 'component.types.ts');
const componentTypesContent = fs.readFileSync(componentTypesPath, 'utf8');

// Extract all routes from the categories array
const routeMatches = componentTypesContent.matchAll(/route:\s*'([^']+)'/g);
const routes = Array.from(routeMatches).map(match => match[1]);

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

console.log(`Found ${routes.length} components to generate...\n`);

routes.forEach((componentRoute, index) => {
  const folderPath = routeToFolderPath(componentRoute);
  const componentName = routeToPascalCase(componentRoute);
  const kebabName = routeToComponentName(componentRoute);
  const categoryFolder = folderPath.split('/')[0];
  const componentFolder = folderPath.split('/').slice(1).join('/');

  const basePath = path.join(__dirname, '..', 'src', 'app', 'pages', 'component', categoryFolder, componentFolder);

  // Skip if already exists
  const routesFile = path.join(basePath, `${kebabName}.routes.ts`);
  if (fs.existsSync(routesFile)) {
    console.log(`⏭️  [${index + 1}/${routes.length}] Skipping ${componentRoute} (already exists)`);
    return;
  }

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

  fs.writeFileSync(routesFile, routesContent);

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
        <a routerLink="overview" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Overview</a>
        <a routerLink="basic" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Basic</a>
        <a routerLink="advanced" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Advanced</a>
        <a routerLink="styling" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Styling</a>
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
    const componentDir = path.join(basePath, `${kebabName}-${comp.name}`);
    const tsFilePath = path.join(componentDir, `${kebabName}-${comp.name}.component.ts`);
    const htmlFilePath = path.join(componentDir, `${kebabName}-${comp.name}.component.html`);
    
    if (!fs.existsSync(tsFilePath)) {
      // Extract template content and create HTML file
      const templateMatch = comp.template.match(/template:\s*\\?`([\s\S]*?)\\?`/);
      if (templateMatch) {
        let htmlContent = templateMatch[1];
        htmlContent = htmlContent.replace(/\\`/g, '`');
        htmlContent = htmlContent.replace(/\\\$/g, '$');
        fs.writeFileSync(htmlFilePath, htmlContent);
        
        // Update component to use templateUrl
        const componentContent = comp.template.replace(
          /template:\s*\\?`[\s\S]*?\\?`/,
          `templateUrl: './${kebabName}-${comp.name}.component.html'`
        );
        fs.writeFileSync(tsFilePath, componentContent);
      } else {
        fs.writeFileSync(tsFilePath, comp.template);
      }
    }
  });

  console.log(`✅ [${index + 1}/${routes.length}] Generated ${componentRoute}`);
});

console.log(`\n✅ All components generated!`);
