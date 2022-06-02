import React from "react";
// import SearchBar from "../components/SearchBar";

import Highschool from "../components/Highschool";

function HighschoolPage() {
	return (
		<div>
			<div className="resources-intro">
				<br />
				<br />
				<h2 className="resources-h2"> High school</h2>
				<h4>
					We have collected resources that are needed for a High school students
					to take their skills to the next level <br /> programs , class ,
					scholarship that will help you shape your future .
				</h4>
			</div>
			{/* <div className="search-resource">
				<SearchBar />
			</div> */}
			<br />
			<br />
			<Highschool />
		</div>
	);
}

export default HighschoolPage;
