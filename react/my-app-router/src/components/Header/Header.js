import React from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import "./Header.css";
const Header = ({ title }) => {
  const username = localStorage.getItem("username") || "Guest";
  return (
    <header className="Header">
      <h1>{title}</h1>
      <h2>{username}</h2>

    </header>
  );
};

export default Header;
