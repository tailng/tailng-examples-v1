import { Routes } from '@angular/router';

export const tooltipRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tooltip-home/tooltip-home.component').then((m) => m.TooltipHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./tooltip-overview/tooltip-overview.component').then(
        (m) => m.TooltipOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./tooltip-basic/tooltip-basic.component').then(
        (m) => m.TooltipBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./tooltip-advanced/tooltip-advanced.component').then(
        (m) => m.TooltipAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./tooltip-styling/tooltip-styling.component').then(
        (m) => m.TooltipStylingComponent
      ),
  },
];
