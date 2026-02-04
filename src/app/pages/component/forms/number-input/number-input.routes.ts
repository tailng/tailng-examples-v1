import { Routes } from '@angular/router';

export const numberinputRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./number-input-home/number-input-home.component').then((m) => m.NumberInputHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./number-input-overview/number-input-overview.component').then(
        (m) => m.NumberInputOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./number-input-basic/number-input-basic.component').then(
        (m) => m.NumberInputBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./number-input-advanced/number-input-advanced.component').then(
        (m) => m.NumberInputAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./number-input-styling/number-input-styling.component').then(
        (m) => m.NumberInputStylingComponent
      ),
  },
];
