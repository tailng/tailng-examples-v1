import { Routes } from '@angular/router';

export const popoverRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./popover-home/popover-home.component').then((m) => m.PopoverHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./popover-overview/popover-overview.component').then(
        (m) => m.PopoverOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./popover-basic/popover-basic.component').then(
        (m) => m.PopoverBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./popover-advanced/popover-advanced.component').then(
        (m) => m.PopoverAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./popover-styling/popover-styling.component').then(
        (m) => m.PopoverStylingComponent
      ),
  },
];
