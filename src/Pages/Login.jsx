import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// 이메일, 패스워드 창 눌렀을때 검정색으로 테두리 변하게 - o
// 이메일 @이메일.com 형식에 안맞으면 안내문구 나오게 - o
// 비밀번호 8자 이상 입력 안하면 "8자 이상 입력해 주세요" 문구 나오게 - o
// 이메일, 패스워드 조건 맞으면 배경 검정, 글씨색 흰색으로 변경되게 - o
// 로그인 hover시 색깔 변하게 밝게 - 패스트 캠퍼스 참고
// 아이디 저장하기 체크박스 디자인 - 패스트 캠퍼스 참고

// 8월 2일 기능 추가
// 로그인 되었을 때 홈으로 이동 - o
// 로그인이 되면 로그아웃으로 변경 - 로그인 상태를 redux로 관리 해보자
// 1. redux 보일러 플레이트 코드 작성
// 2. 로그인 상태 redux로 보내주기
// 3. redux에 저장된 로그인 상태에 따라서 로그인, 로그아웃 으로 변경 해주기
// 로그아웃을 클릭하면 로그인으로 변경

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{7,20}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const isValid =
    validation.email && validation.password && email !== "" && password !== "";

  const LoginPossible = validation.email && validation.password;

  const LoginCheck = () => {
    setValidation({
      ...validation,
      email: emailRegEx.test(email),
      password: passwordRegEx.test(password),
    });
  };

  const onSubmit = (e) => {
    if (LoginPossible == true) {
      dispatch({
        type: "LOGIN",
      });
      navigate("/");
    }
    e.preventDefault();
  };

  return (
    <div className="Login">
      <h2>로그인</h2>
      <form onSubmit={onSubmit} className="Login-form">
        <label htmlFor="email" className="Login-title">
          이메일
        </label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="이메일 주소를 입력해 주세요."
          className="Login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            LoginCheck(email);
          }}
        />
        {!validation.email && email !== "" && (
          <div className="Login-validation-text">
            규칙에 맞는 이메일 주소를 입력해 주세요.
          </div>
        )}
        <label htmlFor="password" className="Login-title">
          비밀번호
        </label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="비밀번호를 입력해 주세요."
          className="Login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            LoginCheck(password);
          }}
        />
        {!validation.password && password !== "" && (
          <div className="Login-validation-text">8자 이상 입력해 주세요.</div>
        )}
        <label htmlFor="checkbox" className="id-checkbox">
          <input type="checkbox" />
          <span>아이디 저장하기</span>
        </label>
        <button
          type="submit"
          className={`Login-button ${isValid ? "Login-validation" : ""}`}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
