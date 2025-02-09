import { Outlet } from "react-router-dom";
import Header from "./Heander";
import Footer from "./Footer";
import './index.scss'

const Layout = () => {
  return (
    <div className="app-container" >
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
