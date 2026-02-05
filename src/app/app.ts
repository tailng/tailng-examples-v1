import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {TngTextInput} from '@tailng-ui/ui/form'    

@Component({
  selector: 'app-root',
  imports: [TngTextInput,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  login = new FormGroup({
    userName: new FormControl('', { nonNullable: true })
  })
}
