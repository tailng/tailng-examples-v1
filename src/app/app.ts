import { Component } from '@angular/core';
import { TngCard, TngCardFooter, TngCardHeader } from  '@tailng-ui/ui/layout'
@Component({
  selector: 'app-root',
  imports: [ TngCard,TngCardHeader,TngCardFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
