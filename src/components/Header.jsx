import React from "react";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavmenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += "responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Alongkon</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="MyNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#About" className="nav-link">
              About
            </a>
          </li>
          <li className="nav_list">
            <a href="#Projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav_list">
            <a href="#Contacts" className="nav-link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          Download CV<i className="uil uil-file-alt"></i>
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
