import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import SingleResource from "./SingleResource";

const API = process.env.REACT_APP_API_URL;

function Resources() {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		axios
			.get(API + "/resources")
			.then((response) => {
				setResources(response.data.result);
				//const allResources = response.data.result.filter(
					//(resource) => resource.is_verified
			})
				//setResources(allResources);
				//console.log(allResources)
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="resource-arr">
			{resources.map((resource) => {
				return (
					<SingleResource 
					key={resource.resource_id} 
					resource={resource}
					/>
				);
			})
			
			}
		</div>
	);
}

export default Resources;
