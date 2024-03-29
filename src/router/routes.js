// LAYOUTS
const mainLayout = () => import("layouts/MainLayout.vue");
const basicLayout = () => import("layouts/BasicLayout.vue");
const basicLayoutNoAnimBg = () => import("layouts/BasicLayoutNoAnimBg.vue");
const landingLayout = () => import("layouts/LandingLayout.vue");
const NoLoginLayout = () => import("layouts/NoLogin.vue");

// PAGES
const resourcesPage = () => import("src/pages/Resources.vue");
const installationsPage = () => import("src/pages/Installations.vue");
const researchPage = () => import("src/pages/Research.vue");
const planetPage = () => import("pages/Planet.vue");
const defensePage = () => import("pages/Defense.vue");
const planetInfoPage = () => import("pages/PlanetInfo.vue");

const planetExplorer = () => import("pages/PlanetExplorer.vue");
const tradingPage = () => import("pages/Trading.vue");

const landingPage = () => import("src/pages/Landing1.vue");

const leaderboardPage = () => import("src/pages/Leaderboard.vue");

// ROUTES
const routes = [
  {
    path: "/",
    name: "landing",
    component: landingLayout,
    children: [
      {
        path: "/",
        component: landingPage,
        name: "landing",
        meta: { title: "Landing" },
      },
    ],
  },
  {
    path: "/explorer",
    name: "explorer",
    component: basicLayout,
    meta: {
      requiresAuth: true,
      requiresPlanet: false,
      menu: false,
      title: "Planet Explorer",
    },
    children: [
      {
        path: "",
        component: planetExplorer,
        name: "explorer",
        meta: {
          requiresAuth: true,
          requiresPlanet: true,
          menu: false,
          title: "Planet Explorer",
        },
      },
    ],
  },
  {
    path: "/explorer/:galaxy/:solarSystem/:position",
    name: "explorer-exact-position",
    component: basicLayout,
    children: [
      {
        path: "",
        component: planetExplorer,
        name: "explorer-exact-position",
        meta: {
          requiresAuth: true,
          requiresPlanet: true,
          menu: false,
          title: "Planet Explorer",
        },
      },
    ],
  },
  {
    path: "/trade/:market",
    name: "trading",
    component: basicLayoutNoAnimBg,
    meta: {
      requiresAuth: true,
      requiresPlanet: true,
      menu: false,
      title: "Trading",
    },
    children: [
      {
        path: "",
        component: tradingPage,
        name: "trading",
        meta: {
          requiresAuth: true,
          requiresPlanet: true,
          menu: false,
          title: "Trading",
        },
      },
    ],
  },
  {
    path: "/overview",
    component: mainLayout,
    name: "overview",
    meta: {
      requiresAuth: true,
      requiresPlanet: true,
      menu: true,
      title: "Overview",
    },
    children: [
      { path: "", component: planetInfoPage, meta: { title: "Overview" } },
      {
        path: "/planets",
        component: planetPage,
        name: "planets",
        meta: {
          menu: true,
          requiresAuth: true,
          requiresPlanet: false,
          title: "Planets",
        },
      },
      {
        path: "/resources",
        component: resourcesPage,
        name: "resources",
        meta: {
          menu: true,
          requiresAuth: true,
          requiresPlanet: true,
          title: "Resources",
        },
      },
      {
        path: "/installations",
        component: installationsPage,
        name: "installations",
        meta: {
          menu: true,
          requiresAuth: true,
          requiresPlanet: true,
          title: "Installations",
        },
      },
      {
        path: "/research",
        component: researchPage,
        name: "research",
        meta: {
          menu: true,
          requiresAuth: true,
          requiresPlanet: true,
          title: "Research",
        },
      },
      {
        path: "/defenses",
        component: defensePage,
        name: "defenses",
        meta: {
          menu: true,
          requiresAuth: true,
          requiresPlanet: true,
          title: "Defenses",
        },
      },
    ],
  },
  {
    path: "/leaderboard",
    name: "leaderboard",
    component: mainLayout,
    meta: {
      requiresAuth: true,
      requiresPlanet: true,
      menu: false,
      title: "Leaderboard",
    },
    children: [
      {
        path: "",
        component: leaderboardPage,
        name: "leaderboard",
        meta: {
          requiresAuth: true,
          requiresPlanet: true,
          menu: false,
          title: "Leaderboard",
        },
      },
    ],
  },
  {
    path: "/nouser",
    component: NoLoginLayout,
    name: "nouser",
    meta: {
      requiresAuth: false,
      requiresPlanet: false,
      menu: false,
      title: "Login",
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
