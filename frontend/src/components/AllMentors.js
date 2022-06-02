import React from "react";
import "../css/Mentor.css";
import Mentor from "./Mentor.js";

function AllMentors({ mentors }) {
  return (
    <section className="mentor-list">
        {mentors.map((mentor) => {
          return <Mentor key={mentor.mentor_id} mentor={mentor} />;
        })}
    </section>
  );
}

export default AllMentors;
