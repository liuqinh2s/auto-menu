import React, { useRef, useState } from "react";
import style from "./App.less";
import $ from "jquery";

function App() {
  const [title, setTitle] = useState("中午吃什么？吃什么？");
  const [button, setButton] = useState("开始");
  const [display, setDisplay] = useState("");
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
  const [selected, setSelected] = useState(-1);
  const timer: any = useRef();
  const count = useRef(0);

  const handleClick = () => {
    if (count.current > 6) {
      alert("这么作？今天别吃了！");
      setDisplay("none");
    }

    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      setTitle("中午吃什么，吃这个！");
      setButton("不行，换一个");
    } else {
      timer.current = randomSelect();
      count.current++;
    }

    function randomSelect() {
      return setInterval(() => {
        let index = Math.floor(Math.random() * menuList.length);
        setSelected(index);
        setButton("停止");
        flashing(index);
      }, 50);
    }

    const flashing = (index: number) => {
      console.log($(document).height());
      $("<span class='temp'></span>")
        .html(menuList[index])
        .hide()
        .css({
          position: "absolute",
          top: Math.random() * document.body.clientHeight,
          left: Math.random() * document.body.clientWidth,
          color: "rgba(0,0,0," + Math.random() + ")",
          fontSize: Math.random() * (37 - 14) + 14 + "px",
        })
        .appendTo("body")
        .fadeIn("slow", function () {
          $(this).fadeOut("slow", () => {
            $(this).remove();
          });
        });
      console.log($(document).height());
    };
  };

  return (
    <div className="App">
      <div className={`${style["center"]}`}>
        <div className={`${style["content"]}`}>
          <h1 className={`${style["title"]}`}>
            {title}
            <br />
            <br />
            <b style={{ color: "#FF9733" }} id="what">
              {menuList[selected]}
            </b>
          </h1>
          <input
            type="button"
            className={`${style["big-button"]}`}
            style={{ display }}
            id="start"
            value={button}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
