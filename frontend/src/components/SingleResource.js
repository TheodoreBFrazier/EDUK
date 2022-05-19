import React from "react";

import { Link } from "react-router-dom";

import { Card } from "@mui/material";

var cardStyle = {
	height: "auto",
	width: "400px",
	padding: "20px",
	boxshadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

function SingleResource({ resource }) {
	return (
		<div className="resource-card">
			<Card style={cardStyle} variant="outlined">
				<Link to={`/resources/${resource.resource_id}`}>
					<h4> {resource.resource_name} </h4>
				</Link>
				<p> {resource.description} </p>
			</Card>
		</div>

	);
}

export default SingleResource;
