const express = require("express");
const path = require("path");
const owners = express.Router();

//create image for owners about page
owners.post("/:owner/upload", (req, res) => {
  const { owner } = req.params;
  if (!req.files) {
    console.log("No file uploaded");
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }
  const file = req.files.file;
  let reqPath = path.join(__dirname, "../..");
  file.mv(`${reqPath}/frontend/public/assets/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    return res.json({
      ownerName: owner,
      fileName: file.name,
      filePath: `/assets/${file.name}`,
    });
  });
});

module.exports = owners;
