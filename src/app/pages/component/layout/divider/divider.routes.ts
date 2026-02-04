import { Routes } from '@angular/router';

export const dividerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./divider-home/divider-home.component').then((m) => m.DividerHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./divider-overview/divider-overview.component').then(
        (m) => m.DividerOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./divider-basic/divider-basic.component').then(
        (m) => m.DividerBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./divider-advanced/divider-advanced.component').then(
        (m) => m.DividerAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./divider-styling/divider-styling.component').then(
        (m) => m.DividerStylingComponent
      ),
  },
];
