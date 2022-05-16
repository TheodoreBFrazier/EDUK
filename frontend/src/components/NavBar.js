import React from "react"

//importing Link function

import { Link } from "react-router-dom"


// importing button from material UI

import { Button } from "@mui/material"


export default function NavBar() {
    return (
        <nav className="navigation">
            <Link to="/">
                <h3> Home </h3>
            </Link>
            <Link to="/resources">
                <h3> Resources </h3>
            </Link>
            <Link to="/about">
                <h3> About </h3>
            </Link>


            <Button variant='contained'>
                <Link to="/users"> User Portal</Link>
            </Button>
        </nav>
    )
}