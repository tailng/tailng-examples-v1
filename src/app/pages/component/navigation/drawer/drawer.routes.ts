import { Routes } from '@angular/router';

export const drawerRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./drawer-home/drawer-home.component').then((m) => m.DrawerHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./drawer-overview/drawer-overview.component').then(
        (m) => m.DrawerOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./drawer-basic/drawer-basic.component').then(
        (m) => m.DrawerBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./drawer-advanced/drawer-advanced.component').then(
        (m) => m.DrawerAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./drawer-styling/drawer-styling.component').then(
        (m) => m.DrawerStylingComponent
      ),
  },
];
