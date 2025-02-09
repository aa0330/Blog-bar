import { useEffect, useRef } from "react";
import "./index.scss";

interface Props {
  typeList: string[]; // 打印的句子列表
  fontSize: string; // 字体大小
  color: string; // 字体颜色
  timeSpace: number; // 每段话之间的间隔时间
  wordPrintTime: number; // 打字速率
  style: object;
}

const TypeWriter = (props: Props) => {
  const loppIndexRef = useRef(0);

  const {
    fontSize = "1rem",
    color = "#000",
    typeList = [],
    wordPrintTime = 0.3,
    timeSpace = 0.8,
  } = props;
  console.log(11, { fontSize, color });

  const startTyping = () => {
    const writer = document.getElementById("writer") as HTMLElement;
    if (!writer || typeList.length === 0) return;

    let currentIndex = loppIndexRef.current; // 当前索引
    let currentText = typeList[currentIndex]; // 当前句子
    let num = 0,
      str = "";

    // 清空当前内容并添加淡入效果
    writer.innerHTML = "";

    // writer.style.opacity = "0"; // 隐藏当前内容
    // setTimeout(() => (writer.style.opacity = "1"), 100); // 添加淡入动画

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
          loppIndexRef.current = (currentIndex + 1) % typeList.length; // 下一个索引
          startTyping(); // 递归调用
        }, timeSpace * 1000);
      }
    }, wordPrintTime * 1000);
  };

  useEffect(() => {
    startTyping();
  }, []);

  return (
    <div className="print-box" style={{ ...props.style, alignItems: "center" }}>
      <span id="writer" style={{ fontSize, color }}></span>
      <span className="space" style={{ fontSize }}>
        |
      </span>
    </div>
  );
};

export default TypeWriter;
