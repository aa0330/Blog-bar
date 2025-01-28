import React from "react";
import "./index.scss";
import Logo from "./logo";

const Header = () => {
  return (
    <div className="header-container backdrop-blur-sm">
      <div class="w-75 my-0 mx-auto flex justify-between">
        <Logo />
        <div class="flex justify-between">
          <Menu />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
