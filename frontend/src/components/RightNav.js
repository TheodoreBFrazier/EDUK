import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Ul = styled.ul`
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: rgb(247 247 247);
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 25px;
		right: 0;
		height: 100vh;
		width: 240px;
		padding-top: 3.5rem;
		transition: 0.3s ease-in-out;
		z-index: 20;
	}
`;

export default function RightNav({
	open,
	setOpen,
	logText,
	setLogText,
	click,
	handleClick,
	toggleDropdownOpen,
	toggleOpen,
	dropdown,
	onMouseClick,
	onMouseUnclick,
	// setDropdown,
	// toggleMouseClick,
}) {
	const logOut = () => {
		localStorage.clear();
		setLogText("Log In");
	};
	// const onMouseEnter = () => {
	// 	if (window.innerWidth < 760) {
	// 		setDropdown(false);
	// 	}
	// };

	// const onMouseLeave = () => {
	// 	if (window.innerWidth < 760) {
	// 		setDropdown(false);
	// 	} else {
	// 		setDropdown(false);
	// 	}
	// };

	return (
		<Ul open={open} className="navLinks">
			<li
				className="eachLi mainLi "
				onClick={dropdown ? onMouseUnclick : onMouseClick}
				// onMouseEnter={onMouseEnter}
				// onMouseLeave={onMouseLeave}
			>
				<Link to="/resources">
					Resources <ArrowDropDownIcon fontSize="small"></ArrowDropDownIcon>
				</Link>
				{dropdown && (
					<Dropdown
						handleClick={handleClick}
						click={click}
						open={open}
						toggleOpen={toggleOpen}
						toggleDropdownOpen={toggleDropdownOpen}
						setOpen={setOpen}
					/>
				)}
			</li>
			<li
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
				}}
				className="eachLi mainLi"
			>
				<Link to="/about">About</Link>
			</li>
			<li
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
				}}
				className="eachLi mainLi"
			>
				<Link to="/users">Users</Link>
			</li>
			<li
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
				}}
				className="eachLi mainLi"
			>
				<Link to="/mentors/create">Mentors</Link>
			</li>
			<div
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
				}}
				className="loginIcon"
			>
				{localStorage.getItem("userId") ? (
					<Link to="/">
						<Button  						
						variant="outlined" size="medium" onClick={logOut}>
							{logText}
						</Button>
					</Link>
				) : (
					<Link to="/users/login">
						<Button 

style={{
	backgroundColor: "#FCA311",
	fontSize: "18px"
}}
						
						
						
						variant="contained" size="medium">
							{logText}
						</Button>
					</Link>
				)}
			</div>
		</Ul>
	);
}
