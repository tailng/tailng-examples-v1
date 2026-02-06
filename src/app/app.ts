import { Component } from '@angular/core';
import { TngTextInput } from '@tailng-ui/ui/form';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [TngTextInput, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  registerForm = new FormGroup({
    userId: new FormControl('User101', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    emailId: new FormControl('user101@gmail.com', { nonNullable: true }),
    phoneNo: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(10),
       Validators.pattern(/^\d{10}$/),
      ],
    }),
  });
  
}
