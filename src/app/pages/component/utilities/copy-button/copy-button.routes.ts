import { Routes } from '@angular/router';

export const copybuttonRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./copy-button-home/copy-button-home.component').then((m) => m.CopyButtonHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./copy-button-overview/copy-button-overview.component').then(
        (m) => m.CopyButtonOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./copy-button-basic/copy-button-basic.component').then(
        (m) => m.CopyButtonBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./copy-button-advanced/copy-button-advanced.component').then(
        (m) => m.CopyButtonAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./copy-button-styling/copy-button-styling.component').then(
        (m) => m.CopyButtonStylingComponent
      ),
  },
];
