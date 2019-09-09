import React, { Component } from 'react';
import AdminNav from './AdminNav';
import Axios from 'axios';
import { UsersTable } from './UsersTable';

export default class AllUsers extends Component <any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            data: []
        }

    }

    componentDidMount(){
        this.getUsers();
    }

    async getUsers() {
        const url =`http://localhost:3001/user`;
        try{
            let response = await Axios.get(url) 
            let res = response.data;
            this.setState({
                data: res
            })
            console.log(this.state.data);
        } catch (e){
            console.log(e);
        }
    }

    render() {
        
        return(
            
            <div>
                <React.Fragment> 
                                 
                    <AdminNav />
                    <h1>All Users</h1> 
                    <UsersTable data = { this.state.data }/>
                   
                </React.Fragment>
            </div>
        );
    }
}
