import { bootstrapApplication } from '@angular/platform-browser';
import { provideIcons } from '@ng-icons/core';
import { App } from './app/app';
import { bootstrapSearch} from '@ng-icons/bootstrap-icons';

bootstrapApplication(App,{
  providers:[
    provideIcons({
      bootstrapSearch
    }),
  ],
}).catch((err) => console.error(err));
  
