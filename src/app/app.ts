import { Component, signal } from '@angular/core';
import {
  TngCol,
  TngTable,
  TngCellDef,
  TngHeaderDef,
  TngSort,
  TngSortHeaderDirective,
  TngSortIcon,
} from '@tailng-ui/ui/table';

type Txn = {
  date: string;
  amount: number;
};
@Component({
  selector: 'app-root',
  imports: [TngCol, TngTable, TngCellDef, TngHeaderDef, TngSortHeaderDirective, TngSortIcon],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly seed: Txn[] = [
    { date: '2026-01-08', amount: -1299 },
    { date: '2026-01-08', amount: 65000 },
    { date: '2026-01-09', amount: -1200.5 },
    { date: '2026-01-09', amount: -15000 },
  ];
  readonly dateValue = (r: Txn) => r.date;
  readonly amountValue = (r: Txn) => r.amount;

  readonly rows = signal<Txn[]>([...this.seed]);

  readonly sort = signal<TngSort>({ active: '', direction: '' });

  onSortChange(s: TngSort) {
    this.sort.set(s);
    // demo: hook server-side sorting here if needed
  }
}
