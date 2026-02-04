import { Routes } from '@angular/router';

export const textinputRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./text-input-home/text-input-home.component').then((m) => m.TextInputHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./text-input-overview/text-input-overview.component').then(
        (m) => m.TextInputOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./text-input-basic/text-input-basic.component').then(
        (m) => m.TextInputBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./text-input-advanced/text-input-advanced.component').then(
        (m) => m.TextInputAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./text-input-styling/text-input-styling.component').then(
        (m) => m.TextInputStylingComponent
      ),
  },
];
