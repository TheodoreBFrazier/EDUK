import axios from 'axios'; 
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import  '../css/CreateUser.css'

const API = process.env.REACT_APP_API_URL;

function CreateUser(){
    let navigate = useNavigate();
    const [user , setUser] = useState({
        first_name : '',
        last_name : '',
        age : 0,
        email:'',
        user_name: '',
        password:''
    })


    const addUser=()=>{
        axios
        .post(`${API}/auth/sign_up`, user)
            .then(
                ()=>{
                    navigate(`/users`)
                }
            )
            .catch((c)=> console.warn('catch',c))
    };

    const handleTextChange = (event) =>{
        setUser({ ...user, [event.target.id]: event.target.value});

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addUser();
    }

    return(
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div class="title">Welcome to EDUK!</div>
        <div class="subtitle">Let's create your account!</div>
        <div>Already signed up? <Link to="/users/login"> Please log in here!</Link></div>
        <div class="input-container ic1">
          <input 
          id="first_name" 
          class="input" 
          type="text" 
          value={user.first_name}
          placeholder=" " 
          onChange={handleTextChange}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">First name</label>
        </div>
        

        <div class="input-container ic2">
          <input
           id="last_name"
            class="input" 
            type="text" 
            placeholder=" " 
            onChange={handleTextChange}
            value={user.last_name}
            />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">Last name</label>
        </div>

        <div class="input-container ic2">
          <input 
          id="age" 
          class="input" 
          type="number" 
          placeholder=" " 
          onChange={handleTextChange}
          value={user.age}
          />
          <div class="cut"></div>
          <label for="age" class="placeholder">Age</label>
        </div>

        <div class="input-container ic2">
          <input 
          id="user_name" 
          class="input" 
          type="text" 
          placeholder=" " 
          onChange={handleTextChange}
          value={user.user_name}
          />
          <div class="cut"></div>
          <label for="username" class="placeholder">User name</label>
        </div>

        <div class="input-container ic2">
          <input 
          id="password" 
          class="input" 
          type="password" 
          placeholder=" " 
          onChange={handleTextChange}
          value={user.password}
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">Password</label>
        </div>

        <div class="input-container ic2">
          <input 
          id="email" 
          class="input" 
          type="text" 
          placeholder=" " 
          onChange={handleTextChange}
          value={user.email}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Email</label>
        </div>
        
        <button type="text" class="submit">Submit</button>
      </form>
    </div>
    )
}

export default CreateUser;