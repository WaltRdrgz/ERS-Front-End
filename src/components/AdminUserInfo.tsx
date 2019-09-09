import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { UserProfile } from './UserProfile';
import Axios from 'axios';
import { InputGroup, FormControl, Button, Form, Row, Col } from 'react-bootstrap';

export default class UserInfo extends Component <any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            userId: "",
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            input: ""
        }

        this.getUser = this.getUser.bind(this);
        this.searchUser = this.searchUser.bind(this);
        this.handleChangeInfo = this.handleChangeInfo.bind(this);
        this.handlePatch = this.handlePatch.bind(this);
        this.update = this.update.bind(this);
    }
    
    searchUser(event:any){
        this.getUser();
    }

    async getUser() {
        const url =`http://localhost:3001/user/${this.state.input}`;
        try{
            let response = await Axios.get(url)
            let data = response.data;
            this.setState({ 
                ...this.state,
                userId: data.userId,
                userName: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                role: data.role
            })
        } catch (e){
            console.log(e);
        }
    }

    handleChangeInfo(event:any){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    async handlePatch() {
        console.log('called')
        const url =`http://localhost:3001/user/`;
        try{
            let response = await Axios.patch(url,{
                userId: this.state.userId,
                userName: this.state.username,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                role: this.state.role
            });
            let data = response.status;
            console.log(data);
            alert("User Updated");
            this.props.history.push('/adminuserinfo');
        } catch (e){
            console.log(e);
        }
    }

    update(event:any){
        event.preventDefault();
        this.handlePatch();
        console.log(this.state);

    }

    render() { 
        const stri = ("User Id: " + this.state.userId);   
        return(
            <div >
                <AdminNav />
                <div className = 'Login'>
                <React.Fragment>               
                    <h2>Search Users</h2>
                    <InputGroup className="search">
                        <FormControl
                        placeholder="Insert User ID Number"
                        name="input"
                        onChange = {this.handleChangeInfo}
                        />
                        <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick={this.searchUser}>Search
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <UserProfile 
                        userId={this.state.userId}
                        userName={this.state.userName}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        role={this.state.role} />
                    <Form>
                        <Row>
                            <Col>
                            <Form.Control plaintext readOnly 
                                defaultValue= {stri} />
                            </Col>
                            <Col>
                            <Form.Control onChange={this.handleChangeInfo} 
                                placeholder="User Name" 
                                defaultValue = {this.state.userName}
                                name="userName"/>
                            </Col>
                        </Row> 
                        <Row>
                            <Col>
                            <Form.Control onChange={this.handleChangeInfo} 
                                placeholder="First Name" 
                                defaultValue = {this.state.firstName}
                                name="firstName"/>
                            </Col>
                            <Col>
                            <Form.Control onChange={this.handleChangeInfo} 
                                placeholder="Last Name" 
                                defaultValue = {this.state.lastName}
                                name="lastName"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Control onChange={this.handleChangeInfo} 
                                placeholder="Email" 
                                defaultValue = {this.state.email}
                                name="email"/>
                            </Col>
                            <Col>
                            <Form.Control onChange={this.handleChangeInfo} 
                                placeholder="Role ID" 
                                defaultValue = {this.state.role}
                                name="role"/>
                            </Col>
                        </Row>
                    </Form>
                    <Button variant="warning" onClick={this.update}>Update User Info</Button>
                </React.Fragment>
                </div>
            </div>
        );
    }
}