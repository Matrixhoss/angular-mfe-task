import { Routes } from "@angular/router";
import type { NativeFederationResult } from "@angular-architects/native-federation";

import { Home } from "./pages/home/home";
import { RemoteError } from "./pages/remote-error/remote-error";

type RemoteLoader = NativeFederationResult["loadRemoteModule"];

type RemoteRoutesModule = {
  appRoutes: Routes;
};

function loadRemoteRoutes(
  loadRemoteModule: RemoteLoader,
  remoteName: "table" | "data",
  displayName: string,
): Promise<Routes> {
  return loadRemoteModule<RemoteRoutesModule>(remoteName, "./Routes")
    .then((module) => module.appRoutes)
    .catch((error: unknown) => {
      console.error(`Unable to load the ${remoteName} remote.`, error);

      return [
        {
          path: "",
          component: RemoteError,
          data: { remoteName: displayName },
        },
      ];
    });
}

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
        loadRemoteRoutes(loadRemoteModule, "table", "Table application"),
    },
    {
      path: "data",
      loadChildren: () =>
        loadRemoteRoutes(loadRemoteModule, "data", "Data application"),
    },
  ];
}
