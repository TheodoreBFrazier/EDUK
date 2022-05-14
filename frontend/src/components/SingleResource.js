import React from "react";

import { Link } from "react-router-dom";

function SingleResource({ resource }) {
    return (
        <div className="resource">
            <Link to={`/resources/${resource.resource_id}`} >

                <h1> {resource.resource_name} </h1>

            </Link>
        </div>
    )
}

export default SingleResource