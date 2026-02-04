import { Routes } from '@angular/router';

export const snackbarRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./snackbar-home/snackbar-home.component').then((m) => m.SnackbarHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./snackbar-overview/snackbar-overview.component').then(
        (m) => m.SnackbarOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./snackbar-basic/snackbar-basic.component').then(
        (m) => m.SnackbarBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./snackbar-advanced/snackbar-advanced.component').then(
        (m) => m.SnackbarAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./snackbar-styling/snackbar-styling.component').then(
        (m) => m.SnackbarStylingComponent
      ),
  },
];
