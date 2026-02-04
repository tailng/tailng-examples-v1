import { Routes } from '@angular/router';

export const chipsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./chips-home/chips-home.component').then((m) => m.ChipsHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./chips-overview/chips-overview.component').then(
        (m) => m.ChipsOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./chips-basic/chips-basic.component').then(
        (m) => m.ChipsBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./chips-advanced/chips-advanced.component').then(
        (m) => m.ChipsAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./chips-styling/chips-styling.component').then(
        (m) => m.ChipsStylingComponent
      ),
  },
];
