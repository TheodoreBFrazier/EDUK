import AllMentors from "../components/AllMentors.js";
import React from "react";
import CreateMentor from "../components/CreateMentor.js";

function MentorsPage({ mentors }) {
  const uid = localStorage.getItem("userId");
  return (
    <div>
      {uid && !isNaN(uid) ? <AllMentors mentors={mentors} /> : <CreateMentor />}
    </div>
  );
}
export default MentorsPage;
