import React from "react";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";



const API = process.env.REACT_APP_API_URL;

function ResourceDetails() {
    const [resource, setResource] = useState({});
    let { resource_id } = useParams();


    useEffect(() => {
        axios.get(API + "/resources/" + resource_id)
            .then((response) => {
                console.log(response)
                setResource(response.data.result)
                console.log(setResource)
            }).catch((error) => {
                console.log(error);
            })
    }, [resource_id]);


    return <article>
 
            <Link to={`/resources/${resource.resource_id}`} >
                <h4> {resource.resource_name} </h4>
            </Link>
            <p> {resource.description} </p>

    </article>

}



export default ResourceDetails