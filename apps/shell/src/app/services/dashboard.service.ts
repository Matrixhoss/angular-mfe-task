import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

export interface StatisticItem {
  id: string;
  icon: string;
  iconContainerColor: string;
  count: number;
  label: string;
}

export interface DashboardData {
  statistics: readonly StatisticItem[];
}

const DASHBOARD_DATA: DashboardData = {
  statistics: [
    {
      id: "users",
      icon: "/icons/users.svg",
      iconContainerColor: "#2563eb",
      count: 120,
      label: "Total users",
    },
    {
      id: "projects",
      icon: "/icons/projects.svg",
      iconContainerColor: "#16a34a",
      count: 34,
      label: "Active Projects",
    },
    {
      id: "tasks",
      icon: "/icons/tasks.svg",
      iconContainerColor: "#f97316",
      count: 12,
      label: "Tasks Pending",
    },
    {
      id: "events",
      icon: "/icons/events.svg",
      iconContainerColor: "#4f46e5",
      count: 5,
      label: "Events Today",
    },
  ],
};

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  getDashboard(): Observable<DashboardData> {
    return of(DASHBOARD_DATA).pipe(delay(500));
  }
}
