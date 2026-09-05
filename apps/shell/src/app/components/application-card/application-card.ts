import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

export type ApplicationCardTone = "blue" | "green";

@Component({
  selector: "app-application-card",
  imports: [RouterLink],
  templateUrl: "./application-card.html",
  styleUrl: "./application-card.css",
})
export class ApplicationCard {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly description = input.required<string>();
  readonly route = input.required<string>();
  readonly actionLabel = input.required<string>();
  readonly tone = input.required<ApplicationCardTone>();
}
