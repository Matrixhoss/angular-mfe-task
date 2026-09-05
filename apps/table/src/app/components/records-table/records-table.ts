import { Component, input } from '@angular/core';
import { EmployeeRecord } from '../../models/employee-record';

@Component({
  selector: 'app-records-table',
  imports: [],
  templateUrl: './records-table.html',
  styleUrl: './records-table.css',
})
export class RecordsTable {
  readonly records = input.required<readonly EmployeeRecord[]>();
}
