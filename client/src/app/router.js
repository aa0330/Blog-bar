import { lazy } from "react";
import { buildRoutes } from "@/utils";
import path from "path";
import { HomeOutlined, FormOutlined, SunOutlined } from "@ant-design/icons";

export const routerConfig = [
  {
    path: "/",
    element: lazy(() => import("@/components/Layout")),

    children: [
      {
        index: true,
        element: lazy(() => import("@/pages/home")),
        meta: {
          title: "首页",
          show: true,
          icon: HomeOutlined,
        },

      },
      {
        path: "/articleList",
        element: lazy(() => import("@/pages/article")),
        meta: {
          title: "文章",
          show: true,
          icon: FormOutlined,
        },
      },
      {
        path: "/daily",
        element: lazy(() => import("@/pages/article")),
        meta: {
          title: "日常",
          show: true,
          icon: SunOutlined,
        },
      },
    ],
  },
];

export const routes = buildRoutes(routerConfig);
