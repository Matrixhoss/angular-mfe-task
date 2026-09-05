import { Component, input } from "@angular/core";

@Component({
  selector: "app-top-bar",
  imports: [],
  templateUrl: "./top-bar.html",
  styleUrl: "./top-bar.css",
})
export class TopBar {
  userName = input("John Smith");
}
