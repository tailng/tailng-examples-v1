import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject, provideAppInitializer } from '@angular/core';
import { ShikiHighlighterService } from './app/shared/shiki-hightlighter.service';

bootstrapApplication(App, {
  providers:[
      provideAppInitializer(() => {
      const shiki = inject(ShikiHighlighterService);
      return shiki.init(); 
    }),
  ],
}).catch((err) => console.error(err));
