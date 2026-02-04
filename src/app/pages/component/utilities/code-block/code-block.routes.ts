import { Routes } from '@angular/router';

export const codeblockRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./code-block-home/code-block-home.component').then((m) => m.CodeBlockHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./code-block-overview/code-block-overview.component').then(
        (m) => m.CodeBlockOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./code-block-basic/code-block-basic.component').then(
        (m) => m.CodeBlockBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./code-block-advanced/code-block-advanced.component').then(
        (m) => m.CodeBlockAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./code-block-styling/code-block-styling.component').then(
        (m) => m.CodeBlockStylingComponent
      ),
  },
];
