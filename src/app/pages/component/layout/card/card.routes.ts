import { Routes } from '@angular/router';

export const cardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./card-home/card-home.component').then((m) => m.CardHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./card-overview/card-overview.component').then(
        (m) => m.CardOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./card-basic/card-basic.component').then(
        (m) => m.CardBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./card-advanced/card-advanced.component').then(
        (m) => m.CardAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./card-styling/card-styling.component').then(
        (m) => m.CardStylingComponent
      ),
  },
];
