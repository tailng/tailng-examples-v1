import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideIcons } from '@ng-icons/core';
import {bootstrapSearch} from '@ng-icons/bootstrap-icons'
 

bootstrapApplication(App, {
  providers: [
    provideIcons({
      bootstrapSearch
    })
  ]
}).catch((err) => console.error(err));

