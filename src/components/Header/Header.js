import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    <h1 className='fw-bold mb-0'>Spice Granary</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link className='pe-3' as={NavLink} to="/home">Home</Nav.Link>
                        <NavDropdown className='pe-3'
                            title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/action/3.1">Manage Items</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/action/3.2">Add Items</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/action/3.3">My Items</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;