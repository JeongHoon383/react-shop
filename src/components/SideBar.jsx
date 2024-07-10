import React from "react";
import "./SideBar.css";

const SideBar = () => {
  // false 일때 sideBar 숨겨져 있음
  // true 일때(Bar 클릭시) false 로 바뀌면서 className 바뀜

  return (
    <div className="SideBar">
      <button className="close">x</button>
      <div className="menu-category">
        <button>여성</button>
        <button>Divided</button>
        <button>남성</button>
        <button>신생아/유아</button>
        <button>아동</button>
        <button>H&M HOME</button>
        <button>Sale</button>
        <button>지속가능성</button>
      </div>
    </div>
  );
};

export default SideBar;
