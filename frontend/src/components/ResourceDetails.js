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

        <div className="resource-heading">
            <h1> {resource.resource_name} </h1>
        </div>
        <br />
        <br />
        <div className="resource-text">
            <p> {resource.description} </p>
            <div class="visit-site-button">
                <Link to={`/resources/${resource.resource_url}`}>
                    <button className>
                        Visit {resource.resource_name}
                    </button>
                </Link>
            </div>
        </div>
        <div className="resource-photo">
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
    </article >

}



export default ResourceDetails