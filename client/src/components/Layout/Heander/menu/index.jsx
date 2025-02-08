import "./index.scss";
import { routerConfig } from "@/app/router";
import Icon, { HomeOutlined } from "@ant-design/icons";

const Menu = () => {
  return (
    <div className="header-menus flex text-menu">
      {routerConfig[0].children.map(
        (ele) =>
          ele.meta.show && (
            <div key={ele.meta.title} className="header-block">
              <Icon
                component={ele.meta.icon}
                style={{ marginRight: ".25rem" }}
              />
              <span>{ele.meta.title}</span>
            </div>
          )
      )}
    </div>
  );
};

export default Menu;
