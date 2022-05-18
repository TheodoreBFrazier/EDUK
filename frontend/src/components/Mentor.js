import React from "react";

function Mentor({mentor}){

    return(
        <div>
            <h3>{mentor.mentor_fname}</h3>
            <h3>{mentor.mentor_lname}</h3>
            <div>{mentor.bio}</div>
            <div>{mentor.email}</div>
            <div>{mentor.specialty}</div>
        </div>
    )
}

export default Mentor;