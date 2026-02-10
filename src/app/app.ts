import { Component, signal } from '@angular/core';
import { TngPopover } from '@tailng-ui/ui/overlay';

@Component({
  selector: 'app-root',
  imports: [TngPopover],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly popoverOpen = signal(false);
  
}
