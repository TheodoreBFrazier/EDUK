const passport = require("passport");
const LocalStrategy = require("passport-local");
const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

// changing the field for the passport ,, if you have a different field name ;
const customFields = {
	usernameField: "user_name",
	password: "password",
};

async function verifyCallback(username, password, done) {
	const user = await db.one(
		"SELECT * FROM users WHERE user_name=$1",
		user_name
	);
	// checking if the user exist;
	if (!user.uid) return done(null, false);

	const isValid = await bcrypt.compare(password, user.password);
	// if the user is there and the password is correct
	// send the information..
	if (isValid) {
		return done(null, user);
	} else {
		return done(null, false);
	}
}

const strategy = new LocalStrategy();
