export type EmployeeStatus = "Active" | "Inactive";

export interface EmployeeRecord {
  id: number;
  name: string;
  email: string;
  department: string;
  status: EmployeeStatus;
}
