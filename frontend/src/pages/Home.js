import React from "react";
import Background from "../images/home.jpg";
import { Link } from "react-router-dom";

const HorizontalRule = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5,
			width: 100,
		}}
	/>
);



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
				<div className="why-eduk">
					<h1>
						SERVICES WITH YOU IN MIND
					</h1>

					<HorizontalRule color="black" />

					<div className="services-icons">
						<div className="icons-mentor">
							<img src="https://cdn-icons-png.flaticon.com/128/767/767388.png" alt="helping" />

							<p> A selection of mentors <br />
								to help you achieve your gails <br />
							</p>

						</div>

						<div className="icons-mentor">
							<img src="https://cdn-icons-png.flaticon.com/128/767/767388.png" alt="helping" />

							<p> A selection of mentors <br />
								to help you achieve your gails <br />
							</p>

						</div>


						<div className="icons-resources">
							<img src="https://cdn-icons-png.flaticon.com/128/500/500425.png" alt="resources" />

							<p> A selection of mentors <br />
								to help you achieve your gails <br />
							</p>

						</div>

						<div className="icons-resources">
							<img src="https://cdn-icons-png.flaticon.com/128/500/500425.png" alt="resources" />

							<p> A selection of mentors <br />
								to help you achieve your gails <br />
							</p>

						</div>						

					</div>


				</div>
			</div>
		</div >

	);


}

export default Home;
