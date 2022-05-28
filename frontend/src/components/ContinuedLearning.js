import React from "react";
import "./ResourceCategory.css";

import axios from "axios";
import { useState, useEffect } from "react";
import SingleResource from "./SingleResource";

const API = process.env.REACT_APP_API_URL;

export default function ContinueLearning() {
	const [continuedLearningPrograms, setContinuedLearningPrograms] = useState([]);
	const [continuedLearningClasses, setContinuedLearningClasses] = useState([]);
	const [continuedLearningScholarhip, setContinuedLearningScholarhip] = useState(
		[]
	);

	useEffect(() => {
		axios
			.get(API + "/resources")
			.then((response) => {
				const program = response.data.result.filter(
					(high) =>
						high.resource_category === "Program" &&
						high.is_verified === true &&
						high.resourcefor.includes("continued learning")
				);
				setContinuedLearningPrograms(program);
				const classes = response.data.result.filter(
					(high) =>
						high.resource_category === "Class" &&
						high.is_verified === true &&
						high.resourcefor.includes("continued learning")
				);
				setContinuedLearningClasses(classes);
				const scholarship = response.data.result.filter(
					(high) =>
						high.resource_category === "Scholarship" &&
						high.is_verified === true &&
						high.resourcefor.includes("continued learning")
				);
				setContinuedLearningScholarhip(scholarship);
				// setContinuedLearning(response.data.result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// let ContinueLearningPrograms = ContinueLearning.filter((high) => {
	// 	return high.resource_category === "Program" && high.isverified === true;
	// });
	// let ContinueLearningClasses = ContinueLearning.filter((high) => {
	// 	return high.resource_category === "Class" && high.isverified === true;
	// });
	// let ContinueLearningScholarhip = ContinueLearning.filter((high) => {
	// 	return high.resource_category === "Scholarship" && high.isverified === true;
	// });

	return (
		<div>
			<h1 className="resourceCategory">Continued Learning</h1>
			<section className="highSchoolMain">
				<div>
					<h3>Programs</h3>
					<p className="resourceP">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{continuedLearningPrograms.map((ContinuedLearning) => {
						return (
							<SingleResource
								key={ContinuedLearning.resource_id}
								resource={ContinuedLearning}
							/>
						);
					})}
				</div>
			</section>
			<section className="highSchoolMain">
				<div>
					<h3>class</h3>
					<p className="resourceP">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{continuedLearningClasses.map((ContinuedLearning) => {
						return (
							<SingleResource
								key={ContinuedLearning.resource_id}
								resource={ContinuedLearning}
							/>
						);
					})}
				</div>
			</section>
			<section className="highSchoolMain">
				<div>
					<h3>scholarship</h3>
					<p className="resourceP">
						The Programs are listed for high school students in need for
						programs <br /> to excel in technical skills and soft skills works
						that demand you
					</p>
				</div>
				<div className="resource-arr">
					{continuedLearningScholarhip.map((ContinuedLearning) => {
						return (
							<SingleResource
								key={ContinuedLearning.resource_id}
								resource={ContinuedLearning}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
}
