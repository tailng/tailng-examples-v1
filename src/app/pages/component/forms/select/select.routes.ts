import { Routes } from '@angular/router';

export const selectRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./select-home/select-home.component').then((m) => m.SelectHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./select-overview/select-overview.component').then(
        (m) => m.SelectOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./select-basic/select-basic.component').then(
        (m) => m.SelectBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./select-advanced/select-advanced.component').then(
        (m) => m.SelectAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./select-styling/select-styling.component').then(
        (m) => m.SelectStylingComponent
      ),
  },
];
