import React from "react";
import "./About.css";

function About() {
	return (
		<div className="about">
			<div className="about-container-one">
				<div className="valueNmission">
					<div>
						<h2 id="our_values">Our Values</h2>
						<br />
						We assume responsibility for our collective strength by developing
						relationships, building diverse and inclusive coalitions, and
						challenging one another to be our best. We act with empathy and
						extend grace to ourselves and others. We accelerate each other and
						are accountable to each other to deliver on our vision.
					</div>
					{/* <img src="https://blog.vantagecircle.com/content/images/2019/07/company-core-values.png" alt="value" /> */}
				</div>

				<div className="valueNmission">
					<div>
						<h2 id="our_mission">Mission & Vision</h2>
						<br />
						Our goal is to connect high school, college students, minorities and
						residents of underserved communities with resources they can't get
						elsewhere. Whether it's be career skills , scholarships , grants,
						continued learning, programs, etc., we want to bridge the the
						knowledge gap within these underserved communities. We want to
						eliminate the gatekeeping of much needed information and create a
						portal where people can easily find resources they desperately need
						to improve their quality of life.
					</div>
					{/* <img src="https://i0.wp.com/www.kouya.net/wp-content/uploads/2019/09/mission-900x450.jpg?fit=900%2C450&ssl=1" alt="mission" /> */}
				</div>
			</div>
			<div className="about-container-two" id="our_team">
				<h2>Our Team</h2>
				<ul className="teammates">
					<li className="teammate">
						<img
							src="https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg"
							width="500px"
							alt="David"
						/>

						<div className="intro">
							<h3>David Vidals</h3>
							<br />I joined Pursuit to jumpstart my career into coding and
							start creating and helping people. I hope to once day create an
							app/website that can help under served communities in New York. A
							fun Fact about me is that I love play video games.
						</div>
					</li>
					<li className="teammate">
						<div className="intro">
							<h3>Lili Huang</h3>
							<br />I am a full stack developer. I wanted to become a software
							engineer because it can be creative which means I am able to solve
							problems by putting myself in the users’ shoes and providing a
							solution. The ability to be creative in my work is what truly
							empowers me to move forward and keep learning as an engineer.
						</div>
						<img
							src="https://www.investopedia.com/thmb/TID4EokOecUZzUw8N-YpAsj7BAI=/1885x1414/smart/filters:no_upscale()/GettyImages-964033964-ca3290057ccc4024b57e755423572264.jpg"
							width="500px"
							alt="Lili"
						/>
					</li>
					<li className="teammate">
						<img
							src="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
							width="500px"
							alt="Mukayila"
						/>
						<div className="intro">
							<h3>Mukayila Alao</h3>
							<br />
							Software engineering is all what I am passionate about now. I
							graduated from my University as a computer Networks and
							maintenance engineer. I will finish by saying that technology is
							driving our lives today and I can't wait to land my first job and
							contribute.
						</div>
					</li>
					<li className="teammate">
						<div className="intro">
							<h3>Nima Sherpa</h3>
							<br />I am a Full-Stack Developer who loves creating projects and
							implementing new ideas . I am always seeking to expand my
							knowledge on tech , Ability to learn and implement new
							technologies quickly.
						</div>
						<img
							src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1578710070/1578710068.jpg"
							width="500px"
							alt="Nima"
						/>
					</li>
					<li className="teammate">
						<img
							src="https://image.cnbcfm.com/api/v1/image/105510591-1539718864161tech-drivers-mezz-2018.jpg?v=1539718880"
							width="500px"
							alt="Theodore"
						/>
						<div className="intro">
							<h3>Theodore Frazier</h3>
							<br />I joined a 12-month, Google-funded software engineering
							fellowship with a 9% acceptance rate whose graduates have been
							hired as developers at leading companies such as Pinterest, JP
							Morgan, and Spotify.
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
