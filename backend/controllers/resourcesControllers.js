const express = require("express");
const resources = express.Router({ mergeParams: true });

const {
  getAllResources,
  getOneResource,
  createResource,
  deleteResource,
  updateResource,
} = require("../queries/resources");

// get all resources
resources.get("/", async (req, res) => {
  const { uid } = req.params;
  const resources = await getAllResources(uid);
  if (resources[0]) {
    res.json({ success: true, result: resources });
  } else res.status(500).json({ success: false, error: "server error..." });
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

// create a resource

resources.post("/", async (req, res) => {
  const resource = req.body;
  const createdResouce = await createResource(resource);
  if (createdResouce.resource_id) {
    res.json({ success: true, result: createdResouce });
  } else {
    res
      .status(500)
      .json({ success: false, error: "unable to create resource..." });
  }
});

// delete a resource

resources.delete("/:resource_id", async (req, res) => {
  const { resource_id } = req.params;
  const deletedResource = await deleteResource(resource_id);
  if (deletedResource.resource_id) {
    res.json({ success: true, result: deletedResource });
  } else
    res.status(500).json({
      success: false,
      error: `unable to delete resources ${resource_id}`,
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
      error: `unable to update resource ${resource_id}`,
    });
});

module.exports = resources;
