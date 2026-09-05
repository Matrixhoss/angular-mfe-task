import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  readonly currentPage = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly totalRecords = input.required<number>();
  readonly pageChange = output<number>();

  readonly totalPages = computed(() =>
    Math.ceil(this.totalRecords() / this.pageSize()),
  );

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  readonly firstVisibleRecord = computed(() =>
    (this.currentPage() - 1) * this.pageSize() + 1,
  );

  readonly lastVisibleRecord = computed(() =>
    Math.min(this.currentPage() * this.pageSize(), this.totalRecords()),
  );

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }
}
