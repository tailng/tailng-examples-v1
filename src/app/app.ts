import { Component } from '@angular/core';
import { TngFileUpload } from '@tailng-ui/ui/form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TngFileUpload, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  form = new FormGroup({
    files: new FormControl<FileList | null>(null),
  });
}
