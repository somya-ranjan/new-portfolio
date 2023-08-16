import React from "react";

export const appRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: React.lazy(() => import("../../view/home/Home")),
  },
  {
    path: "/about",
    name: "About",
    exact: true,
    component: React.lazy(() => import("../../view/about/About")),
  },
  {
    path: "/project",
    name: "Project",
    exact: true,
    component: React.lazy(() => import("../../view/project/Project")),
  },
  {
    path: "/journey",
    name: "Journey",
    exact: true,
    component: React.lazy(() => import("../../view/journey/MyJourney")),
  },
  {
    path: "/contact",
    name: "Contact",
    exact: true,
    component: React.lazy(() => import("../../view/contact/Contact")),
  },
  {
    redirectRoute: true,
    name: "Home",
    path: "/",
  },
];
