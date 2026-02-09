import { Component, computed, inject } from '@angular/core';
import { TngCodeBlock } from '@tailng-ui/ui/utilities';
import { ShikiHighlighterService } from './shared/shiki-hightlighter.service';
import { TngShikiAdapter } from './shared/tng-Adapter';

@Component({
  selector: 'app-root',
  imports: [ TngCodeBlock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private shiki = inject(ShikiHighlighterService);
  readonly highlighter = new TngShikiAdapter(this.shiki);
  snippet = computed(() => `const greeting = 'Hello, tailng';
console.log(greeting);
`);
}
