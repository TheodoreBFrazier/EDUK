import axios from "axios";
import { useState, useEffect } from "react";
import SingleResource from "./SingleResource";

const API = process.env.REACT_APP_API_URL;

function Resources() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        axios.get(API + "/resources")
            .then((response) => {
                setResources(response.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div classNames = "available-resources">
            <section>
                <tbody className="resource-arr">
                    {resources.map((resource) => {
                        return <SingleResource key = {resource.id} resoruce={resource} />
                    })}
                </tbody>
            </section>
        </div>
    )

}

export default Resources;