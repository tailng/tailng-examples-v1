import { Component, signal } from '@angular/core';
import { TngDialog, TngDialogCloseReason } from '@tailng-ui/ui/overlay';

@Component({
  selector: 'app-root',
  imports: [ TngDialog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly open = signal(false);
  readonly openTwo = signal(false);

 onClosed(_reason: TngDialogCloseReason) {
    this.open.set(false);
  }
}
