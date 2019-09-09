import React from 'react';
import HomeNav from './HomeNav';
import { Container, Jumbotron } from 'react-bootstrap';
import '../css/Login.css';

const Home: React.FC = () => {
    return(
        <div className="login">
            <HomeNav />
            <Jumbotron fluid>
            <Container>
                <h1>Home</h1>
                <p>
                Select User tab to see user information.
                </p>
                <p>
                Select Reimbursement tab to see user Reimbursements and Submissions.
                </p>
            </Container>
            </Jumbotron>
        </div>
    );
}
export default Home;