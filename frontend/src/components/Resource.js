import React from "react";

import { Card, CardContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";

var cardStyle = {
    height: '450px',
    width: '350px',
}

function Resource({ resource }) {
    return (
        <div className="oneresource">
            <Card style={cardStyle} variant="outlined">
                <CardContent>

                    
                
                        <Link to={`/resources/${resource.resource_id}`}>
                        <Typography sx={{ fontSize: 'h3' }}>
                           <div>{resource.resource_name}</div>
                           </Typography>
                        </Link>
                   
                    <br />
                    <Typography sx={{ fontSize: 10 }}>
                        {resource.description}
                    </Typography>


                </CardContent>
            </Card>
        </div>
    )
}

export default Resource