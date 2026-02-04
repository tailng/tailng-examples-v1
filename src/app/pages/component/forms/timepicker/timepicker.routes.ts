import { Routes } from '@angular/router';

export const timepickerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./timepicker-home/timepicker-home.component').then((m) => m.TimepickerHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./timepicker-overview/timepicker-overview.component').then(
        (m) => m.TimepickerOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./timepicker-basic/timepicker-basic.component').then(
        (m) => m.TimepickerBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./timepicker-advanced/timepicker-advanced.component').then(
        (m) => m.TimepickerAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./timepicker-styling/timepicker-styling.component').then(
        (m) => m.TimepickerStylingComponent
      ),
  },
];
