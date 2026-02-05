import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngCheckbox } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngCheckbox,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  form = new FormGroup({
    terms: new FormControl(false, { nonNullable: true }),
    newsletter: new FormControl(false, { nonNullable: true }),
  });
}
