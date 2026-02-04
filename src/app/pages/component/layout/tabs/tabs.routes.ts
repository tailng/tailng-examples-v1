import { Routes } from '@angular/router';

export const tabsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs-home/tabs-home.component').then((m) => m.TabsHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./tabs-overview/tabs-overview.component').then(
        (m) => m.TabsOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./tabs-basic/tabs-basic.component').then(
        (m) => m.TabsBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./tabs-advanced/tabs-advanced.component').then(
        (m) => m.TabsAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./tabs-styling/tabs-styling.component').then(
        (m) => m.TabsStylingComponent
      ),
  },
];
