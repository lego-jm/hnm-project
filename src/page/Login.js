import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginCheck }) => {
  const navigate = useNavigate();
  const loginSubmit = (e) => {
    e.preventDefault();
    setLoginCheck(true);
    navigate("/");
  };

  return (
    <div className="login-wrap">
      <form action="" onSubmit={loginSubmit}>
        <div className="login-form">
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" placeholder="Enter email" />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
        </div>
        <button className="login-button danger" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
