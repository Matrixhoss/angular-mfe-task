export type EmployeeStatus = "Active" | "Inactive";

export type SortColumn = "id" | "name" | "email" | "department" | "status";

export type SortDirection = "asc" | "desc";

export interface EmployeeRecord {
  id: number;
  name: string;
  email: string;
  department: string;
  status: EmployeeStatus;
}
