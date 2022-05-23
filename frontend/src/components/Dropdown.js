import React, { useState } from "react";
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
			<ul onClick={handleClick} className={click ? "dropM " : "dropM"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
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
						</li>
					);
				})}
			</ul>
		</>
	);
}
