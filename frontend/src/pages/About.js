import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import axios from "axios";
import { Card, Typography } from "@mui/material";
//importing the styles from MATERIAL UI
// import { withStyles } from "@mui/material";

//For faces for headshots
import { CardMedia } from "@mui/material";
//For card typography -text
import { CardContent } from "@mui/material";

const cardStyle = {
  margin: "auto",
  height: "600px",
  width: "75%",
  padding: "20px",
  boxshadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px",
  // display: "inline-block",
  display: "flex",
  justifyContent: "center",
};
//api
const API = process.env.REACT_APP_API_URL;
function About() {
  const navigate = useNavigate();
  //get each person photo
  const [lili, setLili] = useState(
    "https://pngset.com/images/woman-headshot-silhouette-back-torso-person-human-transparent-png-173795.png"
  );
  const [mukayila, setMukayila] = useState(
    "https://pngset.com/images/woman-headshot-silhouette-back-torso-person-human-transparent-png-173795.png"
  );
  const [nima, setNima] = useState(
    "https://pngset.com/images/woman-headshot-silhouette-back-torso-person-human-transparent-png-173795.png"
  );
  const [david, setDavid] = useState(
    "https://pngset.com/images/woman-headshot-silhouette-back-torso-person-human-transparent-png-173795.png"
  );
  const [theodore, setTheodore] = useState(
    "https://pngset.com/images/woman-headshot-silhouette-back-torso-person-human-transparent-png-173795.png"
  );

  useEffect(() => {
    axios
      .get(`${API}/owners/photos`)
      .then((res) => {
        // get each person photo
        const arr = res.data.result;
        console.log(arr);
        const davidObj = arr.find((owner) => owner.owner_name === "david");
        const liliObj = arr.find((owner) => owner.owner_name === "lili");
        const theodoreObj = arr.find(
          (owner) => owner.owner_name === "theodore"
        );
        const mukayilaObj = arr.find(
          (owner) => owner.owner_name === "mukayila"
        );
        const nimaObj = arr.find((owner) => owner.owner_name === "nima");
        console.log(mukayilaObj);
        setDavid(davidObj.photo);
        setMukayila(mukayilaObj.photo);
        setLili(liliObj.photo);
        setNima(nimaObj.photo);
        setTheodore(theodoreObj.photo);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="about">
      <div className="valueNmission">
        <div>
          <h2 id="our_values">Our Values</h2>
          <br />
          <p>
            We assume responsibility for our collective strength by developing
            relationships, building diverse and inclusive coalitions, and
            challenging one another to be our best. We act with empathy and
            extend grace to ourselves and others. We accelerate each other and
            are accountable to each other to deliver on our vision.
          </p>
        </div>
      </div>

      <div className="valueNmission">
        <div>
          <h2 id="our_mission">Mission & Vision</h2>
          <br />
          <p>
            Our goal is to connect high school, college students, minorities and
            residents of underserved communities with resources they can't get
            elsewhere. Whether it's be career skills , scholarships , grants,
            continued learning, programs, etc., we want to bridge the the
            knowledge gap within these underserved communities. We want to
            eliminate the gatekeeping of much needed information and create a
            portal where people can easily find resources they desperately need
            to improve their quality of life.
          </p>
        </div>
        {/* <img
						src="https://i0.wp.com/www.kouya.net/wp-content/uploads/2019/09/mission-900x450.jpg?fit=900%2C450&ssl=1"
						alt="mission"
					/> */}
      </div>

      <h2>Our Team</h2>

      <Card style={cardStyle} variant="outlined">
        <CardMedia
          onClick={() => navigate("/owners/david/upload")}
          component="img"
          height="auto"
          image={david}
          alt="David-headshot"
        />

        <CardContent>
          <Typography variant="h3">David Vidals</Typography>
          <br />I joined Pursuit to jumpstart my career into coding and start
          creating and helping people. I hope to once day create an app/website
          that can help under served communities in New York. A fun Fact about
          me is that I love play video games.
        </CardContent>
      </Card>

      <br />

      <Card style={cardStyle} variant="outlined">
        <CardMedia
          onClick={() => navigate("/owners/lili/upload")}
          component="img"
          height="auto"
          image={lili}
          alt="Lili-headshot"
        />

        <CardContent>
          <Typography variant="h3">Lili Huang</Typography>
          <br />I am a full stack developer. I wanted to become a software
          engineer because it can be creative which means I am able to solve
          problems by putting myself in the users’ shoes and providing a
          solution. The ability to be creative in my work is what truly empowers
          me to move forward and keep learning as an engineer.
        </CardContent>
      </Card>

      <br />

      <Card style={cardStyle} variant="outlined">
        <CardMedia
          onClick={() => navigate("/owners/mukayila/upload")}
          component="img"
          height="auto"
          image={mukayila}
          alt="MK-headshot"
        />

        <CardContent>
          <Typography variant="h3">Mukayila Alao</Typography>
          <br />
          Software engineering is all what I am passionate about now. I
          graduated from my University as a computer Networks and maintenance
          engineer. I will finish by saying that technology is driving our lives
          today and I can't wait to land my first job and contribute.
        </CardContent>
      </Card>

      <br />

      <Card style={cardStyle} variant="outlined">
        <CardMedia
          onClick={() => navigate("/owners/nima/upload")}
          component="img"
          height="auto"
          image={nima}
          alt="Nima-headshot"
        />

        <CardContent>
          <Typography variant="h3">Nima Sherpa</Typography>
          <br />I am a Full-Stack Developer who loves creating projects and
          implementing new ideas . I am always seeking to expand my knowledge on
          tech , Ability to learn and implement new technologies quickly.
        </CardContent>
      </Card>

      <br />

      <Card style={cardStyle} variant="outlined">
        <CardMedia
          onClick={() => navigate("/owners/theodore/upload")}
          component="img"
          height="auto"
          image={theodore}
          alt="Theodore-headshot"
        />

        <CardContent>
          <Typography variant="h3">Theodore Frazier</Typography>
          <br />I joined a 12-month, Google-funded software engineering
          fellowship with a 9% acceptance rate whose graduates have been hired
          as developers at leading companies such as Pinterest, JP Morgan, and
          Spotify.
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
