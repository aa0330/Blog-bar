import path from "node:path";

export default {
  webpack: {
    //配置别名
    alias: {
      //约定@表示的src路径
      "@": path.resolve(__dirname, "src"),
    },
  },
};
