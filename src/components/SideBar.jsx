import React from "react";
import "./SideBar.css";

const SideBar = ({ toggleSide, isOpen }) => {
  // false 일때 sideBar 숨겨져 있음, default가 false로 되어있음.
  // true 일때(Bar 클릭시) false 로 바뀌면서 className 바뀜, 바 클릭시 true로 바뀌는 함수를 보내줘야함
  // x 키를 눌렀을 때 다시 왼쪽으로 사라지게

  return (
    <div className={isOpen ? "SideBar SideBar_open" : "SideBar"}>
      <button className="close" onClick={toggleSide}>
        x
      </button>
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
