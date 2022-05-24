import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;
function CreateResource() {
	// check box
	const [highSchool, setHighSchool] = useState(false);
	const [college, setCollege] = useState(false);
	const [continueLearning, setContinueLearning] = useState(false);

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
	if (continueLearning) {
		resource.resourcefor[2] = "continue learning";
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
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="resource_name">Resource Name</label>
				<br />
				<input
					id="resource_name"
					value={resource.resource_name}
					onChange={handleTextChange}
					type="text"
				/>
				<br />
				<label htmlFor="description">Resource Description</label>
				<br />
				<textarea
					id="description"
					value={resource.description}
					onChange={handleTextChange}
				/>
				<br />
				<label htmlFor="resource_category">Resource Category</label>
				<br />
				<input
					id="resource_category"
					value={resource.resource_category}
					onChange={handleTextChange}
					type="text"
				/>
				<br />

				{/* check box  */}

				<label htmlFor="highschool">High School</label>
				<input
					id="highschool"
					value="highschool"
					type="checkbox"
					onChange={(e) => setHighSchool(e.target.checked)}
				/>

				<label htmlFor="college">College</label>
				<input
					id="college"
					type="checkbox"
					name="college"
					onChange={(e) => setCollege(e.target.checked)}
				/>

				<label htmlFor="continueLearning">Continue Learning</label>
				<input
					id="continueLearning"
					type="checkbox"
					name="continueLearning"
					onChange={(e) => setContinueLearning(e.target.checked)}
				/>

				{/* check box  */}

				<label htmlFor="start_datetime">Start Date and Time</label>
				<br />
				<input
					id="start_datetime"
					value={resource.start_datetime}
					onChange={handleTextChange}
					type="text"
				/>
				<br />
				<label htmlFor="end_datetime">End Date and Time</label>
				<br />
				<input
					id="end_datetime"
					value={resource.end_datetime}
					onChange={handleTextChange}
					type="text"
				/>
				<br />
				<label htmlFor="url">Link</label>
				<br />
				<input
					id="url"
					value={resource.url}
					onChange={handleTextChange}
					type="text"
				/>
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default CreateResource;
