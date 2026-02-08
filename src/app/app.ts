import { Component, signal } from '@angular/core';
import { TngTab, TngTabPanel, TngTabs } from '@tailng-ui/ui/layout'
@Component({
  selector: 'app-root',
  imports: [TngTabs,TngTabPanel,TngTab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly tabValue = signal<string>('overview');

}
