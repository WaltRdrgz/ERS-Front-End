import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNav: React.FC = () => {
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/userinfo" eventKey="link-1">User</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/userreimbursements" eventKey="disabled" >Reimbursements</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/">LogOut</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
export default HomeNav;