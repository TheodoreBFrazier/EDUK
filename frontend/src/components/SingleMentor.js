import React from "react";

import { Link } from "react-router-dom";

import { Card } from "@mui/material";

var cardStyle = {
    height: '400px',
    width: '250px'
}

function SingleMentor({ mentor }) {
    return (
        <div className="mentor-card">
            <Card style={cardStyle} variant="outlined">
                <Link to={`/mentors/${mentor.mentor_id}`} >

                    <h4> {mentor.mentor_fname} {mentor.mentor_lname} </h4>
                    <p> {mentor.speciality}</p>
                </Link>
            </Card>
        </div>
    )
}

export default SingleMentor;