import React, { useState, useEffect } from "react";
import { Avatar } from 'antd'
import { blogName } from "@/app/baseConfig";
import AvatarPng from "@/static/avater.jpg";
import TypeWriter from '@/components/typeWriter'
import SvgIcon from "@/components/SvgIcon";
import { baseInfo } from "@/app/baseConfig";
import "./index.scss";

const linkBgColor = {
  github: 'black',
  gitee: 'red',
  juejin: '#3f7ef7',
  csdn: '#e96140',
  bilibili: '#54adde',
}


const Index = () => {

  const toLink = (url) => {
    window.open(url, '_blank')
  }

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
            fontSize="1.5rem"
            timeSpace={1}
            wordPrintTime={0.15}
            style={{ marginBottom: '0.5rem', display: 'flex' }}
            typeList={[
              "一名前端开发实习生。",
              "A Front End Development Intern 💻.",
            ]}
          />
          <div className="info-context icon-boxs ">
            I'm Interested In&ensp;
            <SvgIcon width="24px" height="24px" name="react" />
            <span style={{ color: '#1abcd8' }}>React</span> &ensp;And&ensp;
            <SvgIcon name="vue" width="24" height="24" />
            <span style={{ color: '#41b883' }}>Vue</span>, &ensp;
            <SvgIcon width="24px" height="24px" name="nodejs" />
            <span style={{ color: '#6fa461' }} >NodeJs</span>.
          </div>
          <div className="link-boxes flex gap-4 h-8">
            {baseInfo.map((item) => {
              return (
                <div
                  key={item.name}
                  onClick={() => toLink(item.link)}
                  title={item.name}
                  className="mian-link-box  w-8 h-8 flex justify-center items-center bg-white rounded-lg border border-solid border-slate-300 hover:cursor-pointer"
                  style={{ backgroundColor: linkBgColor[item.name] }}
                >
                  <SvgIcon
                    name={item.name}
                    width="1.4rem"
                    height="1.4rem"
                  ></SvgIcon>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_avater" >
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 220 }}
            src={<img src={AvatarPng} alt="avatar" />}
          />
        </div>
      </div>
    </div>
  );
};


export default Index;
