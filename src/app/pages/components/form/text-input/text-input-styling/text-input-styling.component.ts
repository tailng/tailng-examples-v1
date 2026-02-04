import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-input-styling',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="prose max-w-none">
      <h2>Styling Examples</h2>
      <p>This is the styling examples page for the Text Input component.</p>
      <p>Replace this content with actual styling variations and customization examples.</p>
    </div>
  `,
})
export class TextInputStylingComponent {}
