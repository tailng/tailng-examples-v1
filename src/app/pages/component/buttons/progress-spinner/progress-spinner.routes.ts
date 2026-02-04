import { Routes } from '@angular/router';

export const progressspinnerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./progress-spinner-home/progress-spinner-home.component').then((m) => m.ProgressSpinnerHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./progress-spinner-overview/progress-spinner-overview.component').then(
        (m) => m.ProgressSpinnerOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./progress-spinner-basic/progress-spinner-basic.component').then(
        (m) => m.ProgressSpinnerBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./progress-spinner-advanced/progress-spinner-advanced.component').then(
        (m) => m.ProgressSpinnerAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./progress-spinner-styling/progress-spinner-styling.component').then(
        (m) => m.ProgressSpinnerStylingComponent
      ),
  },
];
