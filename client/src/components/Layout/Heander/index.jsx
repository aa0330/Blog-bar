import Logo from "./logo";
import Menu from "./menu";
import Button from "./Button";
import "./index.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-context">
        <Logo />
        <div className="header-left">
          <Menu />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
