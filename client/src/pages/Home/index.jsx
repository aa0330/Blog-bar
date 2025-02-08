import React, { useState, useEffect } from "react";
import { Avatar } from 'antd'
import { blogName } from "@/app/baseConfig";
import AvatarPng from "@/static/avater.jpg";
import TypeWriter from '@/components/typeWriter'
import "./index.scss";

const Index = () => {
  return (
    <div className="home_container">
      <div className="home-box">
        <div className="home-context">
          <p className="info-context">Hi 👋, Welcome To My Blog. ✨</p>
          <p className="main-context">
            I'm
            <span style={{ color: '#f693bd', fontWeight: '700' }} className="text-cyan-400"> {blogName}</span>.
          </p>
          <TypeWriter
            className="mb-2"
            fontSize="1.5rem"
            timeSpace={1}
            wordPrintTime={0.15}
            style={{ marginBottom: '0.5rem' }}
            typeList={[
              "一名前端开发实习生。",
              "A Front End Development Intern 💻.",
            ]}
          />
          <div className="info-context text-2xl mb-4 flex items-center">
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
        <div className="home_avater" >
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={<img src={AvatarPng} alt="avatar" />}
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
