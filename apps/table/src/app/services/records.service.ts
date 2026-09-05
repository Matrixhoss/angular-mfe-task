import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { MOCK_RECORDS } from "../data/mock-records";
import { EmployeeRecord } from "../models/employee-record";

@Injectable({
  providedIn: "root",
})
export class RecordsService {
  getRecords(): Observable<readonly EmployeeRecord[]> {
    return of(MOCK_RECORDS).pipe(delay(500));
  }
}
