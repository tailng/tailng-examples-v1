import { Routes } from '@angular/router';

export const formfieldRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./form-field-home/form-field-home.component').then((m) => m.FormFieldHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./form-field-overview/form-field-overview.component').then(
        (m) => m.FormFieldOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./form-field-basic/form-field-basic.component').then(
        (m) => m.FormFieldBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./form-field-advanced/form-field-advanced.component').then(
        (m) => m.FormFieldAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./form-field-styling/form-field-styling.component').then(
        (m) => m.FormFieldStylingComponent
      ),
  },
];
