import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import { modalUnstyledClasses } from "@mui/material";



function PendingMentor (){

    return (
        <>
            <h1>Please update the mentor status, thank you!</h1>
            <br />
            <Table striped bordered hover>
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
                    {/* {clocksInCart.map(clock =>  {
                        return <CartDetails key={clock.id} clock={clock} handleRemove={handleRemove} clocksInCart={clocksInCart} />
                    })} */}
                <tr>
                    <td>first_name</td>
                    <td>last_name</td>
                    <td>bio</td>
                    <td>email</td>
                    <td>speciality</td>
                    <td><input type="checkbox" width="1px"/>approve</td>
                    
                </tr> 
                <tr>Huang</tr>
                <tr>?</tr> 
                <tr></tr>
                
            </tbody>   
            </Table>
            
        
        </>
    )
}

export default PendingMentor;
