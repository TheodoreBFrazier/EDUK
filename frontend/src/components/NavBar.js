import React from "react"

//importing Link function

import { Link } from "react-router-dom"

// importing button from material UI

import { Button } from "@mui/material"


export default function NavBar() {
    return (
        <nav className="navigation">
            <Link to="/">
                <div className="logo-text">
                    
                <h2> EDUK </h2>

                </div>
            </Link>


            <Link to="/resources">
                
                <h4> Resources </h4>
            </Link>

            <Link to="/about">
                <h4> About </h4>
            </Link>
            
            <Link to="/mentors">
                <h4> Test Mentors </h4>
   
            </Link>
            
            <Button variant='contained'>
                <Link to="/users"> MEMBERS </Link>
            </Button>
        </nav >
    )
}