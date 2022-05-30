//user component
import React from "react";
import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap"

function User({ user }) {
  return (

    <Card className="user">
      <Card.Header as="h5" style={{background: "#6495ED"}}>User number: {user.uid}</Card.Header>
      <Card.Body>
        <Card.Title>User Age: {user.age}</Card.Title>
        <Button style={{background: "#FFFAFA"}}><Link to={`/users/${user.uid}`}>See User Details</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default User;
