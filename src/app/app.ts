import { Component, signal } from '@angular/core';
import { TngSidenav, TngSidenavHeaderSlot, TngSidenavFooterSlot } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [TngSidenav,TngSidenavHeaderSlot,TngSidenavFooterSlot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  collapsed = signal(false);
}
