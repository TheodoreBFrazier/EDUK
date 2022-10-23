import React from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function DropDown({
	toggleOpen,
	toggleDropdownOpen,
	handleClick,
	click,
}) {
	return (
		<>
			<ul onClick={handleClick} className="dropM">
				{MenuItems.map((item, index) => {
					return (
						<Link
							className={item.name}
							to={item.path}
							onClick={() => {
								toggleOpen();
								toggleDropdownOpen();
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
