import React from "react";
import {
  UserAddOutlined,
  GithubOutlined,
  SunOutlined,
} from "@ant-design/icons";

import "./index.scss";

const Button = () => {
  return (
    <>
      <div
        title="登录"
        onClick={() => {}}
        className="header-btns w-7 h-7 flex justify-center items-center rounded-lg border hover:cursor-pointer hover:bg-btnHover"
      >
        <UserAddOutlined />
      </div>
      <div
        onClick={() => {}}
        title="github"
        className="header-btns  w-7 h-7 ml-3 flex justify-center items-center rounded-lg border hover:cursor-pointer hover:bg-btnHover"
      >
        <GithubOutlined />
      </div>
      <div
        className="header-btns  w-7 h-7 ml-3 flex rounded-lg justify-center items-center border hover:cursor-pointer hover:bg-btnHover"
        onClick={() => {}}
      >
        <SunOutlined />
      </div>
    </>
  );
};
export default Button;
