const express = require("express");
const users = express.Router();

//users queries functions
const {
  updateUser,
  deleteUser,
  createUser,
  getAllUsers,
  getOneUser,
} = require("../queries/users.js");

//get all users
users.get("/", async (req, res) => {
  const users = await getAllUsers();
  if (users[0]) {
    res.json({ success: true, result: users });
  } else res.status(500).json({ success: false, error: "server error..." });
});

//get a User
users.get("/:uid", async (req, res) => {
  const { uid } = req.params;

  const user = await getOneUser(uid);
  if (user.uid) {
    res.json({ success: true, result: user });
  } else
    res
      .status(500)
      .json({ success: false, error: `server error, no user at index ${uid}` });
});

//create a user
users.post("/", async (req, res) => {
  const user = req.body;
  const createdUser = await createUser(user);
  if (createdUser.uid) {
    res.json({ success: true, result: createdUser });
  } else
    res.status(500).json({ success: false, error: "unable to create user..." });
});

//delete User
users.delete("/:uid", async (req, res) => {
  const { uid } = req.params;
  const deletedUser = await deleteUser(uid);
  if (deletedUser.uid) {
    res.json({ success: true, result: deletedUser });
  } else
    res
      .status(500)
      .json({ success: false, error: `unable to delete user ${uid}` });
});

//update a user
users.put("/:uid", async (req, res) => {
  const { uid } = req.params;
  const user = req.body;
  const updatedUser = await updateUser(uid, user);
  if (updatedUser.uid) {
    res.json({ success: true, result: updatedUser });
  } else
    res
      .status(500)
      .json({ success: false, error: `unable to update user ${uid}` });
});

module.exports = users;
