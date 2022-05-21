const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

const authUser = async (user_name, password) => {
  try {
    const user = await db.one(
      "SELECT * FROM users WHERE user_name=$1",
      user_name
    );

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user.uid;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  authUser,
};
