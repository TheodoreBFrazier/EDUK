const express = require("express");
const path = require("path");
const mentors = express.Router();

const {
  getAllMentors,
  getOneMentor,
  createMentor,
  updateMentor,
  deleteMentor,
} = require("../queries/mentors.js");

// Get all mentors
mentors.get("/", async (req, res) => {
  const allMentors = await getAllMentors();
  if (allMentors[0]) {
    res.json({ success: true, result: allMentors });
  } else {
    res.status(500).json({ success: false, error: "server error..." });
  }
});

// Get one mentor
mentors.get("/:mid", async (req, res) => {
  const { mid } = req.params;
  const mentor = await getOneMentor(mid);
  if (mentor.mentor_id) {
    res.json({ success: true, result: mentor });
  } else {
    res.status(500).json({
      success: false,
      error: `server error, no mentor at index ${mid}`,
    });
  }
});

// Create a mentor
mentors.post("/", async (req, res) => {
  const mentor = req.body;
  const createdMentor = await createMentor(mentor);
  if (createdMentor.mentor_id) {
    res.json({ success: true, result: mentor });
  } else {
    res
      .status(500)
      .json({ success: false, error: "unable to create mentor..." });
  }
});
//update mentor image
//update user image
mentors.post("/:mentor_id/upload", async (req, res) => {
  const { mentor_id } = req.params;
  if (!req.files) {
    console.log("No file uploaded");
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }
  const file = req.files.file;
  let reqPath = path.join(__dirname, "../..");
  file.mv(`${reqPath}/frontend/public/assets/${file.name}`, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    const mentor = await getOneMentor(mentor_id);

    if (mentor.mentor_id) {
      mentor.mentor_image = `/assets/${file.name}`;
      // console.log(user);
      var updatedMentor = await updateMentor(mentor_id, mentor);
    }

    try {
      // console.log(updatedMentor.mentor_id);
      if (updatedMentor.mentor_id)
        return res.json({
          fileName: file.name,
          filePath: `/assets/${file.name}`,
        });
    } catch (error) {
      console.log(error);
    }
  });
});

// Update a mentor
mentors.put("/:mid", async (req, res) => {
  const mentor = req.body;
  const { mid } = req.params;
  const updatedMentor = await updateMentor(mid, mentor);
  if (updatedMentor.mentor_id) {
    res.json({ success: true, result: updatedMentor });
  } else {
    res
      .status(500)
      .json({ success: false, error: `unable to update mentor ${mid}` });
  }
});

// Delete a mentor
mentors.delete("/:mid", async (req, res) => {
  const { mid } = req.params;
  const deletedMentor = await deleteMentor(mid);
  if (deletedMentor.mentor_id) {
    res.json({ success: true, result: deletedMentor });
  } else {
    res
      .status(500)
      .json({ success: false, error: `unable to delete mentor ${mid}` });
  }
});

module.exports = mentors;
