import React from "react";
import "./ResourceCategory.css";

import axios from "axios";
import { useState, useEffect } from "react";
import SingleResource from "./SingleResource";

const API = process.env.REACT_APP_API_URL;

export default function Highschool() {
	const [highschool, setHighschool] = useState([]);

	useEffect(() => {
		axios
			.get(API + "/resources")
			.then((response) => {
				setHighschool(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	let highschoolPrograms = highschool.filter((high) => {
		return (
			high.resource_category === "Program" &&
			high.is_verified === true &&
			high.resourcefor.includes("highschool")
		);
	});
	let highschoolClasses = highschool.filter((high) => {
		return (
			high.resource_category === "Class" &&
			high.is_verified === true &&
			high.resourcefor.includes("highschool")
		);
	});
	let highschoolScholarship = highschool.filter((high) => {
		return (
			high.resource_category === "Scholarship" &&
			high.is_verified === true &&
			high.resourcefor.includes("highschool")
		);
	});
	return (
		<div>
			<h1 className="resourceCategory">HighSchool</h1>

			<section className="highSchoolMain">
				<div>
					<h2>Programs</h2>
					<p className="resourceP">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{highschoolPrograms.map((highschool) => {
						return (
							<SingleResource
								key={highschool.resource_id}
								resource={highschool}
							/>
						);
					})}
				</div>
			</section>

			<section className="highSchoolMain">
				<div>
					<h2>Class</h2>
					<p className="resourceP">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{highschoolClasses.map((highschool) => {
						return (
							<SingleResource
								key={highschool.resource_id}
								resource={highschool}
							/>
						);
					})}
				</div>
			</section>

			<section className="highSchoolMain">
				<div>
					<h2>Scholarship</h2>
					<p className="resource">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{highschoolScholarship.map((highschool) => {
						return (
							<SingleResource
								key={highschool.resource_id}
								resource={highschool}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
}
