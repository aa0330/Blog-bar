import React from "react";
import { Upload } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const Index = () => {


  



  return (
    <div class="w-60 mx-auto flex justify-between">
      <div class="flex pb-20 justify-between items-center w-full px-14">
        <div>
          <p class="text-2xl mb-2">Hi 👋, Welcome To My Blog. ✨</p>
          <p class="text-4xl font-bold mb-2">
            I'm
            {/* <span class="text-cyan-400"> {blogName}</span>. */}
          </p>
          {/* <TypeWriter
            class="mb-2"
            size="1.5rem"
            timeSpace={1}
            wordPrintTime={0.15}
            typeList={[
              "一名前端开发实习生。",
              "A Front End Development Intern 💻.",
            ]}
          /> */}
          <div class="text-2xl mb-4 flex items-center">
            I'm Interested In&ensp;
            <Svg-Icon width="24px" height="24px" name="vue" />
            <span class="text-emerald-400">Vue</span>, &ensp;
            <Svg-Icon width="24px" height="24px" name="react" />
            <span class="text-cyan-500">React</span> &ensp;And&ensp;
            <Svg-Icon width="24px" height="24px" name="nodejs" />
            <span class="text-lime-600">NodeJs</span>.
          </div>
          <div class="flex gap-4 h-8">
            {/* {blogInfoForm.value.link.map((item: LinksType) => {
              return (
                <div
                  key={item.title}
                  onClick={() => toLink(item.url)}
                  title={item.title}
                  class="w-8 h-8 flex justify-center items-center bg-white rounded-lg border border-solid border-slate-300 hover:cursor-pointer"
                >
                  <Svg-Icon
                    name={item.title}
                    width="1.4rem"
                    height="1.4rem"
                  ></Svg-Icon>
                </div>
              );
            })} */}
          </div>
        </div>
        {/* <div>
          <el-avatar
            fit="cover"
            size={220}
            src={blogInfoForm.value.blogAvatar}
            alt="Avatar"
          />
        </div> */}
      </div>
    </div>
  );
};
export default Index;
