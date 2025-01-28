import { Children, lazy } from "react";
import { buildRoutes } from "@/utils";

const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/pages/home")),
    children: [
      {
        path: "/home",
        element: lazy(() => import("@/pages/home")),
      },
    ],
  },
  {
    path: "",
  },
];

export const routes = buildRoutes(routerConfig);
