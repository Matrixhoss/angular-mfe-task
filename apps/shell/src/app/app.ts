import { Component } from "@angular/core";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "shell";
}
