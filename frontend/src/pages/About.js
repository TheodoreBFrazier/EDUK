import React from "react";
import "./About.css";

function About() {
	return (
		<div className="about">
			<div className="about-container-one">
				<h1 className='text-primary'>About Us</h1>
				<br />
				
				<div className="valueNmission">
					<h2>Our Values</h2>
					<br />
					<p>
						We assume responsibility for our collective strength by developing relationships, building diverse and inclusive coalitions, and challenging one another to be our best. We act with empathy and extend grace to ourselves and others.
					</p>
					{/* <img src="https://images.squarespace-cdn.com/content/v1/5d26ea9f65132d0001a99d08/1603103998537-XDZCOWZK5I512W7CDJD9/Our+Core+Values.png" alt="value" /> */}
				</div>

				<div className="valueNmission">
					{/* <img src="https://images.squarespace-cdn.com/content/v1/5d26ea9f65132d0001a99d08/1603103998537-XDZCOWZK5I512W7CDJD9/Our+Core+Values.png" alt="value" /> */}
					<h2>Mission and Vision</h2>
					<br />
					<p>
						Our goal is to connect highschool, college students,
						minority groups and residents of underserved communities to
						resources that they wouldn’t have access to otherwise. Whether it be
						career tips , scholarships , grants, continued learning, programs,
						etc, We hope to bridge the the knowledge gap within these
						underserved communities. We want to eliminate the gatekeeping of
						much needed information and create a gateway where people can
						easily find resources they desperately need to improve their quality
						of life.
					</p>
				</div>
				
			</div>
			<div className="about-container-two">
			<h2>Our Team</h2>
				<ul className="teammates">
					<li className="teammate">
						<img src="https://img.etimg.com/thumb/msid-88634316,width-525,height-393,imgsize-65126,resizemode-8,quality-100/tech/technology/tracking-the-buzz-in-tech.jpg" width = "500px" alt="David" />
						
						<p><h3>David Vidals</h3>
						<br />
						I joined Pursuit to jumpstart my career into coding and start creating and helping people. I hope to once day create an app/website that can help under served communities in New York. A fun Fact about me is that I love play video games.</p>
					</li>
					<li className="teammate">
						<p><h3>Lili Huang</h3>
						<br />
						I am a full stack developer. I wanted to become a software engineer because it can be creative  which means I am able to solve problems by putting myself in the users’ shoes and providing a solution. The ability to be creative in my work  is what truly empowers me to move forward and keep learning as an engineer.
						</p>
						<img src="https://www.investopedia.com/thmb/TID4EokOecUZzUw8N-YpAsj7BAI=/1885x1414/smart/filters:no_upscale()/GettyImages-964033964-ca3290057ccc4024b57e755423572264.jpg" width = "500px" alt="Lili" />
					</li>
					<li className="teammate">
						<img src="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg" width = "500px" alt="Mukayila" />
						<p><h3>Mukayila</h3>
						<br />
						Software engineering is all what I am passionate about now. I graduated from my University as a computer Networks and maintenance engineer. I will finish by saying that technology is driving our lives today and I can't wait to land my first job and contribute. 
						</p>
					</li>
					<li className="teammate">
						<p><h3>Nima</h3>
						<br />
						I am a Full-Stack Developer who loves creating projects and implementing new ideas . I am always seeking to expand my knowledge on tech , Ability to learn and implement new technologies quickly.
						</p>
						<img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1578710070/1578710068.jpg" width = "500px" alt="Nima" />
					</li>
					<li className="teammate">
						<img src="https://image.cnbcfm.com/api/v1/image/105510591-1539718864161tech-drivers-mezz-2018.jpg?v=1539718880" width = "500px"  alt="Theodore" />
						<p><h3>Theodore</h3>
						<br />
						I joined a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify. 
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
