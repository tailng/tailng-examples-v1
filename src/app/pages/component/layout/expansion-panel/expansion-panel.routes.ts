import { Routes } from '@angular/router';

export const expansionpanelRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./expansion-panel-home/expansion-panel-home.component').then((m) => m.ExpansionPanelHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./expansion-panel-overview/expansion-panel-overview.component').then(
        (m) => m.ExpansionPanelOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./expansion-panel-basic/expansion-panel-basic.component').then(
        (m) => m.ExpansionPanelBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./expansion-panel-advanced/expansion-panel-advanced.component').then(
        (m) => m.ExpansionPanelAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./expansion-panel-styling/expansion-panel-styling.component').then(
        (m) => m.ExpansionPanelStylingComponent
      ),
  },
];
