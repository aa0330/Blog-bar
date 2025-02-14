import axios from "axios";

const request = axios.create({
  baseURL: "", // 基础 URL
  timeout: 10000, // 超时时间
  headers: { "Content-Type": "application/json" }, // 默认请求头
});

request.interceptors.request.use(
  (config) => {
    // 示例：自动添加 Token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // 示例：统一处理响应数据格式
    if (response.status === 200) {
      return response.data; // 直接返回业务数据
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 统一错误处理（网络错误、HTTP 状态码错误等）
    let errorMessage = "请求失败";
    if (error.response) {
      // HTTP 状态码非 2xx 的情况
      switch (error.response.status) {
        case 401:
          errorMessage = "未授权，请重新登录";
          break;
        case 404:
          errorMessage = "请求资源不存在";
          break;
        case 500:
          errorMessage = "服务器错误";
          break;
      }
    } else if (error.request) {
      // 请求已发出但无响应（如网络断开）
      errorMessage = "网络连接异常";
    }
    // 全局错误提示（可接入 UI 框架的提示组件）
    console.error(errorMessage);
    return Promise.reject(error);
  }
);

export default request;
