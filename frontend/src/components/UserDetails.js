import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./userdetails.css";
import SingleResource from "./SingleResource";

//API

const API = process.env.REACT_APP_API_URL;

function UserDetails() {
  const [user, setUser] = useState({});
  const [userResources , setUserResources] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  let { uid } = useParams();
  //let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/users/" + uid)
      .then((response) => {
        setUser(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(API + "/users/" + uid + "/resources")
    .then((response)=>{
      setUserResources(response.data.result);
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }, [uid]);



  return (
    <section className="user_details">
      <div className="welcome">

        <aside class="profile-card" >
          <header>
            <a>
              <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
            </a>

            <h1>
              Welcome {user.first_name} {user.last_name}!
            </h1>

            <h2>
             "A step closer to your dreams"
             </h2>

          </header>


          <div class="profile-bio">
            <p>
            Username : {user.user_name} <br/>
            Age : {user.age} <br/>
            Mentor ID: {user.mentor_id} <br/>
            Email : {user.email}
            </p>
          </div>
          <section>
             User Resources:
              {userResources.map(resource=>(<SingleResource key={resource.resource_id} resource={resource}/>))}
          </section>
        </aside>

    </div>
  </section>
  );
}

export default UserDetails;
