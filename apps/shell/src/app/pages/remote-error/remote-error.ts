import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-remote-error",
  template: ` <p role="alert">Unable to load {{ remoteName }}.</p> `,
})
export class RemoteError {
  private readonly route = inject(ActivatedRoute);

  readonly remoteName = this.route.snapshot.data["remoteName"] as string;
}
