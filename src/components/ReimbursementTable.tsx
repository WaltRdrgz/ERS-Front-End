import React from 'react';
import { Table } from 'react-bootstrap';
import '../css/Login.css';

interface Reimbursements {
    data: []
}

export class ReimbursementTable extends React.Component<Reimbursements, any>{
        
    render() {
        const rows = this.props.data.map((item:any, i) => {
            return <tr key={i}>
                <td>{item.reimbursementId}</td>
                <td>{item.dateSubmitted}</td>
                <td>{item.dateResolved}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.type}</td>
            </tr>
        });
        return(
            <div >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>R_ID#</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                        
                    </tbody>
                </Table>
            </div>
        );
    }
}