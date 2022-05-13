const express = require("express");
const resources = express.Router();
//users controller
// const usersController = require("./usersControllers.js");

const {
  getAllResources,
  getOneResource,
  createResource,
  deleteResource,
  updateResource,
} = require("../queries/resources");
const { getAllUsers } = require("../queries/users.js");

//merge users controller to resources controller
//resources.use("/:resource_id/users", usersController);

// get all resources
resources.get("/", async (req, res) => {
  const { uid } = req.params;
  const resources = await getAllResources(uid);
  if (resources[0]) {
    res.json({ success: true, result: resources });
  } else res.status(500).json({ success: false, error: resources });
});

// get a resource
resources.get("/:resource_id", async (req, res) => {
  const { uid, resource_id } = req.params;
  const resource = await getOneResource(uid, resource_id);
  if (resource.resource_id) {
    res.json({ success: true, result: resource });
  } else {
    res.status(500).json({
      success: false,
      error: `server error, no resource at index ${resource_id}`,
    });
  }
});

//get all users using a specific resource
resources.get("/:resource_id/users", async (req, res) => {
  const { resource_id } = req.params;
  const users = await getAllUsers(resource_id);
  if (users[0]) {
    res.json({ success: true, result: users });
  } else res.status(500).json({ success: false, error: users });
});

// create a resource
resources.post("/", async (req, res) => {
  const resource = req.body;
  const { uid } = req.params;
  const createdResouce = await createResource(uid, resource);
  if (createdResouce.resource_id) {
    res.json({ success: true, result: createdResouce });
  } else {
    res.status(500).json({ success: false, error: createdResouce });
  }
});

// delete a resource

resources.delete("/:resource_id", async (req, res) => {
  const { uid, resource_id } = req.params;
  const deletedResource = await deleteResource(uid, resource_id);
  if (deletedResource.resource_id) {
    res.json({ success: true, result: deletedResource });
  } else
    res.status(500).json({
      success: false,
      error: deletedResource,
    });
});

// update a resoucrs

resources.put("/:resource_id", async (req, res) => {
  const { resource_id } = req.params;
  const resource = req.body;
  const updatedResource = await updateResource(resource_id, resource);
  if (updatedResource.resource_id) {
    res.json({ success: true, result: updatedResource });
  } else
    res.status(500).json({
      success: false,
      error: updatedResource,
    });
});

module.exports = resources;
