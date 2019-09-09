import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import '../css/Login.css';

interface UserCard {
    userId: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    role: number
}

export class UserProfile extends React.Component<UserCard, any>{
    
    
    render() {
        return(
            <div className="login">
                <Card border="info" style={{ width: '24rem' }}>
                    <Card.Header>User Info</Card.Header>
                    <Card.Body>
                    <Card.Title>{this.props.userName}</Card.Title>
                    <Card.Text>
                        Here user information and details are displayed.
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>User Id: {this.props.userId}</ListGroup.Item>
                        <ListGroup.Item>First Name: {this.props.firstName}</ListGroup.Item>
                        <ListGroup.Item>Last Name: {this.props.lastName}</ListGroup.Item>
                        <ListGroup.Item>Email: {this.props.email}</ListGroup.Item>
                        <ListGroup.Item>Role Id: {this.props.role}</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    
}
