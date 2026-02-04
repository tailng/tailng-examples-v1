import { Routes } from '@angular/router';

export const breadcrumbsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./breadcrumbs-home/breadcrumbs-home.component').then((m) => m.BreadcrumbsHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./breadcrumbs-overview/breadcrumbs-overview.component').then(
        (m) => m.BreadcrumbsOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./breadcrumbs-basic/breadcrumbs-basic.component').then(
        (m) => m.BreadcrumbsBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./breadcrumbs-advanced/breadcrumbs-advanced.component').then(
        (m) => m.BreadcrumbsAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./breadcrumbs-styling/breadcrumbs-styling.component').then(
        (m) => m.BreadcrumbsStylingComponent
      ),
  },
];
