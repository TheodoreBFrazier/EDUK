import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { Form, Button } from "react-bootstrap";
import "../css/createMentor.css";

const API = process.env.REACT_APP_API_URL;

function CreateMentor() {
	let navigate = useNavigate();
	const [mentor, setMentor] = useState({
		mentor_fname: "",
		mentor_lname: "",
		bio: "",
		email: "",
		speciality: "",
	});

	const addMentor = () => {
		axios
			.post(`${API}/mentors`, mentor)
			.then(() => {
				alert(
					"Thank you for signing up. We'll send you an invite to get started soon!"
				);
				navigate(`/`);
			})
			.catch((c) => console.warn("catch", c));
	};

	const handleTextChange = (event) => {
		setMentor({ ...mentor, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addMentor();
	};

	return (
		<div className="create-mentor-form">
			<h2>Let's create your account!</h2>
			<div id="volunteers">
				<form className="form" onSubmit={handleSubmit}>
					<div className="title">Become a Mentor at EDUK!</div>
					<label htmlFor="mentor_fname">First Name</label>
					<input
						id="mentor_fname"
						className="input"
						type="text"
						value={mentor.mentor_fname}
						onChange={handleTextChange}
					/>

					<label htmlFor="mentor_lname">Last Name</label>
					<input
						id="mentor_lname"
						className="input"
						type="text"
						onChange={handleTextChange}
						value={mentor.mentor_lname}
					/>

					<label htmlFor="speciality">Speciality</label>
					<input
						id="speciality"
						className="input"
						type="text"
						onChange={handleTextChange}
						value={mentor.speciality}
					/>

					<label htmlFor="email">Email</label>
					<input
						id="email"
						className="input"
						type="text"
						onChange={handleTextChange}
						value={mentor.email}
					/>

					<label htmlFor="bio">Bio</label>
					<textarea
						id="bio"
						className="input"
						type="text"
						onChange={handleTextChange}
						value={mentor.bio}
					/>
					<button type="submit" className="submit">
						submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateMentor;
