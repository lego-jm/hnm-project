import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const menuList = [
  "여성",
  "Divided",
  "남성",
  "신생아/유아",
  "아동",
  "H&M Home",
  "Sale",
  "지속가능성",
];

const Header = ({ loginCheck, setLoginCheck }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    if (loginCheck) setLoginCheck(false);
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="header-wrap">
      <div className="header-login">
        <AiOutlineUser />
        <span onClick={goToLogin}>{loginCheck ? "로그아웃" : "로그인"}</span>
      </div>
      <div className="header-logo">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="logo"
          onClick={goToHome}
        />
      </div>
      <div className="header-menu-wrap">
        <ul className="header-menu-list">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="header-search-wrap">
          <label for="search">
            <AiOutlineSearch size={25} />
          </label>
          <input id="search" type="text" name="" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Header;
