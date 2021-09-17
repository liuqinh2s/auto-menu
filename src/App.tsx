import React, { useRef, useState } from "react";
import style from "./App.less";

function App() {
  const [menuList, setMenuList] = useState([
    "馄饨",
    "拉面",
    "烩面",
    "热干面",
    "刀削面",
    "油泼面",
    "炸酱面",
    "炒面",
    "重庆小面",
    "米线",
    "酸辣粉",
    "土豆粉",
    "螺狮粉",
    "凉皮儿",
    "麻辣烫",
    "肉夹馍",
    "羊肉汤",
    "炒饭",
    "盖浇饭",
    "卤肉饭",
    "烤肉饭",
    "黄焖鸡米饭",
    "驴肉火烧",
    "川菜",
    "麻辣香锅",
    "火锅",
    "酸菜鱼",
    "烤串",
    "披萨",
    "烤鸭",
    "汉堡",
    "炸鸡",
    "寿司",
    "蟹黄包",
    "煎饼果子",
    "生煎",
    "炒年糕",
  ]);
  const [selected, setSelected] = useState(0);
  const timer: any = useRef();

  const handleClick = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      timer.current = randomSelect();
    }

    function randomSelect() {
      return setInterval(() => {
        let index = Math.floor(Math.random() * menuList.length);
        setSelected(index);
      }, 50);
    }
  };

  return (
    <div className="App">
      <div className={`${style["center"]}`}>
        <div className={`${style["content"]}`}>
          <h1 className={`${style["title"]}`}>中午吃什么？吃什么？</h1>
          <span>{menuList[selected]}</span>
          <input
            type="button"
            className={`${style["big-button"]}`}
            id="start"
            value="开始"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
