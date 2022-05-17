import React from "react";

//Link from React 

import { Link } from "react-router-dom"

// Material UI importing 

import { Button } from "@mui/material"

function Home() {
    return (
        <div className="Home">
    
            <div className="Hero">
                <div className="Hero-text">
                    <h1>Time to even <br/> the playing field </h1>
                    <p> Linking New Yorkers to essential services.  </p>
                </div>
            </div>
            <div className="introduction">
                <h2>Begin Your Journey</h2>
                <p>We belive nobody should be left behind. Because of this, we help peoplewho are helping people.
                    <br />Upstream's impact is greatest when we work as ONE.  </p>
                <Button variant='contained'>
                    <Link to="/about"> About Us </Link>
                </Button>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Home;