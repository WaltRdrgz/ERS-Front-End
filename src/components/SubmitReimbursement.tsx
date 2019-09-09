import React, { Component } from 'react';
import Axios from 'axios';
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../css/Login.css';

export default class SubmitReimbursement extends Component <any,any>{

    constructor(props: any) {
        super(props);

        this.state = {
            author: 2,
            amount: 0,
            dateSubmitted: "",
            description: "",
            type: 0
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.return = this.return.bind(this);
    }

    handleSubmit(event:any) {  
      event.preventDefault();
      console.log(this.state);
      this.handleRequest();
      console.log('handlesubmit');
      
    } 

    handleUpdate(event:any) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    async handleRequest() {
        console.log('called')
        const url =`http://localhost:3001/reimbursements/`;
        try{
            let response = await Axios.post(url,{
              author: this.state.author,
              amount: this.state.amount,
              dateSubmitted: this.state.dateSubmitted,
              description: this.state.description,
              type: this.state.type
            });
            let data = response.status;
            console.log(data);
            alert('reimbursement submitted')
            this.props.history.push('/userreimbursements');
        } catch (e){
            console.log(e);
        }
    }

    return(event:any){
      this.props.history.push('/userreimbursements');
    }

    

    render() {
      return(
        <div className="Login">
          <h1>Submit Reimbursement</h1>
          <Form className="login" onSubmit = {this.handleSubmit}>
            <Form.Group>
            <Form.Label>Amount</Form.Label>
              <Form.Control
                name = "amount"
                required                    
                type="text"
                placeholder="0.00"
                value = {this.state.amount}
                onChange = {this.handleUpdate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Submitted</Form.Label>
              <Form.Control
                name = "dateSubmitted"
                required
                type="date"
                value={this.state.dateSubmitted}
                onChange = {this.handleUpdate}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group >
              <Form.Label>Description</Form.Label>
                <Form.Control 
                  name = "description"
                  as="textarea" 
                  rows="2"
                  placeholder="Need reimbursement for..."
                  required
                  value= {this.state.description}
                  onChange = {this.handleUpdate}
                />
                <Form.Control.Feedback type="invalid">
                  Please add a description
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Row} required>
              <Form.Label column sm={10}>
                Reimbursement Type
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  required
                  type="radio"
                  label="Lodging"
                  name="type"
                  value = "1"
                  onChange = {this.handleUpdate}
                />
                <Form.Check
                  required
                  type="radio"
                  label="Travel"
                  name="type"
                  value = "2"
                  onChange = {this.handleUpdate}
                />
                <Form.Check
                  required
                  type="radio"
                  label="Food"
                  name="type"
                  value = "3"
                  onChange = {this.handleUpdate}
                />
                <Form.Check
                  required
                  type="radio"
                  label="Other"
                  name="type"
                  value = "4"
                  onChange = {this.handleUpdate}
                />
              </Col>
            </Form.Group>
            <Button type="submit">Submit form</Button>
            <Button variant="secondary" onClick={this.return}>Return</Button>
          </Form>
        </div>
      );
    }
}

