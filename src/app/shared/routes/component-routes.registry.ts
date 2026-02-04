import { Routes } from '@angular/router';

/**
 * Component Routes Registry
 * 
 * This file maps component routes to their route configurations.
 * When you create a new component structure, add it here.
 * 
 * To add a new component:
 * 1. Generate the component structure using: node scripts/generate-component.js <route>
 * 2. Import the routes file below
 * 3. Add an entry to the componentRoutesMap
 */

// Import component-specific routes
import { textInputRoutes } from '../../pages/component/form/text-input/text-input.routes';
// Add more imports as you create component structures
// import { autocompleteRoutes } from '../../pages/component/form/autocomplete/autocomplete.routes';

/**
 * Map of component routes to their route configurations
 */
export const componentRoutesMap: Record<string, Routes> = {
  '/forms/text-input': textInputRoutes,
  // Add more component routes here as you create them
  // '/forms/autocomplete': autocompleteRoutes,
};

/**
 * Get routes for a specific component route
 */
export function getComponentRoutes(route: string): Routes | undefined {
  return componentRoutesMap[route];
}

/**
 * Check if a component has specific routes defined
 */
export function hasComponentRoutes(route: string): boolean {
  return route in componentRoutesMap;
}
