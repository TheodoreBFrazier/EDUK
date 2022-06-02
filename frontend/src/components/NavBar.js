import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import DropDown from "./Dropdown";
import logo from "../images/logo.png";
// hamburger
import Burger from "./Burger.js";

export default function NavBar({ logText, setLogText }) {
  return (
    <nav>
      <div>
        <Link to="/">
          <img className="logoimg" src={logo} alt="logo" />
        </Link>
      </div>
      <Burger logText={logText} setLogText={setLogText} />
    </nav>
  );
}
