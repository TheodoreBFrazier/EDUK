import axios from "axios";
import React, { useEffect, useState } from "react";
import GeneralSuccessM from "./GeneralSuccessM";
import "../css/Mentor.css";

const API = process.env.REACT_APP_API_URL;
function Mentor({ mentor }) {
  const [user, setUser] = useState({});
  const uid = localStorage.getItem("userId");
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    axios
      .get(`${API}/users/${uid}`)
      .then((res) => setUser(res.data.result))
      .catch((e) => console.log(e));
  }, [uid]);

  const addMentor = (mentor) => {
    user.mentor_id = mentor.mentor_id;
    axios
      .put(`${API}/users/${user.uid}`, user)
      .then((res) => {
        setShowMessage(true);
        localStorage.setItem("userMentor", JSON.stringify(mentor));
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {/* <ul class="cards">
                <li>
                    <div class="card">
                        <img src="../logo.png" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                            <img class="card__thumb" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
                            <div class="card__header-text">
                                <h3 class="card__title">{mentor.mentor_fname} {mentor.mentor_lname}</h3>
                                <span class="card__tagline">{mentor.email}</span>            
                                <span class="card__status">{mentor.speciality}</span>
                            </div>
                            </div>
                            <p class="card__description">{mentor.bio}</p>
                        </div>
                    </div>
                </li>
            </ul> */}

      <main>
        <div class="cards">
          {showMessage ? (
            <GeneralSuccessM message={"Mentor Added Successfully..."} />
          ) : (
            ""
          )}
          <li class="card">
            <div class="card__content">
              <div>
                <p class="card__title">
                  {mentor.mentor_fname} {mentor.mentor_lname}
                </p>
                <p class="card__speciality">{mentor.speciality}</p>
                <p class="card__email">{mentor.email}</p>
              </div>
              <figure class="card__thumb">
                <img
                  src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  alt=" description"
                />
              </figure>
              <aside>
                <p class="card__description">{mentor.bio}</p>
              </aside>
              <button onClick={() => addMentor(mentor)}> Add Mentor</button>
            </div>
          </li>
        </div>
      </main>
    </div>
  );
}

export default Mentor;
