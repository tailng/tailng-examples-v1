import { Component, signal } from '@angular/core';
import { TngTable, TngCol } from '@tailng-ui/ui/table';

type Row = { id: string; name: string; score: number };

@Component({
  selector: 'app-root',
  imports: [ TngTable,TngCol],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly rows = signal<Row[]>([
    { id: '1', name: 'Alice', score: 92 },
    { id: '2', name: 'Bob', score: 87 },
  ]);
  readonly emptyRows = signal<Row[]>([]);

  readonly nameValue = (r: Row) => r.name;
  readonly scoreValue = (r: Row) => r.score;

  scoreClass(value: unknown): string {
    const n = Number(value);
    if (Number.isNaN(n)) return 'text-blue-200';
    return n >= 80 ? 'text-green-600 font-medium' : n >= 60 ? 'text-red-600' : 'text-red-600';
  }

}
