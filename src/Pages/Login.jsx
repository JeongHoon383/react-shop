import React, { useState } from "react";
import "./Login.css";

// 이메일, 패스워드 창 눌렀을때 검정색으로 테두리 변하게 - o
// 이메일 @이메일.com 형식에 안맞으면 안내문구 나오게
// 비밀번호 8자 이상 입력 안하면 "8자 이상 입력해 주세요" 문구 나오게
// 이메일, 패스워드 조건 맞으면 배경 검정, 글씨색 흰색으로 변경되게
// 로그인 hover시 색깔 변하게 밝게 - 패스트 캠퍼스 참고
// 아이디 저장하기 체크박스 디자인 - 패스트 캠퍼스 참고

const Login = () => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {};

  return (
    <div className="Login">
      <h2>로그인</h2>
      <form onSubmit={onSubmit} className="Login-form">
        <label htmlFor="email" className="Login-title">
          이메일
        </label>
        <input
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          className="Login-input"
        />
        <label htmlFor="password" className="Login-title">
          비밀번호
        </label>
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          className="Login-input"
        />
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
