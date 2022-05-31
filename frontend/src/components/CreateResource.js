import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../css/createResource.css";

const API = process.env.REACT_APP_API_URL;
function CreateResource() {
	// check box
	const [highSchool, setHighSchool] = useState(false);
	const [college, setCollege] = useState(false);
	const [continuedLearning, setContinuedLearning] = useState(false);

	// all state to send
	const [resource, setResource] = useState({
		resource_name: "",
		description: "",
		resource_category: "",
		resourcefor: [],
		start_datetime: "",
		end_datetime: "",
		url: "",
		is_verified: false,
	});

	if (highSchool) {
		resource.resourcefor[0] = "highschool";
	} else {
		resource.resourcefor[0] = "null";
	}
	if (college) {
		resource.resourcefor[1] = "college";
	} else {
		resource.resourcefor[1] = "null";
	}
	if (continuedLearning) {
		resource.resourcefor[2] = "continued learning";
	} else {
		resource.resourcefor[2] = "null";
	}

	const navigate = useNavigate();
	const handleTextChange = (e) => {
		setResource({ ...resource, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//add a new resource to the database
		axios
			.post(`${API}/resources`, resource)
			.then((res) => navigate("/resources"))
			.catch((e) => console.log(e));
	};

	return (
		<div className="newForm">
			<h1>Thank you for Adding Resource!</h1>
			<form onSubmit={handleSubmit} className="create-resource-form">
				<div>
					<input
						id="resource_name"
						placeholder="Resource Name"
						value={resource.resource_name}
						onChange={handleTextChange}
						type="text"
					/>
				</div>
				<div>
					<input
						id="resource_category"
						placeholder="Resource Category"
						value={resource.resource_category}
						onChange={handleTextChange}
						type="text"
					/>
				</div>
				<div>
					<input
						id="start_datetime"
						placeholder="Start Date and Time"
						value={resource.start_datetime}
						onChange={handleTextChange}
						type="text"
					/>
				</div>

				<div>
					<input
						id="end_datetime"
						placeholder="End Date and Time"
						value={resource.end_datetime}
						onChange={handleTextChange}
						type="text"
					/>
				</div>

				<div>
					<input
						id="url"
						placeholder="Url"
						value={resource.url}
						onChange={handleTextChange}
						type="text"
					/>
				</div>

				<div>
					<textarea
						id="resource_description"
						placeholder="Resource Description"
						value={resource.description}
						onChange={handleTextChange}
					/>
				</div>

				{/* check box  */}

				<div className="create-resource-checkboxes">
					<div>
						<label className="labelResource" htmlFor="highschool">
							High School
						</label>
						<input
							id="highschool"
							value="highschool"
							type="checkbox"
							onChange={(e) => setHighSchool(e.target.checked)}
						/>
					</div>

					<div>
						<label className="labelResource" htmlFor="college">
							College
						</label>
						<input
							id="college"
							type="checkbox"
							name="college"
							onChange={(e) => setCollege(e.target.checked)}
						/>
					</div>

					<div>
						<label className="labelResource" htmlFor="continuedLearning">
							Continued Learning
						</label>
						<input
							id="continuedLearning"
							type="checkbox"
							name="continuedLearning"
							onChange={(e) => setContinuedLearning(e.target.checked)}
						/>
					</div>
				</div>

				{/* check box  */}

				<Button
					type="submit"
					variant="contained"
					style={{ width: "100px", color: "black", backgroundColor: "white" }}
				>
					Submit
				</Button>
			</form>
		</div>
	);
}

export default CreateResource;
