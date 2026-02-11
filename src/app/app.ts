import { Component } from '@angular/core';
import { TngProgressSpinner } from '@tailng-ui/ui/primitives';

@Component({
  selector: 'app-root',
  imports: [TngProgressSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mode: 'indeterminate' | 'determinate' = 'indeterminate';
  value = 40;
  max = 100;

  sizeKlass = 'w-10 h-10';
  trackKlass = 'text-border';
  indicatorKlass = 'text-primary';
}
