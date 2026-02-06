import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngTextarea } from '@tailng-ui/ui/form';

@Component({
  selector: 'app-root',
  imports: [TngTextarea,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  form = new FormGroup({
    message: new FormControl('', { nonNullable: true }),
  });
}
