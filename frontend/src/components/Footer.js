import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		// <section className="footer-container">
		// 	<div className="footer-container-one">
		// 		<div className="footer-box">
		// 			<Link to="/about">
		// 				<h4> About us </h4>
		// 			</Link>
		// 			<ul className="box-list">
		// 				<li>
 		// 					<a href="/about#our_team">Our Team</a>
 		// 				</li>
 		// 				<li>
 		// 					<a href="/about#our_values">Our Values</a>
 		// 				</li>
 		// 				<li>
 		// 					<a href="/about#our_mission">Mission and Vision</a>
 		// 				</li>
		// 			</ul>
		// 		</div>
		// 		<div className="footer-box">
		// 			<Link to="/about">
		// 				<h4> Get Involved </h4>
		// 			</Link>
		// 			<ul className="box-list">
		// 				<Link to="/mentor/sign-up">
		// 					<li>Volunteer</li>
		// 				</Link>
		// 				<li>Donate</li>
		// 				<li>Careers</li>
		// 			</ul>
		// 		</div>
		// 		<div className="footer-box">
		// 			<h4> Contact Us </h4>

		// 			<ul className="box-list">
		// 				<li>EDUK Headquarters</li>
		// 				<li>123 West 123rd street, #123</li>
		// 				<li>New York, NY 1234</li>
		// 			</ul>
		// 		</div>
		// 		<div className="footer-logo">
		// 			<Link to="/resources">
		// 				{" "}
		// 				<img
		// 					className="footer-logo"
		// 					alt="footer-img"
		// 					src="https://yt3.ggpht.com/HQFE9jg1UOTzg3xEW116MA7uJpKR4BG2HIo2sQZx-0BnZu1py9fLBggljyPXBcNl6uui_MoW7tY=s900-c-k-c0x00ffffff-no-rj"
		// 				/>
		// 			</Link>
		// 		</div>
		// 	</div>
		// 	<div className="footer-container-two">
		// 		<div className="footer-right">
		// 			Copyright EDUK.com 2022. All rights reserved.
		// 		</div>
		// 		<div className="icons">
		// 			<a href="#" className="fa fa-facebook"></a>
		// 			<a href="#" className="fa fa-twitter"></a>
		// 			<a href="#" className="fa fa-linkedin"></a>
		// 		</div>
		// 	</div>
		// </section>

		//////////
		<div class="footer-dark">
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-sm-6 col-md-3 item">
							<h3>About us</h3>
							<ul>
								<li>
									<a href="/about#our_team">Our Team</a>
								</li>
								<li>
									<a href="/about#our_values">Our Values</a>
								</li>
								<li>
									<a href="/about#our_mission">Mission and Vision</a>
								</li>
							</ul>
						</div>

						<div class="col-sm-6 col-md-3 item">
							<h3>Get Involved</h3>
							<ul>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">Donate</a>
								</li>
								<li>
									<a href="/mentors/create#volunteers">Volunteers</a>
								</li>
							</ul>
						</div>

						<div class="col-md-6 item text">
							<h3>Contact Us</h3>
							<p>EDUK Heaquarters</p>
							<p>123 West 123r street, #123</p>
							<p>New York, NY 1234</p>
						</div>

						<div class="col item social">
							<a href="#" className="fa fa-facebook"></a>
							<a href="#" className="fa fa-twitter"></a>
							<a href="#" className="fa fa-linkedin"></a>
						</div>
					</div>

					<p class="copyright">Copyright EDUK.com 2022. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
