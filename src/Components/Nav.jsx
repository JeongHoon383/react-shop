import React from "react";
import "./Css/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
      console.log("enter");
    }
  };

  const Login = useSelector((state) => state.Login);
  const dispatch = useDispatch();

  const LoginOut = () => {
    if (Login == true) {
      dispatch({
        type: "LOGOUT",
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="Nav">
      <div className="nav-header">
        <FontAwesomeIcon icon={faBars} className="nav-bars" />
        <div className="nav-login">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={LoginOut}>{Login ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-img" onClick={() => navigate("/")}>
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
              onKeyDown={enterSearch}
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
