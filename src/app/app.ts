import { Component, signal } from '@angular/core';
import { TngPaginator, TngPaginatorChange } from '@tailng-ui/ui/navigation';

@Component({
  selector: 'app-root',
  imports: [TngPaginator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  pagea = signal(1);
  pageb = signal(1);
  pageSizea = signal(10);
  pageSizeb = signal(10);
  counta = signal(100);
  countb = signal(100);
  pagec = signal(1);
  pageSizec = signal(10);
  countc = signal(100);

  onChangea(e: TngPaginatorChange) {
    this.pagea.set(e.page);
    this.pageSizea.set(e.pageSize);
  }
  onChangeb(e: TngPaginatorChange) {
    this.pageb.set(e.page);
    this.pageSizeb.set(e.pageSize);
  }
  onChangec(e: TngPaginatorChange) {
    this.pagec.set(e.page);
    this.pageSizec.set(e.pageSize);
  }
}
