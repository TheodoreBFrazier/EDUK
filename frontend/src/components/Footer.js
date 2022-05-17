import React from "react";
import "./Footer.css";

// const logo = require("../public/log.png");

import { Link } from "react-router-dom"



export default function Footer() {
    return (
        <section className="footer-container">
            <div className="footer-container-one">
                <div className = "footer-box">
                    <Link to="/about">
                        <h4> About us </h4>
                    </Link>
                        <ul className="box-list">
                            <li>Our Team</li>
                            <li>Our Values</li>
                            <li>Mission and Vision</li>
                        </ul>
                </div>
                <div className="footer-box">
                    <Link to="/about">
                        <h4> Get Involved </h4>
                    </Link>
                        <ul className="box-list">
                            <Link to="/mentor/sign-up"><li>Volunteer</li></Link>
                            <li>Donate</li>
                            <li>Careers</li>
                        </ul>
                </div>
                <div className="footer-box">
                    
                    <h4> Contact Us </h4>
                
                    <ul className="box-list">
                        <li>NYC ROSE Headquarters</li>
                        <li>123 West 123rd street, #123</li>
                        <li>New York, NY 1234</li>
                    </ul>
                </div>
                <div className="footer-logo">
                    <Link to="/resources"> <img className="footer-logo" src = "https://yt3.ggpht.com/HQFE9jg1UOTzg3xEW116MA7uJpKR4BG2HIo2sQZx-0BnZu1py9fLBggljyPXBcNl6uui_MoW7tY=s900-c-k-c0x00ffffff-no-rj"/></Link>
                </div>
            </div>
            <div className="footer-container-two">
                <div className= "footer-right">Copyright NYC_ROSE.com 2022. All rights reserved.</div>
                <div className="icons">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                </div>

            </div>

            
            
        </section>
    )
}

