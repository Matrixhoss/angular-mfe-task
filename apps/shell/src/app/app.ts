import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TopBar } from "./layout/top-bar/top-bar";
import { Sidebar } from "./layout/sidebar/sidebar";

@Component({
  imports: [RouterOutlet, TopBar, Sidebar],
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "shell";
}
