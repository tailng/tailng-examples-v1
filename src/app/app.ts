import { Component, signal } from '@angular/core';
import {
  TngCol,
  TngTable,
  TngCellDef,
  TngHeaderDef,
  TngFilterPanel,
  TngFilterTrigger,
  TngSortHeaderDirective,
  TngColumnFilterMeta,
} from '@tailng-ui/ui/table';
import { TngIcon } from '@tailng-ui/icons/icon'
type InvoiceRow = {
  id: string;
  customer: string;
  amount: number;
  billDate: string;
  status: 'paid' | 'pending' | 'overdue';
};

@Component({
  selector: 'app-root',
  imports: [TngTable, TngCol, TngCellDef,TngIcon, TngHeaderDef, TngFilterPanel, TngFilterTrigger, TngSortHeaderDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly rows = signal<InvoiceRow[]>([
    { id: 'INV-001', customer: 'Asha Traders', amount: 1200, billDate: '2026-01-02', status: 'paid' },
    { id: 'INV-002', customer: 'Blue Mart', amount: 5600, billDate: '2026-01-03', status: 'pending' },
    { id: 'INV-003', customer: 'Coconut Co', amount: 3400, billDate: '2026-01-04', status: 'overdue' },
    { id: 'INV-004', customer: 'Dawn Stores', amount: 950, billDate: '2026-01-06', status: 'paid' },
    { id: 'INV-005', customer: 'Evergreen', amount: 7800, billDate: '2026-01-08', status: 'pending' },
  ]);

   // value accessors (same style as your demo)
  readonly customerValue = (r: InvoiceRow) => r.customer;
  readonly amountValue = (r: InvoiceRow) => r.amount;
  readonly billDateValue = (r: InvoiceRow) => r.billDate;
  readonly statusValue = (r: InvoiceRow) => r.status;

  // default filter meta helpers
  filterText(placeholder?: string): TngColumnFilterMeta {
    return { type: 'text', placeholder };
  }
  filterNumber(): TngColumnFilterMeta {
    return { type: 'number' };
  }
  filterDate(): TngColumnFilterMeta {
    return { type: 'date' };
  }
  filterStatus(): TngColumnFilterMeta {
    return {
      type: 'enum',
      options: [
        { value: 'paid', label: 'Paid' },
        { value: 'pending', label: 'Pending' },
        { value: 'overdue', label: 'Overdue' },
      ],
    };
}
}
