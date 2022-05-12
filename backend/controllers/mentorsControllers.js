const express = require("express");
const mentors = express.Router();

const {
    getAllMentors,
    getOneMentor,
    createMentor,
    updateMentor,
    deleteMentor
} = require("../queries/mentors.js");

// Get all mentors
mentors.get("/", async(req, res) => {
    const allMentors = await getAllMentors();
    if(allMentors[0]) {
        res.json({success:true, result: allMentors});
    } else {
        res.status(500).json({ success: false, error: "server error..." });
    }
})

// Get one mentor 
mentors.get("/:mid", async(req, res) => {
    const {mid} = req.params;
    const mentor = await getOneMentor(mid);
    if(mentor.mentor_id){
        res.json({success: true, result: mentor});
    } else {
        res.status(500).json({ success: false, error: `server error, no mentor at index ${mid}` });
    }
})

// Create a mentor
mentors.post("/", async(req, res) => {
    const mentor = req.body;
    const createdMentor = await createMentor(mentor);
    if(createdMentor.mentor_id){
        res.json({success: true, result: mentor});
    } else {
        res.status(500).json({ success: false, error: "unable to create mentor..." });
    }
})

// Update a mentor
mentors.put("/:mid", async(req, res) => {
    const mentor = req.body;
    const {mid} = req.params;
    const updatedMentor = await updateMentor(mid, mentor);
    if(updatedMentor.mentor_id){
        res.json({success: true, result: updatedMentor});
    } else {
        res.status(500).json({ success: false, error: `unable to update mentor ${mid}` });
    }
})

// Delete a mentor
mentors.delete("/:mid", async(req, res) => {
    const {mid} = req.params;
    const deletedMentor = await deleteMentor(mid);
    if(deletedMentor.mentor_id){
        res.json({success: true, result: deletedMentor})
    } else {
        res.status(500).json({ success: false, error: `unable to delete mentor ${mid}` });
    }
})

module.exports = mentors;
