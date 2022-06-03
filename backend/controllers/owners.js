const express = require("express");
// const path = require("path");
const owners = express.Router();
//owners queries functions
const { updatePhoto, getPhotos } = require("../queries/ownersPhotos.js");
//multer
const upload = require("../multer.js");

//get all photos
owners.get("/photos", async (req, res) => {
  const photos = await getPhotos();
  if (photos[0]) res.json({ success: true, result: photos });
  else
    res.status(404).json({ success: false, error: "sorry error, no photos" });
});

//create image for owners about page
owners.post("/:owner/upload", upload.single("photo"), async (req, res) => {
  const { owner } = req.params;
  console.log(owner);
  const file = req.file;

  const ownerObj = { owner_name: owner, photo: file.filename };
  const updatedPhoto = await updatePhoto(ownerObj);
  if (updatedPhoto.photo_id) {
    return res.json({
      success: true,
    });
  }
  return res
    .status(500)
    .json({ success: false, error: "Error while uploading the photo" });
});

module.exports = owners;
