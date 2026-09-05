import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Pagination } from '../components/pagination/pagination';
import { RecordsTable } from '../components/records-table/records-table';
import {
  EmployeeStatus,
  SortColumn,
  SortDirection,
} from '../models/employee-record';
import { RecordsService } from '../services/records.service';

type StatusFilter = 'All' | EmployeeStatus;

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
  readonly searchTerm = signal('');
  readonly statusFilter = signal<StatusFilter>('All');
  readonly sortColumn = signal<SortColumn>('id');
  readonly sortDirection = signal<SortDirection>('asc');

  readonly records = toSignal(this.recordsService.getRecords(), {
    initialValue: null,
  });

  readonly filteredRecords = computed(() => {
    const records = this.records() ?? [];
    const searchTerm = this.searchTerm().trim().toLowerCase();
    const statusFilter = this.statusFilter();

    return records.filter((record) => {
      const matchesSearch =
        record.name.toLowerCase().includes(searchTerm) ||
        record.email.toLowerCase().includes(searchTerm) ||
        record.department.toLowerCase().includes(searchTerm);

      const matchesStatus =
        statusFilter === 'All' || record.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  });

  readonly sortedRecords = computed(() => {
    const records = [...this.filteredRecords()];
    const column = this.sortColumn();
    const direction = this.sortDirection();

    return records.sort((firstRecord, secondRecord) => {
      const firstValue = firstRecord[column];
      const secondValue = secondRecord[column];
      let comparison: number;

      if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        comparison = firstValue - secondValue;
      } else {
        comparison = String(firstValue).localeCompare(String(secondValue));
      }

      return direction === 'asc' ? comparison : -comparison;
    });
  });

  readonly visibleRecords = computed(() => {
    const records = this.sortedRecords();
    const start = (this.currentPage() - 1) * this.pageSize;

    return records.slice(start, start + this.pageSize);
  });

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchTerm.set(input.value);
    this.currentPage.set(1);
  }

  onStatusChange(event: Event): void {
    const select = event.target as HTMLSelectElement;

    this.statusFilter.set(select.value as StatusFilter);
    this.currentPage.set(1);
  }

  sortBy(column: SortColumn): void {
    if (this.sortColumn() === column) {
      this.sortDirection.update((direction) =>
        direction === 'asc' ? 'desc' : 'asc',
      );
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }

    this.currentPage.set(1);
  }
}
