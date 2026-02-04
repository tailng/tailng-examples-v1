import type { Component } from '../types/component.types';

/**
 * Component-specific variation configurations
 * Override default variations for specific components here
 */
export const componentVariations: Record<string, Array<{ name: string; route: string; description?: string }>> = {
  // Example: Custom variations for a specific component
  // '/forms/autocomplete': [
  //   { name: 'Overview', route: '', description: 'Component overview' },
  //   { name: 'Basic', route: '/basic', description: 'Basic usage' },
  //   { name: 'With Validation', route: '/validation', description: 'Form validation examples' },
  //   { name: 'Custom Filter', route: '/custom-filter', description: 'Custom filtering logic' },
  // ],
};

/**
 * Get variations for a specific component route
 * Falls back to default variations if no custom configuration exists
 */
export function getComponentVariations(componentRoute: string): Array<{ name: string; route: string; description?: string }> {
  return (
    componentVariations[componentRoute] || [
      { name: 'Overview', route: '', description: 'Component overview and basic usage' },
      { name: 'Basic', route: '/basic', description: 'Basic implementation' },
      { name: 'Advanced', route: '/advanced', description: 'Advanced usage examples' },
      { name: 'Styling', route: '/styling', description: 'Custom styling examples' },
    ]
  );
}
