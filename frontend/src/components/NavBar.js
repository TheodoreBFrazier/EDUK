import React from "react";
//importing Link function
import { Link } from "react-router-dom";
// importing button from material UI
import { Button } from "@mui/material";
import "./NavBar.css";
// import DropDown from "./Dropdown";
import logo from "../images/logo.png";
// login Icon
import LoginIcon from "@mui/icons-material/Login";

export default function NavBar() {
	return (
		<nav>
			<div>
				<Link to="/">
					<img className="logoimg" src={logo} alt="logo" />
				</Link>
			</div>
			<div className="navLinks">
				<Link to="/resources">
					<h3> Resources </h3>
				</Link>
				<Link to="/about">
					<h3> About </h3>
				</Link>
				<Link to="/users/create">
					<h3> Users </h3>
				</Link>
				<Link to="/users">
					<LoginIcon className="loginIcon" fontSize="large"></LoginIcon>
				</Link>
			</div>
		</nav>
	);
}
