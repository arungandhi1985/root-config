import { registerApplication, start, LifeCycles } from "single-spa";

/* registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
}); */

// Register App One
registerApplication({
  name: '@verint/app1',
  app: () => System.import<LifeCycles>('@verint/app1'),
  activeWhen: ['/'],
});

// Register App Two
registerApplication({
  name: '@verint/app2',
  app: () => System.import<LifeCycles>('@verint/app2'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
