import React from "react";
// import { useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function DropDown({ toggleOpen, setDropdown }) {
	// useEffect(() => {
	// 	let handler = () => {
	// 		setDropdown(true);
	// 		console.log("handler function");
	// 		toggleOpen();
	// 	};
	// 	document.addEventListener("mounsedown", handler);
	// }, []);
	return (
		<>
			<ul className="dropM">
				{MenuItems.map((item, index) => {
					return (
						<Link
							className={item.name}
							key={index}
							to={item.path}
							onClick={() => {
								toggleOpen();
							}}
						>
							{item.title}
						</Link>
					);
				})}
			</ul>
		</>
	);
}
