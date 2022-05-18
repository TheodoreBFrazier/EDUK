import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import DropDown from "./Dropdown";
import logo from "../images/logo.png";
import Dropdown from "./Dropdown";
// login Icon
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NavBar() {
	const [dropdown, setDropdown] = useState(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 600) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseleave = () => {
		if (window.innerWidth < 600) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	return (
		<nav>
			<div>
				<Link to="/">
					<img className="logoimg" src={logo} alt="logo" />
				</Link>
			</div>
			<ul className="navLinks">
				<li
					className="eachLi mainLi "
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseleave}
				>
					<Link to="/resources">
						Resources <ArrowDropDownIcon></ArrowDropDownIcon>
					</Link>
					{dropdown && <Dropdown />}
				</li>
				<li className="eachLi mainLi">
					<Link to="/about">About</Link>
				</li>
				<li className="eachLi mainLi">
					<Link to="/users/login">Users</Link>
				</li>
				<li className="eachLi mainLi">
					<Link to="/mentors/create">Mentors</Link>
				</li>
				<li className="eachLi iconLi">
					<Link to="/users">
						<LoginIcon className="loginIcon" fontSize="large"></LoginIcon>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
