import React from "react";

import Mentor from "./Mentor.js";

function AllMentors({ mentors }) {
  return (
    <section className="users">
      <ul>
        {mentors.map((mentor) => {
          return <Mentor key={mentor.mentor_id} mentor={mentor} />;
        })}
      </ul>
    </section>
  );
}

export default AllMentors;
