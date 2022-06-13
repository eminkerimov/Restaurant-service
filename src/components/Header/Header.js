import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__button">
            <Link to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
