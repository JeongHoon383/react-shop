import React from "react";
import "./Css/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();

  return (
    <div className="Nav">
      <div className="nav-header">
        <FontAwesomeIcon icon={faBars} className="nav-bars" />
        <div className="nav-login">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={() => nav("/login")}>로그인</div>
        </div>
      </div>
      <div className="nav-img" onClick={() => nav("/")}>
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
          alt=""
        />
      </div>
      <div className="nav-menu">
        <ul className="nav-menu-area">
          <li>여성</li>
          <li>Divided</li>
          <li>남성</li>
          <li>신생아/유아</li>
          <li>아동</li>
          <li>H&M HOME</li>
          <li>Sale</li>
          <li>지속가능성</li>
        </ul>
        <div className="nav-search">
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="nav-search-icon"
            />
            <input
              type="text"
              placeholder="제품 검색"
              className="nav-search-input"
            />
          </div>
          <span className="divider"></span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
