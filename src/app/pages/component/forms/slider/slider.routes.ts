import { Routes } from '@angular/router';

export const sliderRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./slider-home/slider-home.component').then((m) => m.SliderHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./slider-overview/slider-overview.component').then(
        (m) => m.SliderOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./slider-basic/slider-basic.component').then(
        (m) => m.SliderBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./slider-advanced/slider-advanced.component').then(
        (m) => m.SliderAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./slider-styling/slider-styling.component').then(
        (m) => m.SliderStylingComponent
      ),
  },
];
