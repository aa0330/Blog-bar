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
      <div title="登录" onClick={() => {}} className="header-btns ">
        <UserAddOutlined style={{ fontSize: "1.2rem" }} />
      </div>
      <div
        onClick={() => {
          window.location = "https://github.com/aa0330";
        }}
        title="github"
        className="header-btns"
      >
        <GithubOutlined style={{ fontSize: "1.2rem" }} />
      </div>
      <div className="header-btns" onClick={() => {}}>
        <SunOutlined style={{ fontSize: "1.2rem" }} />
      </div>
    </div>
  );
};
export default Button;
