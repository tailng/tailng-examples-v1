import { Routes } from '@angular/router';

export const filterheaderRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./filter-header-home/filter-header-home.component').then((m) => m.FilterHeaderHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./filter-header-overview/filter-header-overview.component').then(
        (m) => m.FilterHeaderOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./filter-header-basic/filter-header-basic.component').then(
        (m) => m.FilterHeaderBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./filter-header-advanced/filter-header-advanced.component').then(
        (m) => m.FilterHeaderAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./filter-header-styling/filter-header-styling.component').then(
        (m) => m.FilterHeaderStylingComponent
      ),
  },
];
