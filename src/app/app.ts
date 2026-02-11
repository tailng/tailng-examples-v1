import { Component } from '@angular/core';
import { TngRipple } from '@tailng-ui/ui/primitives';


@Component({
  selector: 'app-root',
  imports: [TngRipple],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  disabled = false;
  centered = false;

  color = 'currentColor';
  opacity = 0.18;
  duration = 550;
}
