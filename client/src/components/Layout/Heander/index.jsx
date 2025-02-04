import { Button } from "antd";
import Logo from "./logo";
import "./index.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div class=" header-context">
        <Logo />
        <div class="flex justify-between">
          <Button>11</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
