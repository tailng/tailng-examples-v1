/**
 * Utility functions to convert routes to folder paths and component names
 */

/**
 * Convert a route path to a folder path
 * Example: '/forms/text-input' -> 'forms/text-input'
 */
export function routeToFolderPath(route: string): string {
  return route.startsWith('/') ? route.substring(1) : route;
}

/**
 * Convert a route path to a component name (kebab-case)
 * Example: '/forms/text-input' -> 'text-input'
 */
export function routeToComponentName(route: string): string {
  const parts = routeToFolderPath(route).split('/');
  return parts[parts.length - 1];
}

/**
 * Convert a route path to a PascalCase component name
 * Example: '/forms/text-input' -> 'TextInput'
 */
export function routeToPascalCase(route: string): string {
  const kebab = routeToComponentName(route);
  return kebab
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Get the category folder from route
 * Example: '/forms/text-input' -> 'forms'
 */
export function routeToCategoryFolder(route: string): string {
  const parts = routeToFolderPath(route).split('/');
  return parts[0] || '';
}
