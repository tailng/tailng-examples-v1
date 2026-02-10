import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngRadioButton } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngRadioButton, ReactiveFormsModule],       
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
form = new FormGroup({
  choice: new FormControl<string | null>(null),
   acount: new FormControl<string | null>(null),
   subscription: new FormControl<string | null>(null),
});

}
