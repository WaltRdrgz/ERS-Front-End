import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Form } from "react-bootstrap";
import '../css/Login.css';

export default class Login extends Component <any,any>{

    constructor(props: any) {
        super(props);

        this.state = {
            username: "",
            password: "",
            userId: null,
            roleId: null
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleSubmit(event:any) {  
        event.preventDefault();
        //this.getUser();
        this.handleRequest();
    }

    handleLink() {
        if (this.state.roleId === 2){
            this.props.history.push('/home');
        }
        else if (this.state.roleId === 1){
            this.props.history.push('/admin');
        }
    }

    handleUpdate(event:any) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    async getUser() {
        const url =`http://localhost:3001/user/2`;
        try{
            let response = await Axios.get(url)
            let data = response.data;
            console.log(data);
        } catch (e){
            console.log(e);
        }
    }
    async handleRequest() {
        const url =`http://localhost:3001/login/`;
        try {
            let response = await Axios.post(url, {
                    username: this.state.username,
                    password: this.state.password
                });

            console.log(response.status);
            console.log('returned data:', response);
            
            const roleId = response.data.role;
            console.log(`user role id is ` + roleId);

            this.setState({
                ...this.state, ...{
                    roleId
                }
            })
            this.handleLink();
            
        } catch (e) {
            console.log(`Axios request failed: ${e}`);
            alert("Invalid Credentials");
        }
    }

    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            required
                            autoFocus
                            type="text" 
                            placeholder="Enter username" 
                            value={this.state.username}
                            onChange={this.handleUpdate}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handleUpdate}/>
                    </Form.Group>
                    <Button variant="primary" 
                            type="submit"
                            disabled={!this.validateForm}
                            size="lg" 
                            block>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}