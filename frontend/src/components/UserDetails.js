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
        <strong>Welcome {user.first_name} !!!</strong>
      </div>
      <div>
        <button onClick={() => setShowUserDetails(!showUserDetails)}>
          User Details
        </button>
        {showUserDetails ? (
          <div className="details">
            <div>First Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
            <div>User Email: {user.email}</div>
            <div>Age: {user.age}</div>
            <div>Mentor: {user.mentor_id}</div>
            <section>User Resources:
              {userResources.map(resource=>(<SingleResource key={resource.resource_id} resource={resource}/>))}
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default UserDetails;
