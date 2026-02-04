import { Routes } from '@angular/router';

export const paginatorRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./paginator-home/paginator-home.component').then((m) => m.PaginatorHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./paginator-overview/paginator-overview.component').then(
        (m) => m.PaginatorOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./paginator-basic/paginator-basic.component').then(
        (m) => m.PaginatorBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./paginator-advanced/paginator-advanced.component').then(
        (m) => m.PaginatorAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./paginator-styling/paginator-styling.component').then(
        (m) => m.PaginatorStylingComponent
      ),
  },
];
