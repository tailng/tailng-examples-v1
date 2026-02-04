import { Routes } from '@angular/router';

export const sortheaderRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sort-header-home/sort-header-home.component').then((m) => m.SortHeaderHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./sort-header-overview/sort-header-overview.component').then(
        (m) => m.SortHeaderOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./sort-header-basic/sort-header-basic.component').then(
        (m) => m.SortHeaderBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./sort-header-advanced/sort-header-advanced.component').then(
        (m) => m.SortHeaderAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./sort-header-styling/sort-header-styling.component').then(
        (m) => m.SortHeaderStylingComponent
      ),
  },
];
