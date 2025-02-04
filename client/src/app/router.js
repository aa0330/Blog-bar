import { lazy } from "react";
import { buildRoutes } from "@/utils";
import path from "path";

export const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/components/Layout")),
    children: [
      {
        path: "/",
        element: lazy(() => import("@/pages/home")),
        meta: {
          title: "首页",
          show: true,
          icon: "HomeFilled",
        },
      },
      {
        path: "/articleList",
        element: lazy(() => import("@/pages/article")),
        meta: {
          title: "文章",
          show: true,
          icon: "Tickets",
        },
      },
      {
        path: "/daily",
        element: lazy(() => import("@/pages/article")),
        meta: {
          title: "日常",
          show: true,
          icon: "Sunny",
        },
      },
    ],
  },
  {
    path: "article",
    element: lazy(() => import("@/pages/article")),
  },
];

export const routes = buildRoutes(routerConfig);
