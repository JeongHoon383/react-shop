import React from "react";
import "./Login.css";

const Login = () => {
  const onSubmit = () => {};

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="Login-form">
        <div className="Login-box">
          <input type="email" placeholder="Email" className="Login-email" />
          <input
            type="password"
            placeholder="Password"
            className="Login-password"
          />
        </div>
        <label htmlFor="id_save">
          <input type="checkbox" />
          아이디 저장하기
        </label>
        <button type="submit">로그인</button>
      </form>
      <div className="box-wrapper">
        <div className="box">box1</div>
        <div className="box">box2</div>
      </div>
    </div>
  );
};

export default Login;
