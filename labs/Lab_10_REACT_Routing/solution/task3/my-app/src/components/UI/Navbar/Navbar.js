import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbbar_links">
        <Link to="/main">Главная </Link>
        <Link to="/about">О нас</Link>
      </div>
    </div>
  );
};
export default Navbar;
