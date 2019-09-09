import React from 'react';
import AdminNav from './AdminNav';
import { Jumbotron, Container } from 'react-bootstrap';

const Admin: React.FC = () => {
    return(
        <div>
            <AdminNav />
            <Jumbotron fluid>
            <Container>
                <h1>Admin</h1>
                <p>
                Select User tab to see user dropdown and view user all information and updates.

                </p>
                <p>
                Select Reimbursement dropdown to see user Reimbursements by status or user id.
                Manage Pending Submissions.
                </p>
            </Container>
            </Jumbotron>
        </div>
    );
}
export default Admin;