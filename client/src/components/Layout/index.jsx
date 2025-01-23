import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

const Layout = () => {
  



  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
