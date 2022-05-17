import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

//Importing the single resource
import SingleResource from "./SingleResource";


const API = process.env.REACT_APP_API_URL;

function ResourceIndex () {
    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get(API + "/resources")
            .then((response) => {
                console.log(response)
                setResources(response.data.result);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (

        <div className="resource-arr">

            {resources.map((resource) => {
                return <SingleResource key={resource.resource_id} resource={resource} />
            })}

        </div>

    )

}

export default ResourceIndex ;