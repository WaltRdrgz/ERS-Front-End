import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNav: React.FC = () => {
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Users" id="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/adminuserinfo" eventKey="link-1">User Information</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/allusers">All Users</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Reimbursements" id="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/rbyuser">By Users</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/rbystatus">By Status</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link as={Link} to="/">LogOut</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
export default HomeNav;