import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>错误🙅</p>
        <span>
          已有账号?<Link to="/login">马上登陆</Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
