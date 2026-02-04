import { Routes } from '@angular/router';

export const menuRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./menu-home/menu-home.component').then((m) => m.MenuHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./menu-overview/menu-overview.component').then(
        (m) => m.MenuOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./menu-basic/menu-basic.component').then(
        (m) => m.MenuBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./menu-advanced/menu-advanced.component').then(
        (m) => m.MenuAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./menu-styling/menu-styling.component').then(
        (m) => m.MenuStylingComponent
      ),
  },
];
