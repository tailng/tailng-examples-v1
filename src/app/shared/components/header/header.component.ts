import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TngBreadcrumbs } from '@tailng-ui/ui/navigation';

interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TngBreadcrumbs],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [];
  home = { label: 'Home', route: '/' };

  constructor(private router: Router) {}

  ngOnInit() {
    // Generate breadcrumbs on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });

    // Initial breadcrumb generation
    this.generateBreadcrumbs();
  }

  private generateBreadcrumbs() {
    const items: BreadcrumbItem[] = [];
    
    const url = this.router.url;
    if (url === '/') {
      this.breadcrumbItems = items;
      return;
    }

    // Split URL and create breadcrumb items
    const segments = url.split('/').filter(Boolean);
    let currentPath = '';

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = this.formatLabel(segment);
      
      // Don't add breadcrumb for the last segment if it's a variation (overview, basic, etc.)
      const isVariation = ['overview', 'basic', 'advanced', 'styling'].includes(segment);
      if (index === segments.length - 1 && isVariation) {
        items.push({ label });
      } else if (!isVariation || index < segments.length - 1) {
        items.push({ label, route: currentPath });
      }
    });

    this.breadcrumbItems = items;
  }

  private formatLabel(segment: string): string {
    // Convert kebab-case to Title Case
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
