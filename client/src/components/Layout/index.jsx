import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Heander";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
