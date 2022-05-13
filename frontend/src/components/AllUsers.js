import axios from "axios";
import { useState, useEffect } from "react";
import SingleUserView from "./SingleUserPage";

const API = process.env.REACT_APP_API_URL;

function AllUsers() {
    const [users, setUsers] = useState([]) //Set state to empty array

    useEffect(() => {
        axios.get(API + "/users")
            .then((response) => {
                console.log(response)
                setUsers(response.data.result);
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