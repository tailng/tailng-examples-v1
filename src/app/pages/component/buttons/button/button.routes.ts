import { Routes } from '@angular/router';

export const buttonRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./button-home/button-home.component').then((m) => m.ButtonHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./button-overview/button-overview.component').then(
        (m) => m.ButtonOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./button-basic/button-basic.component').then(
        (m) => m.ButtonBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./button-advanced/button-advanced.component').then(
        (m) => m.ButtonAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./button-styling/button-styling.component').then(
        (m) => m.ButtonStylingComponent
      ),
  },
];
