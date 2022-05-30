import React from "react";
import College from "../components/College";
// import SearchBar from "../components/SearchBar";

export default function CollegePage() {
	return (
		<div>
			<div className="resources-intro">
				<br />
				<br />
				<h2 className="resources-h2">Find Your Calling</h2>
				<h4>
					We have collected resources that are needed for a college students to
					take their skills to the next level <br /> programs , class ,
					scholarship that will help you shape your future .
				</h4>
			</div>
			{/* <div className="search-resource">
				<SearchBar />
			</div> */}
			<br />
			<br />
			<College />
		</div>
	);
}
