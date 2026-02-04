import { Routes } from '@angular/router';

export const accordionRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./accordion-home/accordion-home.component').then((m) => m.AccordionHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./accordion-overview/accordion-overview.component').then(
        (m) => m.AccordionOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./accordion-basic/accordion-basic.component').then(
        (m) => m.AccordionBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./accordion-advanced/accordion-advanced.component').then(
        (m) => m.AccordionAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./accordion-styling/accordion-styling.component').then(
        (m) => m.AccordionStylingComponent
      ),
  },
];
