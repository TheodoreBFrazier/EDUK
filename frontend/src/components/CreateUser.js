import axios from 'axios'; 
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react';

const API = process.env.REACT_APP_API_URL;

function CreateUser(){
    let navigate = useNavigate();
    const [user , setUser] = useState({
        first_name : '',
        last_name : '',
        age : 0,
        email: '',
        user_name: '',
        password:''
    })


    const addUser=()=>{
        axios
        .post(`${API}/users`, user)
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
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'>First Name:</label>
                <input
                    id="first_name"
                    value={user.first_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="First Name"
                    required
                />
                

                <label htmlFor = 'last'>Last Name:</label>
                <input
                id='last_name'
                value ={user.last_name}
                type = 'text'
                onChange={handleTextChange}
                placeholder='Last Name'
                required
                />

                <label htmlFor='age'>Age:</label>
                <input
                id='age'
                value ={user.age}
                type = 'number'
                onChange={handleTextChange}
                placeholder='Age'
                required
                />

                <label htmlFor='email'>Email:</label>
                <input
                id='email'
                value ={user.email}
                type = 'text'
                onChange={handleTextChange}
                placeholder='Email'
                required
                />

                <label htmlFor='username'>User Name:</label>
                <input
                id='user_name'
                value ={user.user_name}
                type = 'text'
                onChange={handleTextChange}
                placeholder='Username'
                required
                />

                <label htmlFor='password'>Password:</label>
                <input
                id='password'
                value ={user.password}
                type = 'text'
                onChange={handleTextChange}
                placeholder='Password'
                required
                />
                
                <input type='submit'/>
        </form>
    </div>
    )
}

export default CreateUser;