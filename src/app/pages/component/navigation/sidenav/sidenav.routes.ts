import { Routes } from '@angular/router';

export const sidenavRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sidenav-home/sidenav-home.component').then((m) => m.SidenavHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./sidenav-overview/sidenav-overview.component').then(
        (m) => m.SidenavOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./sidenav-basic/sidenav-basic.component').then(
        (m) => m.SidenavBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./sidenav-advanced/sidenav-advanced.component').then(
        (m) => m.SidenavAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./sidenav-styling/sidenav-styling.component').then(
        (m) => m.SidenavStylingComponent
      ),
  },
];
