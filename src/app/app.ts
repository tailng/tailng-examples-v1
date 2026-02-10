import { Component } from '@angular/core';
import { TngSlideToggle } from '@tailng-ui/ui/form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TngSlideToggle, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  form = new FormGroup({
    enabled: new FormControl(false, { nonNullable: true }),
  });
}
