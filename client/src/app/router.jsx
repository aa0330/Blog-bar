import { lazy } from "react";
import { buildRoutes } from "@/utils";
import path from "path";

const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/components/Layout")),
    children: [
      {
        path: "/",
        mate: "首页",
        element: lazy(() => import("@/pages/home")),
      },
    ],
  },
  {
    path: "article",
    element: lazy(() => import("@/pages/article")),
  },
];

export const routes = buildRoutes(routerConfig);
