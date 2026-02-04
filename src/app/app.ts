import { Component, signal } from '@angular/core';
import { TngSlideToggle } from '@tociva/tailng-ui/form';

@Component({
  selector: 'app-root',
  imports: [TngSlideToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tailng-docs-alpha');
}
