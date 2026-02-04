import { Routes } from '@angular/router';

export const ripplesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ripples-home/ripples-home.component').then((m) => m.RipplesHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./ripples-overview/ripples-overview.component').then(
        (m) => m.RipplesOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./ripples-basic/ripples-basic.component').then(
        (m) => m.RipplesBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./ripples-advanced/ripples-advanced.component').then(
        (m) => m.RipplesAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./ripples-styling/ripples-styling.component').then(
        (m) => m.RipplesStylingComponent
      ),
  },
];
