import React from "react"
import Resources from "../components/Resources"
//import Resources from "../components/Resources"
import SearchBar from "../components/SearchBar"


function ResourcesPage() {
	return (
		<div>
			<div className="resources-intro">
				<br />
				<br />
				<div className="resources-intro-text">
					<h1 className="resources-h2">Find Your Calling</h1>
					<p className="resources-p">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
						<br />
						<br />
					</p>
				</div>
			</div>
			<div className="search-resource">
				<SearchBar />
			</div>
			<br />
			<br />
			<Resources />
		</div>
	);
}

export default ResourcesPage;
