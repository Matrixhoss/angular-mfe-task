import { Routes } from "@angular/router";
import type { NativeFederationResult } from "@angular-architects/native-federation";

import { Home } from "./pages/home/home";

type RemoteLoader = NativeFederationResult["loadRemoteModule"];

type RemoteRoutesModule = {
  appRoutes: Routes;
};

export function createAppRoutes(loadRemoteModule: RemoteLoader): Routes {
  return [
    {
      path: "",
      component: Home,
      pathMatch: "full",
    },
    {
      path: "table",
      loadChildren: () =>
        loadRemoteModule<RemoteRoutesModule>("table", "./Routes").then(
          (module) => module.appRoutes,
        ),
    },
    {
      path: "data",
      loadChildren: () =>
        loadRemoteModule<RemoteRoutesModule>("data", "./Routes").then(
          (module) => module.appRoutes,
        ),
    },
  ];
}
