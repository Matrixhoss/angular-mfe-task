import { Component } from "@angular/core";
import { ApplicationCard } from "../../components/application-card/application-card";
import { StatCard } from "../../components/stat-card/stat-card";

@Component({
  selector: "app-home",
  imports: [ApplicationCard, StatCard],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {}
