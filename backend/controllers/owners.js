const express = require("express");
const path = require("path");
const owners = express.Router();
//owners queries functions
const { updatePhoto, getPhotos } = require("../queries/ownersPhotos.js");

//get all photos
owners.get("/photos", async (req, res) => {
  const photos = await getPhotos();
  if (photos[0]) res.json({ success: true, result: photos });
  else
    res.status(404).json({ success: false, error: "sorry error, no photos" });
});

//create image for owners about page
owners.post("/:owner/upload", (req, res) => {
  const { owner } = req.params;
  if (!req.files) {
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }
  const file = req.files.file;
  let reqPath = path.join(__dirname, "../..");
  // fetch the file extension
  // const extensionName = path.extname(file.name);
  // const fileN = owner + extensionName;
  file.mv(`${reqPath}frontend/public/assets/${file.name}`, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    const ownerObj = { owner_name: owner, photo: `/assets/${file.name}` };
    const updatedPhoto = await updatePhoto(ownerObj);
    if (updatedPhoto.photo_id) {
      return res.json({
        ownerName: owner,
        fileName: file.name,
        filePath: `/assets/${file.name}`,
      });
    }
    return res
      .status(500)
      .json({ success: false, error: "Error while uploading the photo" });
  });
});

module.exports = owners;
