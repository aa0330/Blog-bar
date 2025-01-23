import { Children, lazy } from "react";
import { buildRoutes } from "@/utils";

const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/pages/home")),
    children:[
        
    ]
  },
  {
    path:''

  },
];

export const routes = buildRoutes(routerConfig);
