import React, { Component } from 'react';
import AdminNav from './AdminNav';
import Axios from 'axios';
import { ReimbursementTable } from './ReimbursementTable'
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../css/Login.css';

export default class RByStatus extends Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            input: "",
            reimbursementId: "",
            dateResolved: "",
            statys: ""
        }

        this.getReimbursements = this.getReimbursements.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.see = this.see.bind(this);
        this.handlePatch = this.handlePatch.bind(this);
    }
    componentDidMount() {
        this.getReimbursements();
    }

    handleChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({

            [name]: value
        });

    }

    async getReimbursements() {
        console.log(this.state);
        const url = `http://localhost:3001/reimbursements/status/${this.state.input}`;
        try {
            let response = await Axios.get(url)
            let res = response.data;
            this.setState({
                data: res
            })
            console.log(this.state.data);
        } catch (e) {
            console.log(e);
        }
    }

    see(event: any) {
        event.preventDefault();
        console.log(this.state.data.reimbursementId);
        this.handlePatch();
    }

    async handlePatch() {
        console.log('called')
        const url = `http://localhost:3001/reimbursements/`;
        try {
            let response = await Axios.patch(url, {
                reimbursementId: this.state.reimbursementId,
                dateResolved: this.state.dateResolved,
                status: this.state.status
            });
            let data = response.status;
            console.log(data);
            this.props.history.push('/adminuserinfo');
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>
                <React.Fragment>
                    <AdminNav />
                    <div className="Table">
                        <h1>Status Reimbursements</h1>
                        <Form>
                            <Form.Check
                                inline
                                value="1"
                                name="input"
                                label="Pending"
                                type="radio"
                                onChange={this.handleChange}
                            />
                            <Form.Check
                                inline
                                name="input"
                                value="2"
                                label="Approved"
                                type="radio"
                                onChange={this.handleChange}
                            />
                            <Form.Check
                                inline
                                name="input"
                                value="3"
                                label="Denied"
                                type="radio"
                                onChange={this.handleChange}
                            />
                            <Button onClick={this.getReimbursements} variant="outline-secondary">Search</Button>
                        </Form>
                        <ReimbursementTable data={this.state.data} />
                        <Form>
                            <h3>Update Pending Reimbursements</h3>
                            <Form.Group>
                                <Form.Label>Reimbursement ID</Form.Label>
                                <Form.Control
                                    name="reimbursementId"
                                    required
                                    type="text"
                                    value={this.state.reimbursementId}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date Resolved</Form.Label>
                                <Form.Control
                                    name="dateResolved"
                                    required
                                    type="date"
                                    value={this.state.dateResolved}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    New Status
                        </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Approved"
                                        name="status"
                                        value="2"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Denied"
                                        name="status"
                                        value="3"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Form.Group>
                            <Button variant="secondary" onClick={this.see}>Change Pending</Button>
                        </Form>


                    </div>


                </React.Fragment>
            </div>
        );
    }
}