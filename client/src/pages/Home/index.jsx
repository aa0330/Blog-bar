import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Index = () => {
  const possts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nesciunt dolorum eveniet sapiente rem. Minus eaque dolorum porro libero facilis.",
      img: "#",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {possts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.src} alt="" />
            </div>
            <div className="content">
              <Link className="link"></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
