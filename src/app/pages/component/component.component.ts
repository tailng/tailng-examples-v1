import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { categories } from '../../shared/types/component.types';
import type { Component as ComponentType } from '../../shared/types/component.types';
import { getComponentVariations } from '../../shared/utils/component-variations.util';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export class ComponentPageComponent implements OnInit {
  component: ComponentType | null = null;
  category: string = '';
  componentName: string = '';
  variations: Array<{ name: string; route: string; description?: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to route changes to handle navigation
    this.route.params.subscribe(() => {
      this.updateComponentInfo();
    });
    
    // Initial load
    this.updateComponentInfo();
  }

  private updateComponentInfo() {
    // Get the parent route path (component route) - this works for both parent and child routes
    const parentRoute = this.route.snapshot.parent || this.route.snapshot;
    const segments = parentRoute.url.map((segment) => segment.path);
    const routePath = '/' + segments.join('/');
    
    // Find the component from categories
    this.component = this.findComponent(routePath);
    
    if (this.component) {
      this.componentName = this.component.name;
      // Extract category name from route
      const pathParts = routePath.split('/').filter(Boolean);
      if (pathParts.length >= 1) {
        this.category = pathParts[0];
      }
      
      // Load variations (sub-routes)
      this.loadVariations();
    }
  }

  private findComponent(route: string): ComponentType | null {
    // Normalize route (remove query params and trailing slashes)
    const normalizedRoute = route.split('?')[0].replace(/\/$/, '') || '/';
    
    for (const category of categories) {
      const found = category.components.find((comp) => {
        const compRoute = comp.route.replace(/\/$/, '') || '/';
        return compRoute === normalizedRoute;
      });
      if (found) return found;
    }
    return null;
  }

  private loadVariations() {
    if (this.component) {
      // Get variations from utility (supports component-specific overrides)
      this.variations = getComponentVariations(this.component.route);
    } else {
      // Fallback to default variations
      this.variations = [
        { name: 'Overview', route: '', description: 'Component overview and basic usage' },
        { name: 'Basic', route: '/basic', description: 'Basic implementation' },
        { name: 'Advanced', route: '/advanced', description: 'Advanced usage examples' },
        { name: 'Styling', route: '/styling', description: 'Custom styling examples' },
      ];
    }
  }
}
