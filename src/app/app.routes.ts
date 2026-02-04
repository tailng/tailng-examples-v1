import { Routes } from '@angular/router';
import { categories } from './shared/types/component.types';

// Import component-specific routes
import { textInputRoutes } from './pages/component/form/text-input/text-input.routes';
// Add more component route imports here as you create them
// import { autocompleteRoutes } from './pages/component/form/autocomplete/autocomplete.routes';

// Map component routes to their route configurations
const componentRoutesMap: Record<string, Routes> = {
  '/forms/text-input': textInputRoutes,
  // Add more component routes here as you create them
  // '/forms/autocomplete': autocompleteRoutes,
};

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
      // Convert route from '/forms/text-input' to 'forms/text-input'
      const routePath = component.route.startsWith('/') ? component.route.substring(1) : component.route;

      // Check if component has specific routes defined
      const componentRoutes = componentRoutesMap[component.route];
      if (componentRoutes && componentRoutes.length > 0) {
        routes.push({
          path: routePath,
          children: componentRoutes,
        });
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
