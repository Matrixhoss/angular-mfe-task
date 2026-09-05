import { Component, input } from "@angular/core";

@Component({
  selector: "app-stat-card",
  imports: [],
  templateUrl: "./stat-card.html",
  styleUrl: "./stat-card.css",
})
export class StatCard {
  readonly icon = input.required<string>();
  readonly iconContainerColor = input.required<string>();
  readonly count = input.required<number>();
  readonly label = input.required<string>();
}
