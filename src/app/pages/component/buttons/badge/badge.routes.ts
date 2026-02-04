import { Routes } from '@angular/router';

export const badgeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./badge-home/badge-home.component').then((m) => m.BadgeHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./badge-overview/badge-overview.component').then(
        (m) => m.BadgeOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./badge-basic/badge-basic.component').then(
        (m) => m.BadgeBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./badge-advanced/badge-advanced.component').then(
        (m) => m.BadgeAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./badge-styling/badge-styling.component').then(
        (m) => m.BadgeStylingComponent
      ),
  },
];
