import { Component, signal } from '@angular/core';
import { TngDrawer } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [TngDrawer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  drawerOpenRight = signal(false);
  drawerOpenbottom = signal(false);
  postionOpen = signal(false);
}
