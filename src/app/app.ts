import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {TngNumberInput} from '@tailng-ui/ui/form'
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,TngNumberInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  item = new FormGroup({
    quantity: new FormControl<number | null>(10, { nonNullable: false }),
    amount: new FormControl<number | null>(null, { nonNullable: false }),
  });
}
