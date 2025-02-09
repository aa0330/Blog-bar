import React from "react";
import "./index.scss";

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="line1" >
        <a className="line1-text">
          &copy 小王的个人博客
        </a>
        <a onClick={() => window.location = 'https://beian.miit.gov.cn'}>
          豫ICP备2025109313号
        </a>
      </div>
      <div className="w-96 flex justify-evenly mb-2">
        {/* <a
        href="https://www.aliyun.com/?spm=5176.28055625.J_3207526240.1.6a27154aw7v5VK"
        target="_blank"
      >
        <img
          loading="lazy"
          src="https://img.shields.io/badge/%E9%98%BF%E9%87%8C%E4%BA%91-%E8%BD%BB%E9%87%8F%E6%9C%8D%E5%8A%A1%E5%99%A8-orange"
        />
      </a>
      <a href="https://imzbf.github.io/md-editor-v3/zh-CN" target="_blank">
        <img
          loading="lazy"
          src="https://img.shields.io/badge/MdEditorV3-MD%E7%BC%96%E8%BE%91%E5%99%A8-159957"
        />
      </a>
      <a href="https://www.qiniu.com/" target="_blank">
        <img
          loading="lazy"
          src="https://img.shields.io/badge/%E4%B8%83%E7%89%9B%E4%BA%91-%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8-07beff"
        />
      </a> */}
      </div>
    </div>
  )
};

export default Footer;
