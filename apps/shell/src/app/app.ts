import { Component, inject, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {
  NavigationCancel,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import { TopBar } from "./layout/top-bar/top-bar";
import { Sidebar } from "./layout/sidebar/sidebar";

@Component({
  imports: [RouterOutlet, TopBar, Sidebar],
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  private router = inject(Router);

  isRemoteLoading = signal(false);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRemoteLoading.set(true);
      }

      if (
        event instanceof RouteConfigLoadEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isRemoteLoading.set(false);
      }
    });
  }
}
