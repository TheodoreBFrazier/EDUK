const db = require("../db/dbConfig.js");

// all resources and resources of a specific user
const getAllResources = async (uid) => {
	try {
		if (uid) {
			var resources = await db.many(
				"SELECT * FROM resources WHERE resource_id IN (SELECT resource_id FROM users_resources WHERE uid=$1)",
				uid
			);
		} else {
			var resources = await db.many("SELECT * FROM resources");
		}
		return resources;
	} catch (error) {
		return error;
	}
};

// get a resource
const getOneResource = async (uid, resource_id) => {
	try {
		//if uid is not null
		if (uid) {
			var resource = await db.one(
				"SELECT * FROM resources WHERE resource_id IN (SELECT resource_id FROM users_resources WHERE uid=$1) AND resource_id=$2",
				[uid, resource_id]
			);
		}
		//if uid is null
		else {
			var resource = await db.one(
				"SELECT * FROM resources WHERE resource_id=$1",
				resource_id
			);
		}

		return resource;
	} catch (error) {
		return error;
	}
};

// creaete a resourcs
<<<<<<< HEAD
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
=======
// /users/uid/resources
// /resources
const createResource = async (uid, resource) => {
  try {
    //add uid and resource_id into the join table(user add a resource to his profile)
    if (uid) {
      const user_resource = await db.one(
        "INSERT INTO users_resources(uid, resource_id) VALUES($1,$2) RETURNING*",
        [uid, resource.resource_id]
      );
      return user_resource;
    }

    //create a new resource
    else {
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
    }
  } catch (error) {
    return error;
  }
>>>>>>> 15e96e5e489735e3278e717c3b7e89caba78ff61
};

// delete a resource

<<<<<<< HEAD
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
=======
const deleteResource = async (uid, resource_id) => {
  try {
    //user removes a resource from his profile
    if (uid) {
      const removedResource = await db.one(
        "DELETE FROM users_resources WHERE uid=$1 AND resource_id=$2 RETURNING *",
        [uid, resource_id]
      );
      return removedResource;
    }
    //delete a resource from the database
    else {
      const deletedResource = await db.one(
        "DELETE FROM resources WHERE resource_id=$1 RETURNING *",
        resource_id
      );
      return deletedResource;
    }
  } catch (error) {
    return error;
  }
>>>>>>> 15e96e5e489735e3278e717c3b7e89caba78ff61
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
