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
              <HomeOutlined style={{marginRight: ".25rem"}} />
              <span>{ele.meta.title}</span>
            </div>
          )
      )}

      {/* {constantRoute[0].children?.map((item, index: number) => {
        const IconComponent =
          ElementPlusIconsVue[
            item.meta.icon as keyof typeof ElementPlusIconsVue
          ]
        return (
          item.meta.show && (
            <div
              class={[
                'flex',
                'items-center',
                'h-full',
                'mx-2',
                'hover:cursor-pointer',
                'hover:text-menuActive',
                'hover:font-semibold',
                route.path === item.path && 'text-menuActive font-semibold',
              ]}
              key={index}
              onClick={() => router.push(item.path)}
            >
              {IconComponent ? <IconComponent class="w-4 mr-1" /> : null}
              <span class="text-sm leading-4">{item.meta.title}</span>
            </div>
          )
        )
      })} */}
    </div>
  );
};

export default Menu;
