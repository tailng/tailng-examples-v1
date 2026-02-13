import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { bootstrapFunnel } from '@ng-icons/bootstrap-icons'
import { provideIcons } from '@ng-icons/core'

bootstrapApplication(App, {
  providers:[
    provideIcons({
      bootstrapFunnel
    })
  ]
}).catch((err) => console.error(err));
