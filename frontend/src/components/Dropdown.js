import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function DropDown() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<ul onClick={handleClick} className={click ? "dropM clicked" : "dropM"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link
								className={item.name}
								to={item.path}
								onClick={() => setClick(false)}
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
