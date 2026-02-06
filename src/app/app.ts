import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngTextInput} from '@tailng-ui/ui/form';
import { TngIcon } from '@tailng-ui/icons/icon'
@Component({
  selector: 'app-root',
  imports: [TngTextInput,ReactiveFormsModule,TngIcon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  address = new FormGroup({
    place: new FormControl('', { nonNullable: true }),
    country: new FormControl('', { nonNullable: true })

  })
}
