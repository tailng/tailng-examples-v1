import { Routes } from '@angular/router';

export const emptystateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./empty-state-home/empty-state-home.component').then((m) => m.EmptyStateHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./empty-state-overview/empty-state-overview.component').then(
        (m) => m.EmptyStateOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./empty-state-basic/empty-state-basic.component').then(
        (m) => m.EmptyStateBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./empty-state-advanced/empty-state-advanced.component').then(
        (m) => m.EmptyStateAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./empty-state-styling/empty-state-styling.component').then(
        (m) => m.EmptyStateStylingComponent
      ),
  },
];
