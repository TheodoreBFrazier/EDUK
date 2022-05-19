import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PendingResources (){
    const [ resources, setResources] = useState([]);
  
    useEffect(() => {
      axios
        .get(API + "/resources")
        .then((response) => {
            let resourcesInfo = response.data.result
       
            setResources(resourcesInfo);
            
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const handleRemoveresource =(rid)=> {
        const newresources = resources.filter(resource => resource.resource_id !== rid);
        setResources(newresources);
    }

    const handleApprove = (resource) => {
        resource = {...resource, is_verified: true}
        axios
        .put(API + "/resources/" + resource.resource_id,resource)
        .catch((error) => {
            console.log(error);
          });
        handleRemoveresource(resource.resource_id);
    }

    const handleDeny = (rid) => {
        axios
        .delete(API + "/resources/" + rid)
        .catch((error) => {
            console.log(error);
          });
          handleRemoveresource(rid);
    }

    const resourceChecklist = resources.filter(resource => resource.is_verified === false)
    
    
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    
                    <tr>
                        <th>Resource Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Start_datetime</th>
                        <th>End_datetime</th>
                        <th>Url</th>
                        <th>Is Verfified</th>
                        <th></th>
                    </tr>
                </ thead>
            <tbody> 
                    {resourceChecklist.map(resource =>  {
                        return (
                            <tr>
                                <td>{resource.resource_name}</td>
                                <td>{resource.description}</td>
                                <td>{resource.resource_category}</td>
                                <td>{resource.end_datetime}</td>
                                <td>{resource.url}</td>
                                <td>
                                    <button onClick={()=>handleApprove(resource)}>
                                        Approve
                                    </button>

                                    <button onClick={()=>handleDeny(resource.resource_id)}>
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

export default PendingResources;
