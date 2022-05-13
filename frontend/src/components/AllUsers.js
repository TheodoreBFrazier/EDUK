import axios from "axios";
import { useState, useEffect } from "react";
import SingleUserView from "./SingleUserView";

const API = process.env.REACT_APP_API_URL;

function AllUsers() {
    const [users, setUsers] = useState([]) //Set state to empty array

    useEffect(() => {
        axios.get(API + "/users")
        .then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


return (
    <div className="user">
        <section>
            <tbody className="users-arr">
                {users.map((user) => {
                    return <SingleUserView key={user.id} user={user} />
                })}
            </tbody>
        </section>
    </div>
)

}

export default AllUsers;