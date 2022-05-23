import React from "react";
import Resources from "../components/Resources";
import Background from "../images/home.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function Home() {
	return (
		<div className="Home">
			<div className="Hero" style={{ backgroundImage: `url(${Background})` }}>
				<div className="Hero-text">
					<h1>TIME TO EVEN THE PLAYING FIELD</h1>
					<h3>LINKING NYERS TO ESSENTIAL SERVICES </h3>
				</div>
				<div className="joinUs">
					<div>
						<h3>Join us become a</h3>
					</div>

					<div>
						<Link to="/mentors/create">
							<Button color="secondary" variant="text" size="large">
								Mentor
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="introduction">
				<h2>Begin Your Journey</h2>
				<div className="intro-container">
					<img
						alt="homeimg"
						src="https://nces.ed.gov/images/homepage/coe.jpg"
					/>
					<p>
						The goal of this app is to connect highschool, college students,
						minority groups and residents of underserved communities to
						resources that they wouldn’t have access to otherwise. Whether it be
						career tips , scholarships , grants, continued learning, programs,
						etc, We hope to bridge the the knowledge gap within these
						underserved communities. We want to eliminate the gatekeeping of
						much needed information and create a hub/gateway where people can
						easily find resources they desperately need to improve their quality
						of life.
					</p>
					<Resources />
				</div>
			</div>
		</div>
	);
}

export default Home;
