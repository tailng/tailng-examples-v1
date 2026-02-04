import { Routes } from '@angular/router';

export const tableRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./table-home/table-home.component').then((m) => m.TableHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./table-overview/table-overview.component').then(
        (m) => m.TableOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./table-basic/table-basic.component').then(
        (m) => m.TableBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./table-advanced/table-advanced.component').then(
        (m) => m.TableAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./table-styling/table-styling.component').then(
        (m) => m.TableStylingComponent
      ),
  },
];
