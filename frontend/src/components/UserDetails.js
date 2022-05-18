import React from "react";
import { useState, useEffect } from "React";

import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";

//API

const API = process.env.REACT_APP_API_URL;

function UserDetails() {
  const [user, setUser] = useState({});
  const [showUserDetails, setShowUserDetails] = useState(false);
  let { uid } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/users/" + id)
      .then((response) => {
        setUser(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [uid]);

  return (
    <section>
      <div>User Name: {user.user_name}</div>
      <div>
        {showUserDetails ? (
          <>
            <div>First Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
            <div>Age: {user.age}</div>
            <div>Mentor: {user.mentor_id}</div>
          </>
        ) : (
          <button onClick={() => setShowUserDetails(!showUserDetails)}>
            User Details
          </button>
        )}
      </div>
    </section>
  );
}

export default UserDetails;
