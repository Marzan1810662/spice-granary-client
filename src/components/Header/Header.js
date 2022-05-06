import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
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
                        {user ?
                            <NavDropdown className='pe-3'
                                title={user?.displayName ? user.displayName : "Profile"} id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/manageInventories">Manage Items</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/addItems">Add Items</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/myItems">My Items</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="" onClick={() => signOut(auth)}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Link className='pe-3' as={NavLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;