import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Write from "../pages/Write";
// import Layout from "../components/Layout";
import Loadable from "../utils/loadable";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/write",
  //       element: <Write />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: "",
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/home",
  //   element: <div>Home!</div>,
  // },
  // {
  //   path: "/register",
  //   element: <div>Home!</div>,
  // },
]);

export default router;
