import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import type { NativeFederationResult } from "@angular-architects/native-federation";

import { createAppRoutes } from "./app.routes";

type RemoteLoader = NativeFederationResult["loadRemoteModule"];

export function createAppConfig(
  loadRemoteModule: RemoteLoader,
): ApplicationConfig {
  return {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideRouter(createAppRoutes(loadRemoteModule)),
    ],
  };
}
