import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngSelect } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngSelect,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
form = new FormGroup({
  fruit: new FormControl<string | null>(null),
});
displayFruit = (v: string) => v;
}
