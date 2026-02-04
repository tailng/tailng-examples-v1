import { Routes } from '@angular/router';

export const radiobuttonRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./radio-button-home/radio-button-home.component').then((m) => m.RadioButtonHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./radio-button-overview/radio-button-overview.component').then(
        (m) => m.RadioButtonOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./radio-button-basic/radio-button-basic.component').then(
        (m) => m.RadioButtonBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./radio-button-advanced/radio-button-advanced.component').then(
        (m) => m.RadioButtonAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./radio-button-styling/radio-button-styling.component').then(
        (m) => m.RadioButtonStylingComponent
      ),
  },
];
