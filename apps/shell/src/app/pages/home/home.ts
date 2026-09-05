import { Component } from "@angular/core";
import {
  ApplicationCard,
  ApplicationCardTone,
} from "../../components/application-card/application-card";
import { StatCard } from "../../components/stat-card/stat-card";

interface StatCardItem {
  id: string;
  icon: string;
  iconContainerColor: string;
  count: number;
  label: string;
}

interface ApplicationCardItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  actionLabel: string;
  tone: ApplicationCardTone;
}

@Component({
  selector: "app-home",
  imports: [ApplicationCard, StatCard],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  readonly statistics: StatCardItem[] = [
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
  ];

  readonly applications: ApplicationCardItem[] = [
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
}
