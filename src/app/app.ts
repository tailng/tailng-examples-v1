import { Component, signal } from '@angular/core';
import { TngBadge } from '@tailng-ui/ui/primitives'
@Component({
  selector: 'app-root',
  imports: [TngBadge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(10);
}
