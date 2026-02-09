import { Component } from '@angular/core';
import { TngMenu, TngMenuItem, TngMenuTemplate } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [TngMenu,TngMenuItem,TngMenuTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
