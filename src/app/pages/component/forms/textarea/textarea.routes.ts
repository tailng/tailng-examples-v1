import { Routes } from '@angular/router';

export const textareaRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./textarea-home/textarea-home.component').then((m) => m.TextareaHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./textarea-overview/textarea-overview.component').then(
        (m) => m.TextareaOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./textarea-basic/textarea-basic.component').then(
        (m) => m.TextareaBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./textarea-advanced/textarea-advanced.component').then(
        (m) => m.TextareaAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./textarea-styling/textarea-styling.component').then(
        (m) => m.TextareaStylingComponent
      ),
  },
];
