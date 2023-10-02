import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginCheck } from "../redux/actions/loginAction";

const Login = ({ setLoginCheck }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCheck.login(id, password));
    navigate("/");
  };

  return (
    <div className="login-wrap">
      <form action="" onSubmit={loginSubmit}>
        <div className="login-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button danger" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
