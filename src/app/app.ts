import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TngAutocomplete } from '@tailng-ui/ui/form';
import { Country, COUNTRY_LIST, toFlagEmoji } from './shared/country-list';
@Component({
  selector: 'app-root',
  imports: [TngAutocomplete, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  address = new FormGroup({
    country: new FormControl<Country | null>(null),
  });
  options = signal<Country[]>([]);
  displayCountry = (c: Country) => `${toFlagEmoji(c.code)} ${c.name}`;
  
  displayCountryText = (c: Country) => `(${c.code}) ${c.name}`;

  onSearch(term: string) {
    const v = term.toLowerCase().trim();
    this.options.set(v ? COUNTRY_LIST.filter((c) => c.name.toLowerCase().includes(v) || c.iso.toLowerCase().includes(v)) : []);
  }

  
}
