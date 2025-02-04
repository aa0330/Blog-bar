import React, { useState, useEffect } from "react";
import "./index.scss";

const Index = () => {
  return (
    <div className="home_container">
      <div className="home_context">
        <p className="main_context">Hi 👋, Welcome To My Blog. ✨</p>
        <p className="main_context">
          I'm
          {/* <span className="text-cyan-400"> {blogName}</span>. */}
        </p>
        {/* <TypeWriter
            className="mb-2"
            size="1.5rem"
            timeSpace={1}
            wordPrintTime={0.15}
            typeList={[
              "一名前端开发实习生。",
              "A Front End Development Intern 💻.",
            ]}
          /> */}
        <div className="text-2xl mb-4 flex items-center">
          I'm Interested In&ensp;
          <Svg-Icon width="24px" height="24px" name="vue" />
          <span className="text-emerald-400">Vue</span>, &ensp;
          <Svg-Icon width="24px" height="24px" name="react" />
          <span className="text-cyan-500">React</span> &ensp;And&ensp;
          <Svg-Icon width="24px" height="24px" name="nodejs" />
          <span className="text-lime-600">NodeJs</span>.
        </div>
        <div className="flex gap-4 h-8">
          {/* {blogInfoForm.value.link.map((item: LinksType) => {
              return (
                <div
                  key={item.title}
                  onClick={() => toLink(item.url)}
                  title={item.title}
                  className="w-8 h-8 flex justify-center items-center bg-white rounded-lg border border-solid border-slate-300 hover:cursor-pointer"
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
      <div  className="home_avater" >
        {/* <el-avatar
            fit="cover"
            size={220}
            src={blogInfoForm.value.blogAvatar}
            alt="Avatar"
          /> */}
      </div>
    </div>
  );
};
export default Index;
