import { lazy } from "react";
import { buildRoutes } from "@/utils";

const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/pages/home")),
  },
  {
    path: "article",
    element: lazy(() => import("@/pages/article")),
  },
  
];

export const routes = buildRoutes(routerConfig);
