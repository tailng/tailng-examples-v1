import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {TngChips} from '@tailng-ui/ui/form'
import { Country, COUNTRY_LIST, toFlagEmoji } from './shared/country-list';

@Component({
  selector: 'app-root',
  imports: [TngChips,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  address = new FormGroup({
    countries: new FormControl<Country[]>([], { nonNullable: true }),
  });

  options = signal<Country[]>(COUNTRY_LIST);
  displayCountry = (c: Country) => `${toFlagEmoji(c.code)} ${c.name}`;

  onSearch(term: string) {
    const v = term.toLowerCase().trim();
    this.options.set(v ? COUNTRY_LIST.filter((c) => c.name.toLowerCase().includes(v) || c.iso.toLowerCase().includes(v)) : COUNTRY_LIST);
  }
}
