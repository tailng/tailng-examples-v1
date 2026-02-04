import { Routes } from '@angular/router';

export const iconRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./icon-home/icon-home.component').then((m) => m.IconHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./icon-overview/icon-overview.component').then(
        (m) => m.IconOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./icon-basic/icon-basic.component').then(
        (m) => m.IconBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./icon-advanced/icon-advanced.component').then(
        (m) => m.IconAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./icon-styling/icon-styling.component').then(
        (m) => m.IconStylingComponent
      ),
  },
];
