import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	right: 20px;
	top: 50px;
	z-index: 25;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? `#323232` : `#111`)};
		border-radius: 10px;
		tranform-origin: 1px;
		translation: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export default function Burger({ logText, setLogText }) {
	// drop down functionality
	const [dropdown, setDropdown] = useState(false);
	const [open, setOpen] = useState(false);
	// state for the drop down close or open
	const [click, setClick] = useState(false);

	const onMouseClick = () => {
		setDropdown(true);
	};
	const onMouseUnclick = () => {
		setDropdown(false);
	};

	const toggleMouseClick = () => {
		dropdown ? onMouseUnclick() : onMouseClick();
	};
	const handleClick = () => setClick(!click);

	const toggleOpen = () => {
		setDropdown(false);
		setOpen(!open);
	};

	const toggleDropdownOpen = () => {
		setClick(!click);
	};

	// useEffect(() => {
	// 	window.addEventListener("click", hideDiv);
	// });

	// componentDidMount = () => {
	// 	window.addEventListener("click", hideDiv);
	// };

	// const hideDiv = () => {
	// 	if (dropdown) {
	// 		setDropdown(false);
	// 	}
	// };

	return (
		<>
			<StyledBurger
				open={open}
				onClick={() => {
					toggleOpen();
					toggleDropdownOpen();
					// toggleMouseClick();
				}}
				className="mainHam"
			>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav
				handleClick={handleClick}
				click={click}
				open={open}
				setOpen={setOpen}
				logText={logText}
				setLogText={setLogText}
				setClick={setClick}
				toggleDropdownOpen={toggleDropdownOpen}
				toggleOpen={toggleOpen}
				dropdown={dropdown}
				onMouseClick={onMouseClick}
				onMouseUnclick={onMouseUnclick}
				toggleMouseClick={toggleMouseClick}
				setDropdown={setDropdown}
			/>
		</>
	);
}
