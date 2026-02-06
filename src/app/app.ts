import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TngCheckbox } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngCheckbox,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  form = new FormGroup({
    art: new FormControl(false, { nonNullable: true }),
    music: new FormControl(false, { nonNullable: true }),
  terms: new FormControl(false, {
    nonNullable: true,
    validators: [Validators.requiredTrue],
  }),
  });

  get termsCtrl() {
    return this.form.controls.terms;
  }

  
}
