import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TngFormField, TngTextInput } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngFormField, TngTextInput, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  form = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
  });
}
