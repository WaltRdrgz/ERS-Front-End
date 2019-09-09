import React, { Component } from 'react';
import HomeNav from './HomeNav';
import { UserProfile } from './UserProfile';
import Axios from 'axios';
import '../css/Login.css';

export default class UserInfo extends Component <any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            userId: 2,
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            role: ""
        }

        this.getUser = this.getUser.bind(this);
    }
    componentDidMount(){
        this.getUser();
    }

    async getUser() {
        const url =`http://localhost:3001/user/2`;
        try{
            let response = await Axios.get(url)
            let data = response.data;
            this.setState({
                ...this.state,
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

    render() {
        
        return(
            
            <div>
                <React.Fragment>               
                    <HomeNav />
                    <div className="Login">
                    <UserProfile 
                        userId={this.state.userId}
                        userName={this.state.userName}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        role={this.state.role} />

                    </div>
                    
                </React.Fragment>
            </div>
        );
    }
}
