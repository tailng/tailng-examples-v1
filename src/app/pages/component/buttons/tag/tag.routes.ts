import { Routes } from '@angular/router';

export const tagRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tag-home/tag-home.component').then((m) => m.TagHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./tag-overview/tag-overview.component').then(
        (m) => m.TagOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./tag-basic/tag-basic.component').then(
        (m) => m.TagBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./tag-advanced/tag-advanced.component').then(
        (m) => m.TagAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./tag-styling/tag-styling.component').then(
        (m) => m.TagStylingComponent
      ),
  },
];
