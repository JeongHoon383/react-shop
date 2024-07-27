import React, { useState } from "react";
import "./Login.css";

// 이메일, 패스워드 창 눌렀을때 검정색으로 테두리 변하게 - o
// 이메일 @이메일.com 형식에 안맞으면 안내문구 나오게 - o
// 비밀번호 8자 이상 입력 안하면 "8자 이상 입력해 주세요" 문구 나오게 - o
// 이메일, 패스워드 조건 맞으면 배경 검정, 글씨색 흰색으로 변경되게
// 로그인 hover시 색깔 변하게 밝게 - 패스트 캠퍼스 참고
// 아이디 저장하기 체크박스 디자인 - 패스트 캠퍼스 참고

const Login = () => {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{7,20}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  // validation 내부 키값들이 true 일 경우
  // 버튼 색깔이 바뀌게 - transition도 주면서
  // false 일 경우 회색 배경에 검정글씨, true 일 경우 검정 배경에 흰색 글씨

  const LoginCheck = () => {
    setValidation({
      ...validation,
      email: emailRegEx.test(email),
      password: passwordRegEx.test(password),
    });
  };

  console.log(validation);

  // email, password - 정규표현식에 따라서 true, false 반환됨
  // true 일때 문구, false일때 문구

  const onSubmit = (e) => {
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
        {validation.email ? (
          ""
        ) : email == "" ? (
          ""
        ) : (
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
        {validation.password ? (
          ""
        ) : password == "" ? (
          ""
        ) : (
          <div className="Login-validation-text">8자 이상 입력해 주세요.</div>
        )}

        <label htmlFor="checkbox" className="id-checkbox">
          <input type="checkbox" />
          <span>아이디 저장하기</span>
        </label>
        <button type="submit" className="Login-button">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
