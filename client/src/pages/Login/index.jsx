import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>错误🙅</p>
        <span>
          马上注册?<Link to="/register">注册账号</Link>
        </span>
      </form>
    </div>
  );
};
export default Index;
