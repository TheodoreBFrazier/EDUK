
import(useState, useEffect) from React

import { Link, useParams, useNavigate } from 'react-router-dom'

import axios from "axios";
import { useEffect } from 'react';


//API

const API = process.env.REACT_APP_API_URL;

function userDetails() {
    const [user, setUser] = useState({});
    let { userid } = useParams()
    let navigate = useNavigate();




    useEffect(
        () => {
            axios.get(API + "/users/" + id)
                .then((response) => {
                    setUser(response.data);
                }).catch((error) => {
                    console.log(error)
                })
        }), [userid]


    return
    <div>

    </div>



}