import React from "react";
import "./index.scss";
import { useNavigate } from "react-router";
import { blogName } from "@/app/baseConfig";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      class="flex justify-center items-center hover:cursor-pointer"
      onClick={() => navigate("/")}
    >
      <svg-icon
        color="white"
        class="hover:cursor-pointer mr-1"
        name="logo"
        width="1.8rem"
        height="1.8rem"
      />
      <span class="text-xl font-semibold text-sky-500">{blogName}</span>
    </div>
  );
};

export default Logo;
