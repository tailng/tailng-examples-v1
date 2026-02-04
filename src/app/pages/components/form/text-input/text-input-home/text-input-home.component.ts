import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-text-input-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="prose max-w-none">
      <h1>Text Input Component</h1>
      <p>Welcome to the Text Input component documentation.</p>
      
      <nav class="mt-8 flex gap-4 border-b border-gray-200">
        <a routerLink="overview" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Overview</a>
        <a routerLink="basic" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Basic</a>
        <a routerLink="advanced" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Advanced</a>
        <a routerLink="styling" routerLinkActive="border-b-2 border-blue-500 text-blue-600" class="px-4 py-2">Styling</a>
      </nav>

      <div class="mt-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class TextInputHomeComponent {}
