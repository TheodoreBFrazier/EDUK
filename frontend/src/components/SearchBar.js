import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import { TextField } from "@mui/material";

import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const API = process.env.REACT_APP_API_URL;

const SearchBar = () => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		axios
			.get(API + "/resources")
			.then((response) => {
				console.log(response);
				setResources(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const [searchInput, setSeachInput] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		setSeachInput(event.target.value);
	};

	if (searchInput.length > 0) {
		resources.filter((resource) => {
			return resource.resource_category.match(searchInput);
		});
	}

	return (
		<div className="resources-searchbar">
			<TextField
				id="filled_basic"
				label="Search"
				type="search"
				placeholder="Search here"
				onChange={handleChange}
				value={searchInput}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default SearchBar;
