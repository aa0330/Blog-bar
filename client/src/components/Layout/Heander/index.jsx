import { Button } from "antd";
import Logo from "./logo";
import Menu from "./menu";
import "./index.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-context">
        <Logo />
        <div className="header-left">
          <Menu></Menu>
          <Button>1111</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
