import { Routes } from '@angular/router';

export const treeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tree-home/tree-home.component').then((m) => m.TreeHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./tree-overview/tree-overview.component').then(
        (m) => m.TreeOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./tree-basic/tree-basic.component').then(
        (m) => m.TreeBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./tree-advanced/tree-advanced.component').then(
        (m) => m.TreeAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./tree-styling/tree-styling.component').then(
        (m) => m.TreeStylingComponent
      ),
  },
];
