// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const usersController = require("./controllers/usersControllers.js");
const resourcesController = require("./controllers/resourcesControllers.js");
const mentorsController = require("./controllers/mentorsControllers.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
// Parse incoming JSON
app.use(express.json());

app.use("/users", usersController);
//resources controller
app.use("/resources", resourcesController);
//mentors controller
app.use("/mentors", mentorsController);
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Welcome To Rose App");
});

app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
