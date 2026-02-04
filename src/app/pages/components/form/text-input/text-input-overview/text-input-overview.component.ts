import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="prose max-w-none">
      <h2>Overview</h2>
      <p>This is the overview page for the Text Input component.</p>
      <p>Replace this content with actual component documentation, API reference, and usage examples.</p>
    </div>
  `,
})
export class TextInputOverviewComponent {}
