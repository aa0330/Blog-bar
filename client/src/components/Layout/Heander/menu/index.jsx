import React from "react";
import "./index.scss";
import { useNavigate } from "react-router";


const Menu = () => {

    const navigate = useNavigate();

 
      return ( 
     <div class="flex text-menu">
      {constantRoute[0].children?.map((item, index: number) => {
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
      })}
    </div>
    )
};

export default Menu;
