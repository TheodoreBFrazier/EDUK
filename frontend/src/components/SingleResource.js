import { Link } from "react-router-dom";

function SingleResource({ resource }) {
    return (
        <div className="resource">
            <Link to={`/resources/${resource.id}`} >


                <h1> ${resource.name} </h1>

            </Link>
        </div>
    )
}

export default SingleResource