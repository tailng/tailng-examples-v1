import { Routes } from '@angular/router';

export const autocompleteRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./autocomplete-home/autocomplete-home.component').then((m) => m.AutocompleteHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./autocomplete-overview/autocomplete-overview.component').then(
        (m) => m.AutocompleteOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./autocomplete-basic/autocomplete-basic.component').then(
        (m) => m.AutocompleteBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./autocomplete-advanced/autocomplete-advanced.component').then(
        (m) => m.AutocompleteAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./autocomplete-styling/autocomplete-styling.component').then(
        (m) => m.AutocompleteStylingComponent
      ),
  },
];
