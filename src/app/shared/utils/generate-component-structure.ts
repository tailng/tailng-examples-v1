/**
 * Utility script to generate component folder structure
 * This file contains helper functions and templates for generating component structures
 */

import { categories } from '../types/component.types';
import { routeToFolderPath, routeToPascalCase, routeToComponentName } from './route-to-folder.util';

export interface ComponentFileTemplate {
  path: string;
  content: string;
}

/**
 * Generate component structure templates for a given component route
 */
export function generateComponentStructure(componentRoute: string): ComponentFileTemplate[] {
  const folderPath = routeToFolderPath(componentRoute);
  const componentName = routeToPascalCase(componentRoute);
  const kebabName = routeToComponentName(componentRoute);
  const categoryFolder = folderPath.split('/')[0];
  const componentFolder = folderPath.split('/').slice(1).join('/');

  const basePath = `src/app/pages/components/${categoryFolder}/${componentFolder}`;

  return [
    // Routes file
    {
      path: `${basePath}/${kebabName}-routes.ts`,
      content: generateRoutesFile(componentName, kebabName),
    },
    // Home component
    {
      path: `${basePath}/${kebabName}-home/${kebabName}-home.component.ts`,
      content: generateHomeComponent(componentName, kebabName),
    },
    // Overview component
    {
      path: `${basePath}/${kebabName}-overview/${kebabName}-overview.component.ts`,
      content: generateOverviewComponent(componentName, kebabName),
    },
    // Basic component
    {
      path: `${basePath}/${kebabName}-basic/${kebabName}-basic.component.ts`,
      content: generateBasicComponent(componentName, kebabName),
    },
    // Advanced component
    {
      path: `${basePath}/${kebabName}-advanced/${kebabName}-advanced.component.ts`,
      content: generateAdvancedComponent(componentName, kebabName),
    },
    // Styling component
    {
      path: `${basePath}/${kebabName}-styling/${kebabName}-styling.component.ts`,
      content: generateStylingComponent(componentName, kebabName),
    },
  ];
}

function generateRoutesFile(componentName: string, kebabName: string): string {
  return `import { Routes } from '@angular/router';

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
}

function generateHomeComponent(componentName: string, kebabName: string): string {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-${kebabName}-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: \`
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
  \`,
})
export class ${componentName}HomeComponent {}
`;
}

function generateOverviewComponent(componentName: string, kebabName: string): string {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-overview',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="prose max-w-none">
      <h2>Overview</h2>
      <p>This is the overview page for the ${componentName} component.</p>
      <p>Replace this content with actual component documentation, API reference, and usage examples.</p>
    </div>
  \`,
})
export class ${componentName}OverviewComponent {}
`;
}

function generateBasicComponent(componentName: string, kebabName: string): string {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-basic',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="prose max-w-none">
      <h2>Basic Usage</h2>
      <p>This is the basic usage example page for the ${componentName} component.</p>
      <p>Replace this content with actual basic implementation examples.</p>
    </div>
  \`,
})
export class ${componentName}BasicComponent {}
`;
}

function generateAdvancedComponent(componentName: string, kebabName: string): string {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-advanced',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="prose max-w-none">
      <h2>Advanced Usage</h2>
      <p>This is the advanced usage example page for the ${componentName} component.</p>
      <p>Replace this content with actual advanced implementation examples.</p>
    </div>
  \`,
})
export class ${componentName}AdvancedComponent {}
`;
}

function generateStylingComponent(componentName: string, kebabName: string): string {
  return `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-${kebabName}-styling',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="prose max-w-none">
      <h2>Styling Examples</h2>
      <p>This is the styling examples page for the ${componentName} component.</p>
      <p>Replace this content with actual styling variations and customization examples.</p>
    </div>
  \`,
})
export class ${componentName}StylingComponent {}
`;
}

/**
 * Get all component routes that need structure generation
 */
export function getAllComponentRoutes(): string[] {
  const routes: string[] = [];
  categories.forEach((category) => {
    category.components.forEach((component) => {
      routes.push(component.route);
    });
  });
  return routes;
}
