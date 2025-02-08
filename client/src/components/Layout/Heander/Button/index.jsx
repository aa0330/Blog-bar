import React from "react";
import {
  UserAddOutlined,
  GithubOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import "./index.scss";

const Button = () => {
  return (
    <div className="btns-container">
      <Divider style={{ marginRight: "1.75rem" }} type="vertical" />
      <div
        title="登录"
        onClick={() => {}}
        className="header-btns w-7 h-7 flex justify-center items-center rounded-lg border hover:cursor-pointer hover:bg-btnHover"
      >
        <UserAddOutlined style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        onClick={() => {}}
        title="github"
        className="header-btns  w-7 h-7 ml-3 flex justify-center items-center rounded-lg border hover:cursor-pointer hover:bg-btnHover"
      >
        <GithubOutlined style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        className="header-btns  w-7 h-7 ml-3 flex rounded-lg justify-center items-center border hover:cursor-pointer hover:bg-btnHover"
        onClick={() => {}}
      >
        <SunOutlined style={{ fontSize: "1.2rem" }} />
      </div>
    </div>
  );
};
export default Button;
