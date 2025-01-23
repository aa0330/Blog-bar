import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  typeList: string[]; // 打印的句子列表
  size: string; // 字体大小
  color: string; // 字体颜色
  timeSpace: number; // 每段话之间的间隔时间
  wordPrintTime: number; // 打字速率
}

const Index = (props) => {
  const [loopIndex, setLoopIndex] = useState(0);

  const startTyping = () => {
    const writer = document.getElementById("writer") as HTMLElement;
    if (!writer || props.typeList.length === 0) return;
    let currentIndex = loopIndex; // 当前索引
    let currentText = props.typeList[currentIndex]; // 当前句子
    let num = 0;
    let str = "";
    // 清空当前内容并添加淡入效果
    writer.innerHTML = "";
    writer.style.opacity = "0"; // 隐藏当前内容
    setTimeout(() => (writer.style.opacity = "1"), 100); // 添加淡入动画
    // 打印当前句子的逻辑
    const typeInterval = setInterval(() => {
      str += currentText.charAt(num);
      writer.innerHTML = str;
      if (num < currentText.length - 1) {
        num++;
      } else {
        clearInterval(typeInterval); // 当前句子打印完成
        // 准备打印下一句
        setTimeout(() => {
          setLoopIndex((currentIndex + 1) % props.typeList.length); // 下一个索引
          startTyping(); // 递归调用
        }, props.timeSpace * 1000);
      }
    }, props.wordPrintTime * 1000);
  };

  useEffect(() => {
    startTyping();
  }, []);

  return (
    <div >
      <span
        id="writer"
        style={{ fontSize: props.size, color: props.color }}
      ></span>
      <span  style={{ fontSize: props.size }}>
        |
      </span>
    </div>
  );
};

export default Index;
