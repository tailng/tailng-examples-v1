import { Routes } from '@angular/router';

export const dialogRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dialog-home/dialog-home.component').then((m) => m.DialogHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./dialog-overview/dialog-overview.component').then(
        (m) => m.DialogOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./dialog-basic/dialog-basic.component').then(
        (m) => m.DialogBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./dialog-advanced/dialog-advanced.component').then(
        (m) => m.DialogAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./dialog-styling/dialog-styling.component').then(
        (m) => m.DialogStylingComponent
      ),
  },
];
