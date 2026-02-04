import { Routes } from '@angular/router';
import { categories } from './shared/types/component.types';
import { routeToFolderPath } from './shared/utils/route-to-folder.util';
import { getComponentRoutes, hasComponentRoutes } from './shared/routes/component-routes.registry';

// Helper function to generate lazy-loaded routes for components
function generateComponentRoutes() {
  const routes: Routes = [];

  // Add home route
  routes.push({
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  });

  // Generate routes for each component
  categories.forEach((category) => {
    category.components.forEach((component) => {
      const routePath = routeToFolderPath(component.route);

      // Check if component has specific routes defined
      if (hasComponentRoutes(component.route)) {
        const componentRoutes = getComponentRoutes(component.route);
        if (componentRoutes && componentRoutes.length > 0) {
          routes.push({
            path: routePath,
            children: componentRoutes,
          });
        }
      } else {
        // Component structure not created yet - skip with warning
        console.warn(
          `Component-specific routes not found for ${component.route}. ` +
          `Run: node scripts/generate-component.js ${component.route}`
        );
      }
    });
  });

  // Catch-all route for 404
  routes.push({
    path: '**',
    redirectTo: '',
  });

  return routes;
}

export const routes: Routes = generateComponentRoutes();
