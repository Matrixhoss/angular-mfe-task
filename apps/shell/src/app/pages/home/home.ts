import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ApplicationCard } from "../../components/application-card/application-card";
import { StatCard } from "../../components/stat-card/stat-card";
import { DashboardService } from "../../services/dashboard.service";

interface ApplicationItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  actionLabel: string;
  tone: "blue" | "green";
}

@Component({
  selector: "app-home",
  imports: [ApplicationCard, StatCard],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  private readonly dashboardService = inject(DashboardService);

  readonly applications: readonly ApplicationItem[] = [
    {
      id: "table",
      icon: "/icons/table.svg",
      title: "App One",
      subtitle: "Table",
      description: "View and manage records in a data table.",
      route: "/table",
      actionLabel: "Go to App One",
      tone: "blue",
    },
    {
      id: "data",
      icon: "/icons/document.svg",
      title: "App Two",
      subtitle: "Data",
      description: "View important information and details.",
      route: "/data",
      actionLabel: "Go to App Two",
      tone: "green",
    },
  ];

  readonly dashboard = toSignal(this.dashboardService.getDashboard(), {
    initialValue: null,
  });
}
