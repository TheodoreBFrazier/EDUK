import React from "react";
import { useState, useEffect } from "react";
import Mentor from "./Mentor.js";
import axios from "axios";

function AllMentors(){
    const [mentors, setMentors] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
          .get(API + "/mentors")
          .then((response) => {
            console.log(response);
            setMentors(response.data.result);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
        <section className="users">
            {mentors.map((mentor)=>{
                return <Mentor key ={mentors.mentor_id} mentor={mentor} />
            })}

        </section>
    )
}

export default AllMentors;