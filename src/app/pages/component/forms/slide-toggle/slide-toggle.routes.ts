import { Routes } from '@angular/router';

export const slidetoggleRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./slide-toggle-home/slide-toggle-home.component').then((m) => m.SlideToggleHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./slide-toggle-overview/slide-toggle-overview.component').then(
        (m) => m.SlideToggleOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./slide-toggle-basic/slide-toggle-basic.component').then(
        (m) => m.SlideToggleBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./slide-toggle-advanced/slide-toggle-advanced.component').then(
        (m) => m.SlideToggleAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./slide-toggle-styling/slide-toggle-styling.component').then(
        (m) => m.SlideToggleStylingComponent
      ),
  },
];
