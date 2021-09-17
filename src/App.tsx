import React from "react";
import style from "./App.less";

function App() {
  console.log("App init");
  return (
    <div className="App">
      <div className={`${style["center"]}`}>
        <div className={`${style["content"]}`}>
          <h1 className={`${style["title"]}`}>中午吃什么？吃什么？</h1>
          <input
            type="button"
            className={`${style["big-button"]}`}
            id="start"
            value="开始"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
