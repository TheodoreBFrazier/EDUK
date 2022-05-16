import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";


const API = process.env.REACT_APP_API_URL;

function Mentors() {
    const [mentors, setmentors] = useState([])

    useEffect(() => {
        axios.get(API + "/mentors")
            .then((response) => {
                setmentors(response.data.result)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="mentors-array">

            {mentors.map((mentor) => {
                //SingleMentor JSX
            })

            }

        </div>
    )

}