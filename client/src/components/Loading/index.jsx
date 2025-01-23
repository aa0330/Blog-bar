import React from "react";
import { Spin, Modal } from "antd";
import styles from "./";

let loadableConfimShowFlag = false;
const confirm = Modal.success;

const confirmFn = () => {
  confirm({
    centered: true,
    keyboard: false,
    title: "提示",
    content: "网站内容可能有更新，需要刷新页面获取",
    okText: "刷新",
    onOk() {
      globalThis.location.reload();
    },
  });
};

export function Loading({ error, pastDelay }) {
  if (error) {
    console.log(error);
    Object.keys(error).some((i) => {
      if (
        error[i] === "ChunkLoadError" ||
        error[i] === "CSS_CHUNK_LOAD_FAILED"
      ) {
        if (!loadableConfimShowFlag) {
          loadableConfimShowFlag = true;
          confirmFn();
        }
        return true;
      }
    });
  }

  if (pastDelay) {
    return (
      <div className={styles.loadingWapper}>
        <Spin className={styles.loadingSpinWapper}></Spin>
      </div>
    );
  }
  return null;
}
export default Loading;
