import axios from "axios";
import React, { useEffect, useState } from "react";
import ResourceUsage from "./ResourceUsage";

const API = process.env.REACT_APP_API_URL;
function ResourcesUsage() {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/resources`)
      .then((res) => setResources(res.data.result))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section>
      <div>
        {resources.map((resource) => (
          <ResourceUsage key={resource.resource_id} resource={resource} />
        ))}
      </div>
      <h3>Most useful resource(s):</h3>
    </section>
  );
}

export default ResourcesUsage;
