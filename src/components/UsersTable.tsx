import React from 'react';
import { Table } from 'react-bootstrap';
import '../css/Login.css';

interface Users {
    data: [], 
}

export class UsersTable extends React.Component<Users, any>{
        
    render() {
        const rows = this.props.data.map((item:any, i) => {
            return <tr key={i}>
                <td>{item.userId}</td>
                <td>{item.username}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
            </tr>
        });
        return(
            <div className = "Table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User ID#</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
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