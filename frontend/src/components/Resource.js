import React from "react";

import { Card } from "@mui/material";

import { Link } from "react-router-dom";

var cardStyle = {
    height: '400px',
    width: '300px',
}

function Resource({ resource }) {
    return (
        <div className="oneresource">
            <Card style = {cardStyle} variant = "outlined">
            <Link to={`/resources/${resource.resource_id}`}>
                <p>{resource.resource_name}</p>
            </Link>
            </Card>
        </div>
    )
}

export default Resource