import React from "react";
import "./SideBar.css";

const SideBar = ({ toggleSide, isOpen }) => {
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
