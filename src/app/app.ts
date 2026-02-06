import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TngNumberInput } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngNumberInput, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  item = new FormGroup({
    quantity: new FormControl<number | null>(10, {
      nonNullable: false,
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    price: new FormControl<number | null>(100, { nonNullable: false }),
  });
}
