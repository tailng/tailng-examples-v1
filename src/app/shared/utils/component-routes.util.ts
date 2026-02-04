import { Routes } from '@angular/router';
import { categories } from '../types/component.types';
import { routeToFolderPath, routeToPascalCase } from './route-to-folder.util';

/**
 * Generate component-specific routes dynamically
 * This will attempt to load component-specific routes if they exist,
 * otherwise fall back to a default structure
 */
export function generateComponentRoutes(): Routes {
  const routes: Routes = [];

  // Add home route
  routes.push({
    path: '',
    loadComponent: () => import('../../pages/home/home.component').then((m) => m.HomeComponent),
  });

  // Generate routes for each component
  categories.forEach((category) => {
    category.components.forEach((component) => {
      const routePath = routeToFolderPath(component.route);
      const componentName = routeToPascalCase(component.route);
      const categoryFolder = routeToFolderPath(component.route).split('/')[0];

      // Try to load component-specific routes, fallback to default if not found
      routes.push({
        path: routePath,
        loadChildren: () => {
          // Try to import component-specific routes
          const routesPath = `../../pages/components/${categoryFolder}/${routeToFolderPath(component.route).split('/').slice(1).join('/')}/${componentName.toLowerCase()}-routes`;
          
          return import(routesPath)
            .then((m) => {
              // Component-specific routes exist
              const routesKey = Object.keys(m).find((key) => key.includes('Routes'));
              return m[routesKey || 'defaultRoutes'] || [];
            })
            .catch(() => {
              // Fallback to default component structure
              return generateDefaultComponentRoutes(component.route);
            });
        },
      });
    });
  });

  // Catch-all route for 404
  routes.push({
    path: '**',
    redirectTo: '',
  });

  return routes;
}

/**
 * Generate default routes for a component when component-specific routes don't exist
 */
function generateDefaultComponentRoutes(componentRoute: string): Routes {
  const componentName = routeToPascalCase(componentRoute);
  const folderPath = routeToFolderPath(componentRoute);
  const categoryFolder = folderPath.split('/')[0];

  return [
    {
      path: '',
      loadComponent: () =>
        import(`../../pages/components/${categoryFolder}/${folderPath.split('/').slice(1).join('/')}/${componentName.toLowerCase()}-home/${componentName.toLowerCase()}-home.component`).then(
          (m) => m[`${componentName}HomeComponent`]
        ),
    },
    {
      path: 'overview',
      loadComponent: () =>
        import(`../../pages/components/${categoryFolder}/${folderPath.split('/').slice(1).join('/')}/${componentName.toLowerCase()}-overview/${componentName.toLowerCase()}-overview.component`).then(
          (m) => m[`${componentName}OverviewComponent`]
        ),
    },
    {
      path: 'basic',
      loadComponent: () =>
        import(`../../pages/components/${categoryFolder}/${folderPath.split('/').slice(1).join('/')}/${componentName.toLowerCase()}-basic/${componentName.toLowerCase()}-basic.component`).then(
          (m) => m[`${componentName}BasicComponent`]
        ),
    },
    {
      path: 'advanced',
      loadComponent: () =>
        import(`../../pages/components/${categoryFolder}/${folderPath.split('/').slice(1).join('/')}/${componentName.toLowerCase()}-advanced/${componentName.toLowerCase()}-advanced.component`).then(
          (m) => m[`${componentName}AdvancedComponent`]
        ),
    },
    {
      path: 'styling',
      loadComponent: () =>
        import(`../../pages/components/${categoryFolder}/${folderPath.split('/').slice(1).join('/')}/${componentName.toLowerCase()}-styling/${componentName.toLowerCase()}-styling.component`).then(
          (m) => m[`${componentName}StylingComponent`]
        ),
    },
  ];
}
