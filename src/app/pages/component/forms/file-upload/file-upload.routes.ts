import { Routes } from '@angular/router';

export const fileuploadRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./file-upload-home/file-upload-home.component').then((m) => m.FileUploadHomeComponent),
  },
  {
    path: 'overview',
    loadComponent: () =>
      import('./file-upload-overview/file-upload-overview.component').then(
        (m) => m.FileUploadOverviewComponent
      ),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./file-upload-basic/file-upload-basic.component').then(
        (m) => m.FileUploadBasicComponent
      ),
  },
  {
    path: 'advanced',
    loadComponent: () =>
      import('./file-upload-advanced/file-upload-advanced.component').then(
        (m) => m.FileUploadAdvancedComponent
      ),
  },
  {
    path: 'styling',
    loadComponent: () =>
      import('./file-upload-styling/file-upload-styling.component').then(
        (m) => m.FileUploadStylingComponent
      ),
  },
];
