import { Component } from '@angular/core';
import { TngAccordion, TngExpansionPanel } from '@tailng-ui/ui/layout';

@Component({
  selector: 'app-root',
  imports: [ TngAccordion,TngExpansionPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
