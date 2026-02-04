import { Routes } from '@angular/router';

export const datepickerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./datepicker-home/datepicker-home.component').then((m) => m.DatepickerHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./datepicker-overview/datepicker-overview.component').then(
        (m) => m.DatepickerOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./datepicker-basic/datepicker-basic.component').then(
        (m) => m.DatepickerBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./datepicker-advanced/datepicker-advanced.component').then(
        (m) => m.DatepickerAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./datepicker-styling/datepicker-styling.component').then(
        (m) => m.DatepickerStylingComponent
      ),
  },
];
