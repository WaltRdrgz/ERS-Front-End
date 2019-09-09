import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

interface User {
    userId: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string, 
    role: string,
}

export default class UpdateUser extends React.Component<User, any>{
    render() {
        return(
            <div>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control plaintext readOnly defaultValue= {this.props.userId}  />
                        </Col>
                        <Col>
                        <Form.Control placeholder="User Name" defaultValue = {this.props.userName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First Name" defaultValue = {this.props.firstName}/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last Name" defaultValue = {this.props.lastName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Email" defaultValue = {this.props.email}/>
                        </Col>
                        <Col>
                        <Form.Control placeholder="roleId" defaultValue = {this.props.role}/>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}