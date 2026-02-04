import { Routes } from '@angular/router';

export const checkboxRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./checkbox-home/checkbox-home.component').then((m) => m.CheckboxHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./checkbox-overview/checkbox-overview.component').then(
        (m) => m.CheckboxOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./checkbox-basic/checkbox-basic.component').then(
        (m) => m.CheckboxBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./checkbox-advanced/checkbox-advanced.component').then(
        (m) => m.CheckboxAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./checkbox-styling/checkbox-styling.component').then(
        (m) => m.CheckboxStylingComponent
      ),
  },
];
