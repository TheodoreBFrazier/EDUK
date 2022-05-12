const db = require("../db/dbConfig.js");

// all resources
const getAllResources = async () => {
	try {
		const resources = await db.many("SELECT * FROM resources");
		return resources;
	} catch (error) {
		return error;
	}
};
s;
// get a resource
const getOneResource = async (resource_id) => {
	try {
		const resource = await db.one(
			"SELECT * FROM resources WHERE resource_id=$1",
			resource_id
		);
		return resource;
	} catch (error) {
		return error;
	}
};

// creaete a resourcs
const createResource = async (resource) => {
	try {
		const createdResouce = await db.one(
			"INSERT INTO resources(resource_name,description,resource_category,start_datetime, end_datetime, url) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
			[
				resource.resource_name,
				resource.description,
				resource.resource_category,
				resource.start_datetime,
				resource.end_datetime,
				resource.url,
			]
		);
		return createdResouce;
	} catch (error) {
		return error;
	}
};

// delete a resource

const deleteResource = async (resource_id) => {
	try {
		const deletedResource = await db.one(
			"DELETE FROM resources WHERE resource_id=$1 RETURNING *",
			resource_id
		);
		return deletedResource;
	} catch (error) {
		return error;
	}
};

// update a resources

const updateResource = async (resource_id, resource) => {
	try {
		const updatedResource = await db.one(
			"UPDATE resources SET resource_name=$1, description=$2, resource_category=$3, start_datetime=$4, end_datetime=$5, url=$6 WHERE resource_id=$7 RETURNING *",
			[
				resource.resource_name,
				resource.description,
				resource.resource_category,
				resource.start_datetime,
				resource.end_datetime,
				resource.url,
				resource_id,
			]
		);
		return updatedResource;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllResources,
	getOneResource,
	createResource,
	deleteResource,
	updateResource,
};
