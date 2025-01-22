import Loadable from "react-loadable";
import Loading from "../components/Loading";

/**
 *
 * @param {string} pages下的文件名称
 * @param {*} 文件类型，默认jsx 如果传递非false认为 .tsx文件
 * @returns
 */
export default (pagePath, fileType) =>
  Loadable({
    loading: Loading,
    loader: () =>
      import(`../pages/${pagePath}/index.${fileType ? "tsx" : "jsx"}`),
    delay: 400, // 0.4 seconds 0.4s内加载不出展示loading
  });
