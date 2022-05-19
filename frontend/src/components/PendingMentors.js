import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PendingMentors (){
    const [ mentors, setMentors] = useState([]);
  
    useEffect(() => {
      axios
        .get(API + "/mentors/")
        .then((response) => {
            let mentorsInfo = response.data.result
            console.log(mentorsInfo)
            setMentors(mentorsInfo);
            
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const handleRemoveMentor =(mid)=> {
        const newMentors = mentors.filter(mentor => mentor.mentor_id !== mid);
        setMentors(newMentors);
    }

    const handleApprove = (mentor) => {
        mentor = {...mentor, is_verified: true}
        axios
        .put(API + "/mentors/" + mentor.mentor_id,mentor)
        .catch((error) => {
            console.log(error);
          });
        handleRemoveMentor(mentor.mentor_id);
    }

    const handleDeny = (mid) => {
        axios
        .delete(API + "/mentors/" + mid)
        .catch((error) => {
            console.log(error);
          });
          handleRemoveMentor(mid);
    }

    const MentorChecklist = mentors.filter(mentor => mentor.is_verified === false)
    
    
    return (
        <>
            <h1>Please update the mentor and resource status, thank you!</h1>
            <br />
            <Table striped bordered hover variant="dark">
                <thead>
                    
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Bio</th>
                        <th>Email</th>
                        <th>Speciality</th>
                        <th>Is Verfified</th>
                        <th></th>
                    </tr>
                </ thead>
            <tbody> 
                    {MentorChecklist.map(mentor =>  {
                        return (
                            <tr>
                                <td>{mentor.mentor_fname}</td>
                                <td>{mentor.mentor_lname}</td>
                                <td>{mentor.bio}</td>
                                <td>{mentor.email}</td>
                                <td>{mentor.speciality}</td>
                                <td>
                                    <button onClick={()=>handleApprove(mentor)}>
                                        Approve
                                    </button>

                                    <button onClick={()=>handleDeny(mentor.mentor_id)}>
                                        Deny
                                    </button>
                                    
                                </td>
                            </tr> 
                        )
                    })}
                
            </tbody>   
            </Table>
            
        
        </>
    )
}

export default PendingMentors;
