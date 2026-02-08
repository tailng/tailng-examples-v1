import { Component, computed } from '@angular/core';
import { TngCopyButton } from '@tailng-ui/ui/utilities';

@Component({
  selector: 'app-root',
  imports: [ TngCopyButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  snippet = computed(() => 'Text to copy');

}
