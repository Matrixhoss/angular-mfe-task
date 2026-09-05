import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Pagination } from '../components/pagination/pagination';
import { RecordsTable } from '../components/records-table/records-table';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-table-page',
  imports: [Pagination, RecordsTable],
  templateUrl: './table-page.html',
  styleUrl: './table-page.css',
})
export class TablePage {
  private readonly recordsService = inject(RecordsService);

  readonly pageSize = 5;
  readonly currentPage = signal(1);
  readonly records = toSignal(this.recordsService.getRecords(), {
    initialValue: null,
  });

  readonly visibleRecords = computed(() => {
    const records = this.records() ?? [];
    const start = (this.currentPage() - 1) * this.pageSize;

    return records.slice(start, start + this.pageSize);
  });
}
