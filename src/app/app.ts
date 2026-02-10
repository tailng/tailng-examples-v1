import { Component } from '@angular/core';
import { TngButtonToggle } from '@tailng-ui/ui/form';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TngButtonToggle, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  viewOptions = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' },
    { value: 'map', label: 'Map' },
  ];
  viewOptionsWithDisabled = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid', disabled: true },
    { value: 'map', label: 'Map' },
  ];
  form = new FormGroup({
    view: new FormControl<string | null>('list'),
  });
}
