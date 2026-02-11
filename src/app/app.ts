import { Component } from '@angular/core';
import { TngProgressBar } from '@tailng-ui/ui/primitives';

@Component({
  selector: 'app-root',
  imports: [TngProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  mode: 'determinate' | 'indeterminate' = 'determinate';
  value = 40;
  max = 100;

  disableAnimation = false;

  // klass hooks
  rootKlass = 'w-full';
  trackKlass = 'bg-border';
  barKlass = 'bg-primary';
  heightKlass = 'h-1';
}
