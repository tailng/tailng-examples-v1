import { Routes } from '@angular/router';

export const skeletonRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./skeleton-home/skeleton-home.component').then((m) => m.SkeletonHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./skeleton-overview/skeleton-overview.component').then(
        (m) => m.SkeletonOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./skeleton-basic/skeleton-basic.component').then(
        (m) => m.SkeletonBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./skeleton-advanced/skeleton-advanced.component').then(
        (m) => m.SkeletonAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./skeleton-styling/skeleton-styling.component').then(
        (m) => m.SkeletonStylingComponent
      ),
  },
];
