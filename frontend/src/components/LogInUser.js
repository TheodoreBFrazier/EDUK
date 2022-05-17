import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import react from "react"

const APi = Process.env.REACT_APP_API_URL;

function LogInUser(){
    let navigate = useNavigate();

    return(
    <div>
        <form>
            <h3>Login Here</h3>

            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <button>Log In</button>
            <div class="social">
            <div class="go"><i class="fab fa-google"></i>  Google</div>
            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>
    </div>
    )
}
export default LogInUser;