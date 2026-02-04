import { Routes } from '@angular/router';

export const optionlistRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./option-list-home/option-list-home.component').then((m) => m.OptionListHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./option-list-overview/option-list-overview.component').then(
        (m) => m.OptionListOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./option-list-basic/option-list-basic.component').then(
        (m) => m.OptionListBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./option-list-advanced/option-list-advanced.component').then(
        (m) => m.OptionListAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./option-list-styling/option-list-styling.component').then(
        (m) => m.OptionListStylingComponent
      ),
  },
];
