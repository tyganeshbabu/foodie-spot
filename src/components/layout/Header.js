import React from 'react';
import logo from "../../assets/logo.png";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar
            className='navbar navbar-expand-md fixed-top navbar-light bg-white home-navbar shadow-sm'
            expand='lg'
        >
            <Navbar.Brand className='main-nav navbar-brand' href='#'>
                <img alt='logo' src={logo} className='home-logo-img' />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className='navbar-toggler p-0 border-0'
            />
            <Navbar.Collapse id='navbarsExampleDefault' className="main-navbar-collapse">
                <Nav className='navbar-nav ml-auto home-menu'>
                    <Nav.Link className='nav-item active'>
                        Home
                        </Nav.Link>
                    <NavDropdown
                        title='Ganesh'
                        className='nav-item dropdown'
                        id='basic-nav-dropdown'
                    >
                        <NavDropdown.Item href='#'>Orders</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='nav-item'>
                        Cart
                        </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
