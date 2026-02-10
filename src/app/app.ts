import { Component } from '@angular/core';
import { TngSlider } from '@tailng-ui/ui/form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TngSlider, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
form = new FormGroup({
  volume: new FormControl(50, { nonNullable: true }),
});

}
