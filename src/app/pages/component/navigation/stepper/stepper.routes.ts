import { Routes } from '@angular/router';

export const stepperRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./stepper-home/stepper-home.component').then((m) => m.StepperHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./stepper-overview/stepper-overview.component').then(
        (m) => m.StepperOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./stepper-basic/stepper-basic.component').then(
        (m) => m.StepperBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./stepper-advanced/stepper-advanced.component').then(
        (m) => m.StepperAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./stepper-styling/stepper-styling.component').then(
        (m) => m.StepperStylingComponent
      ),
  },
];
