import React, { Component } from 'react';
import HomeNav from './HomeNav';
import Axios from 'axios';
import { ReimbursementTable } from './ReimbursementTable'
import { Button } from 'react-bootstrap';

export default class UserReimbursements extends Component <any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            data: []
        }

        this.getReimbursements = this.getReimbursements.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.getReimbursements();
    }

    async getReimbursements() {
        const url =`http://localhost:3001/reimbursements/author/userId/2`;
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

    handleSubmit(event:any){
        event.preventDefault();
        this.props.history.push('/submitreimbursement');
    }

    render() {
        return(
            <div>
                <React.Fragment>               
                    <HomeNav />
                    <div className='Table'>
                    <h1>User Reimbursements</h1>
                    <ReimbursementTable data = { this.state.data }/>
                    <h6>status= 1:Pending, 2:Approved, 3:Denied <br></br> types = 1:Lodging, 2:Travel, 3:Food, 4:Other</h6>
                    
                    <Button size="lg" variant="outline-primary" block onClick = {this.handleSubmit}>Submit New Reimbursement</Button>

                    </div>
                    </React.Fragment>
                    
            </div>
        );
    }
}