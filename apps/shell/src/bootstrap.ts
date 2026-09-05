import { bootstrapApplication } from "@angular/platform-browser";
import type { NativeFederationResult } from "@angular-architects/native-federation";

import { App } from "./app/app";
import { createAppConfig } from "./app/app.config";

type RemoteLoader = NativeFederationResult["loadRemoteModule"];

export function bootstrap(loadRemoteModule: RemoteLoader) {
  return bootstrapApplication(App, createAppConfig(loadRemoteModule));
}
