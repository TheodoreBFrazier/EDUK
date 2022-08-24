// DEPENDENCIES
const cors = require("cors");
const express = require("express");
// import passport;
const passport = require("passport");
// import session
const session = require("express-session");

// const fileUpload = require("express-fileupload");
const usersController = require("./controllers/usersControllers.js");
const resourcesController = require("./controllers/resourcesControllers.js");
const mentorsController = require("./controllers/mentorsControllers.js");
const authController = require("./controllers/authController.js");
const owners = require("./controllers/owners");

require("dotenv").config();

// CONFIGURATION
const app = express();

// app.options("*", cors()); // i

// MIDDLEWARE.
app.use(
	cors({
		origin: process.env.ORIGIN,
		optionsSuccessStatus: 200,
		credentials: true,
	})
);

// Parse incoming JSON
app.use(express.json());

// session middleware
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		// store: sessionStore,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

// initialize the passport js middleware ;
app.use(passport.initialize());
// serialize and desarilize
app.use(passport.session());
//auth controller
app.use("/auth", authController);

// /users/1/resources
app.use("/users", usersController);

//resources controller
// /resources/1/users
app.use("/resources", resourcesController);
//mentors controller
app.use("/mentors", mentorsController);
// owners controllers
app.use("/owners", owners);
//multer
// console.log("underscoredirname", __dirname + "/uploads");
app.use(express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
	res.send("Welcome To EDUK App");
});

app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
