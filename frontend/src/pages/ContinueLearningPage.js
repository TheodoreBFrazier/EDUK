import React from "react";
import ContinueLearning from "../components/ContinueLearning";
import SearchBar from "../components/SearchBar";

export default function ContinueLearningPage() {
	return (
		<div>
			<div className="resources-intro">
				<br />
				<br />
				<h2 className="resources-h2">Find Your Calling</h2>
				<h4>
					Elevate yourself by new learning skills and knowledge. <br />
					that will allow you to stay competitive in today's fast-paced <br />
					economy. quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
					<br />
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa <br />
					qui officia deserunt mollit anim id est laborum."
				</h4>
			</div>
			<div className="search-resource">
				<SearchBar />
			</div>
			<br />
			<br />
			<ContinueLearning />
		</div>
	);
}
