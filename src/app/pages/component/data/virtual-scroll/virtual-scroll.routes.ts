import { Routes } from '@angular/router';

export const virtualscrollRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./virtual-scroll-home/virtual-scroll-home.component').then((m) => m.VirtualScrollHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./virtual-scroll-overview/virtual-scroll-overview.component').then(
        (m) => m.VirtualScrollOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./virtual-scroll-basic/virtual-scroll-basic.component').then(
        (m) => m.VirtualScrollBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./virtual-scroll-advanced/virtual-scroll-advanced.component').then(
        (m) => m.VirtualScrollAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./virtual-scroll-styling/virtual-scroll-styling.component').then(
        (m) => m.VirtualScrollStylingComponent
      ),
  },
];
