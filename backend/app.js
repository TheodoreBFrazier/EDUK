// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
// Parse incoming JSON
app.use(express.json());

app.use("/users", usersControllers);

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome To Rose App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
