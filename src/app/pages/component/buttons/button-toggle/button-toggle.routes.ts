import { Routes } from '@angular/router';

export const buttontoggleRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./button-toggle-home/button-toggle-home.component').then((m) => m.ButtonToggleHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./button-toggle-overview/button-toggle-overview.component').then(
        (m) => m.ButtonToggleOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./button-toggle-basic/button-toggle-basic.component').then(
        (m) => m.ButtonToggleBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./button-toggle-advanced/button-toggle-advanced.component').then(
        (m) => m.ButtonToggleAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./button-toggle-styling/button-toggle-styling.component').then(
        (m) => m.ButtonToggleStylingComponent
      ),
  },
];
