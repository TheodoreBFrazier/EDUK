const db = require("../db/dbConfig.js");

// Get all mentors
const getAllMentors = async() => {
    try {
        const mentors = await db.many("SELECT * FROM mentors");
        return mentors;
    } catch (error) {
        return error;
    }
}

// Get one mentor
const getOneMentor = async(mid) => {
    try {
        const mentor = await db.one("SELECT * FROM mentors WHERE mentor_id=$1",mid);
        return mentor;
    } catch (error) {
        return error;
    }
}

// Create a mentor
const createMentor = async(mentor)=> {
    try {
        const createdMentor = await db.one("INSERT INTO mentors(mentor_fname, mentor_lname, bio, email, speciality) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [mentor.mentor_fname, mentor.mentor_lname, mentor.bio, mentor.email, mentor.speciality]);
        return createdMentor;
    } catch (error) {
        return error;
    }
}

// Update a mentor
const updateMentor = async(mid, mentor)=> {
    try {
        const updatedMentor = await db.one("UPDATE mentors SET mentor_fname=$1, mentor_lname=$2, bio=$3, email=$4, speciality=$5, is_verified=$6 WHERE mentor_id=$7 RETURNING *",
        [mentor.mentor_fname, mentor.mentor_lname, mentor.bio, mentor.email, mentor.speciality,mentor.is_verified, mid]);
        return updatedMentor;
    } catch (error) {
        return error;
    }
}

//Delete a mentor
const deleteMentor = async(mid)=> {
    try {
        const deletedMentor = await db.one("DELETE FROM mentors WHERE mentor_id=$1 RETURNING *",mid);
        return deletedMentor
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllMentors,
    getOneMentor,
    createMentor,
    updateMentor,
    deleteMentor
}