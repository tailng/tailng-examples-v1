import { Routes } from '@angular/router';

export const connectedoverlayRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./connected-overlay-home/connected-overlay-home.component').then((m) => m.ConnectedOverlayHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./connected-overlay-overview/connected-overlay-overview.component').then(
        (m) => m.ConnectedOverlayOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./connected-overlay-basic/connected-overlay-basic.component').then(
        (m) => m.ConnectedOverlayBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./connected-overlay-advanced/connected-overlay-advanced.component').then(
        (m) => m.ConnectedOverlayAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./connected-overlay-styling/connected-overlay-styling.component').then(
        (m) => m.ConnectedOverlayStylingComponent
      ),
  },
];
