const db = require("../db/dbConfig.js");

//get all photos for about page
const getPhotos = async () => {
  try {
    const photos = await db.many("SELECT * FROM photos");
    return photos;
  } catch (error) {
    return error;
  }
};

//update an owner photo
const updatePhoto = async (owner) => {
  try {
    const updatedPhoto = await db.one(
      "UPDATE photos SET owner_name=$1, photo=$2 WHERE owner_name=$3 RETURNING *",
      [owner.owner_name, owner.photo, owner.owner_name]
    );
    return updatedPhoto;
  } catch (error) {
    return error;
  }
};
module.exports = {
  updatePhoto,
  getPhotos,
};
