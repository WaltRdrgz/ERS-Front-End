import React, { Component } from 'react';
import AdminNav from './AdminNav';
import Axios from 'axios';
import { ReimbursementTable } from './ReimbursementTable'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../css/Login.css';
 
export default class RByUser extends Component <any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            input: ""
        }

        this.getReimbursements = this.getReimbursements.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.getReimbursements();
    } 

    handleChange(event:any){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    async getReimbursements() {
        const url =`http://localhost:3001/reimbursements/author/userId/${this.state.input}`;
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
                    <div className = "Table">
                    <h1>User Reimbursements</h1>
                    <InputGroup className="search">
                        <FormControl
                        placeholder="Insert User ID Number"
                        name="input"
                        onChange = {this.handleChange}
                        />
                        <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick={this.getReimbursements}>Search
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <ReimbursementTable data = { this.state.data }/>
                    </div>
                    
                </React.Fragment>
            </div>
        );
    }
}