import { initFederation } from "@angular-architects/native-federation";

initFederation("federation.manifest.json", {
  hostRemoteEntry: { url: "./remoteEntry.json" },
})
  .then(async ({ loadRemoteModule }) => {
    const { bootstrap } = await import("./bootstrap");

    return bootstrap(loadRemoteModule);
  })
  .catch((error) => console.error(error));
