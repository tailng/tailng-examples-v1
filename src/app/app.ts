import { Component, signal } from '@angular/core';
import { TngStepper, TngStep, TngStepPanel } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [ TngStep ,TngStepper,TngStepPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly index = signal(0);
  readonly maxStep = 1;

  prev() {
    this.index.update((i) => Math.max(0, i - 1));
  }
  next() {
    this.index.update((i) => Math.min(this.maxStep, i + 1));
  }

}
