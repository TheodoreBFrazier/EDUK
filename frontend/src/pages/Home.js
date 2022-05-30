import React from "react";
import Background from "../images/home.jpg";
import { Link } from "react-router-dom";



function Home() {
	return (
		<div className="Home">
			<div className="Hero" style={{ backgroundImage: `url(${Background})` }}>
				<div className="Hero-text">
					<h1>TIME TO EVEN <br /> THE PLAYING FIELD</h1>
					<h3>Linking NYers in underserved communities with essential career and education services.</h3>
				</div>
				<div className="joinUs">
					<div>
						<div>
							<Link to="/mentors/create">
								<button>
									<h3>Join us become a Mentor</h3>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="introduction">
				<h1>Begin Your Journey</h1>
				<div className="intro-container">
					<img
						alt="homeimg"
						src="https://nces.ed.gov/images/homepage/coe.jpg"
					/>
					<p>
						The goal of EDUK to connect highschool, college students,
						minority groups and residents of underserved communities to
						resources that they wouldn’t have access to otherwise. <br /> <br /> Whether it be
						career tips , scholarships , grants, continued learning, programs,
						etc, We hope to bridge the the knowledge gap within these
						underserved communities. We want to eliminate the gatekeeping of
						much needed information and create a hub/gateway where people can
						easily find resources they desperately need to improve their quality
						of life.
					</p>
				</div>
			</div>
		</div>

	);


}

export default Home;
