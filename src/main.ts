import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { bootstrapAlarm, bootstrapBell} from '@ng-icons/bootstrap-icons'
import { provideIcons} from '@ng-icons/core'
bootstrapApplication(App,{
  providers:[
    provideIcons({
    bootstrapAlarm,
    bootstrapBell
  }),
  ],
  
}).catch((err) => console.error(err));
