import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

//import { TextField } from "@mui/material";

//import { IconButton } from "@mui/material";
//import { InputAdornment } from "@mui/material";
//import SearchIcon from "@mui/icons-material/Search";

//var textFieldStyle = {

	//margin: "75px",
	//width: "450px",
//};


function SearchBar() {
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


	//const [searchInput, setSearchInput] = useState("");

	//function resourceSearchArray(property) {
	//let filteredData = resources.filter((resource) => {
	//if (property.input === "") {
	//return resource
	//}
	//else {
	//return resource.text.toLowerCaser().includes(property.input)
	//}
	//})
	//}
	//const handleChange = (event) => {
	//event.preventDefault();
	//let input
	//setSearchInput(event.target.value.tolowercase());
	//};

	//if (searchInput.length > 0) {
	//resources.filter((resource) => {
	//return resource.resource_category.match(searchInput);
	//});
	//}
	return (
		<div className="resources-searchbar">

		</div>
	);
};

export default SearchBar;
