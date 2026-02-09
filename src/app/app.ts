import { Component, signal } from '@angular/core';
import { TngBreadcrumbItem, TngBreadcrumbs } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [ TngBreadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  itemsOneList = signal<TngBreadcrumbItem[]>([
  { label: 'Projects', route: '/projects' },
  { label: 'Tailng UI' },
]);
readonly itemsTwoList = signal<TngBreadcrumbItem[]>([
    { label: 'Home', route: '/' },
    { label: 'Docs', route: '/docs' },
    { label: 'Breadcrumbs' },
  ]);
}
