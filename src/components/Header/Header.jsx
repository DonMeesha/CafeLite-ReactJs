import React from "react";
import "./Header.css";
import Logo from "../../Assets/logo.png";
import { links } from "../../Data";
import { FaStream } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="http:// " className="nav__logo">
          <img src={Logo} alt="" className="nav__logo-img" />
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <a href={path} className="nav__link">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav__toggle">
          <FaStream />
        </div>
      </nav>
    </header>
  );
};

export default Header;
