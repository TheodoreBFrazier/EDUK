const db = require("../db/dbConfig.js");

//all users
const getAllUsers = async () => {
  try {
    const users = await db.many("SELECT * FROM users");
    return users;
  } catch (error) {
    return error;
  }
};

//get a user
const getOneUser = async (uid) => {
  try {
    const user = await db.one("SELECT * FROM users WHERE uid=$1", uid);
    return user;
  } catch (error) {
    return error;
  }
};

//create a user
const createUser = async (user) => {
  try {
    const createdUser = await db.one(
      "INSERT INTO users(first_name,last_name,age,email) VALUES($1,$2,$3,$4) RETURNING *",
      [user.first_name, user.last_name, user.age, user.email]
    );
    return createdUser;
  } catch (error) {
    return error;
  }
};

//delete a user
const deleteUser = async (uid) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE uid=$1 RETURNING *",
      uid
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

//update a user
const updateUser = async (uid, user) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET first_name=$1, last_name=$2, age=$3, email=$4, mentor_id=$5 WHERE uid=$6 RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.age,
        user.email,
        user.mentor_id ? user.mentor_id : null,
        uid,
      ]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};
module.exports = {
  updateUser,
  deleteUser,
  createUser,
  getAllUsers,
  getOneUser,
};
