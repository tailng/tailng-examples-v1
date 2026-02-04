import { Routes } from '@angular/router';

export const progressbarRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./progress-bar-home/progress-bar-home.component').then((m) => m.ProgressBarHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./progress-bar-overview/progress-bar-overview.component').then(
        (m) => m.ProgressBarOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./progress-bar-basic/progress-bar-basic.component').then(
        (m) => m.ProgressBarBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./progress-bar-advanced/progress-bar-advanced.component').then(
        (m) => m.ProgressBarAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./progress-bar-styling/progress-bar-styling.component').then(
        (m) => m.ProgressBarStylingComponent
      ),
  },
];
