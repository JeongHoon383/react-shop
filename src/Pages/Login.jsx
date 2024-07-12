import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setAutentiCate }) => {
  const nav = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAutentiCate(true);
    nav("/");
  };

  return (
    <>
      <form onSubmit={(e) => loginUser(e)} action="" className="Login">
        <div className="LoginBox">
          <h3>Login</h3>
          <input
            type="text"
            className="Login-id"
            placeholder="아이디를 입력 해주세요"
          />
          <input
            type="text"
            className="Login-password"
            placeholder="비밀번호를 입력 해주세요"
          />
          <button className="Login-button">LOGIN</button>
          <div className="Login-submit">
            <div className="login-search">아이디/비밀번호 찾기</div>
            <div className="login-join">회원가입</div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
