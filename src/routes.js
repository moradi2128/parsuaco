import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    element: React.lazy(() => import("./pages/Home/Home")),
  },
  {
    path: "/portfolio",
    exact: true,
    element: React.lazy(() => import("./pages/Portfolio/Portfolio")),
  },
  {
    path: "/portfolioDetail",
    exact: true,
    element: React.lazy(() => import("./pages/PortfolioDetail/PortfolioDetail")),
  },
  {
    path: "/services",
    exact: true,
    element: React.lazy(() => import("./pages/Services/Services")),
  },
  {
    path: "/about",
    exact: true,
    element: React.lazy(() => import("./pages/About/About")),
  },
];

export default routes;
