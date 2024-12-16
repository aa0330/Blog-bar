import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"> logo</div>
        <div className="links">
          <Link className="link" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>ART</h6>
          </Link>
          <span>Drama</span>
          <span>退出</span>
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
