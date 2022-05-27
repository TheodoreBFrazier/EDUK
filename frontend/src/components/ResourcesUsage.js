import axios from "axios";
import React, { useEffect, useState } from "react";
import ResourceUsage from "./ResourceUsage";
import "../css/resourcesUsage.css";

const API = process.env.REACT_APP_API_URL;
function ResourcesUsage() {
  const [resources, setResources] = useState([]);
  //track the most useful resource
  const [fresource, setFResource] = useState({
    resource_name: "",
    nbr: 0,
  });
  useEffect(() => {
    axios
      .get(`${API}/resources`)
      .then((res) => setResources(res.data.result))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    let famousResource = {
      resource_name: "",
      nbr: 0,
    };
    for (let res of resources) {
      axios
        .get(`${API}/resources/${res.resource_id}/users`)
        .then((response) => {
          if (response.data.result.length > famousResource.nbr) {
            famousResource.resource_name = res.resource_name;
            famousResource.nbr = response.data.result.length;
            setFResource({
              resource_name: res.resource_name,
              nbr: response.data.result.length,
            });
          }
        });
    }
  }, [resources]);

  return (
    <section className="main-usage">
      <h2 className="main-usage-h2">How useful are our resources?</h2>
      <div className="main-usage-resources">
        {resources.map((resource) => (
          <ResourceUsage key={resource.resource_id} resource={resource} />
        ))}
      </div>
      <h3 className="main-usage-h3"> The Most useful resource(s):</h3>
      <h4>Resource Name: {fresource.resource_name}</h4>
      <h4>Total Users: {fresource.nbr}</h4>
    </section>
  );
}

export default ResourcesUsage;
