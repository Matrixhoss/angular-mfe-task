import { Component, input, output } from '@angular/core';
import {
  EmployeeRecord,
  SortColumn,
  SortDirection,
} from '../../models/employee-record';

@Component({
  selector: 'app-records-table',
  imports: [],
  templateUrl: './records-table.html',
  styleUrl: './records-table.css',
})
export class RecordsTable {
  readonly records = input.required<readonly EmployeeRecord[]>();
  readonly sortColumn = input.required<SortColumn>();
  readonly sortDirection = input.required<SortDirection>();
  readonly sortChange = output<SortColumn>();
}
