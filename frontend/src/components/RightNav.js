import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Ul = styled.ul`
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: inherit;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 25px;
		right: 0;
		height: 100vh;
		width: 180px;
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
}) {
	const logOut = () => {
		localStorage.clear();
		setLogText("Log In");
	};

	const userId = localStorage.getItem("userId");
	//user data from local storage
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));

	return (
		<Ul open={open} className="navLinks">
			<li
				className="eachLi mainLi "
				onClick={dropdown ? onMouseUnclick : onMouseClick}
			>
				<div>
					Resources <ArrowDropDownIcon fontSize="small"></ArrowDropDownIcon>
				</div>
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

			{!userInfo ? (
				""
			) : userInfo.is_admin && !isNaN(userId) ? (
				<li
					onClick={() => {
						toggleOpen();
						toggleDropdownOpen();
					}}
					className="eachLi mainLi"
				>
					<Link to="admin">Admin Page</Link>
				</li>
			) : (
				<li
					onClick={() => {
						toggleOpen();
						toggleDropdownOpen();
					}}
					className="eachLi mainLi"
				>
					<Link to={`/users/${userId}`}>Dashboard</Link>
				</li>
			)}

			<li
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
				}}
				className="eachLi mainLi"
			>
				{userId && !isNaN(userId) ? (
					<Link to="/mentors">Mentors</Link>
				) : (
					<Link to="/mentors/create">Mentors</Link>
				)}
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
						<Button variant="outlined" size="medium" onClick={logOut}>
							{logText}
						</Button>
					</Link>
				) : (
					<Link to="/users/login">
						<Button
							variant="contained"
							size="small"
							style={{
								background_color: "rgb(35 40 63)",
								fontSize: "18px",
							}}
						>
							{logText}
						</Button>
					</Link>
				)}
			</div>
		</Ul>
	);
}
