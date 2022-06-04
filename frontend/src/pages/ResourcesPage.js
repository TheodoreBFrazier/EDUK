import React from "react";
//import Resources from "../components/Resources"
import Resources from "../components/Resources";
// import SearchBar from "../components/SearchBar";

function ResourcesPage() {
	return (
		<div>
			<div className="resources-intro">
				<br />
				<br />
				<h2 className="resources-h2">Find Your Calling</h2>
				<h4>
					All resources have been researched and verified information for classes
					, programs and scholarship <br /> for anyone trying to aquire new
					skills needs information and what is possible , making the field
					available for all .
					<br />
					<br />
				</h4>
			</div>

			<Resources />
		</div>
	);
}

export default ResourcesPage;
