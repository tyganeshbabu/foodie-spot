import React from 'react';
import logo from "../../assets/logo.png";
import { Navbar, NavDropdown, Nav, Badge } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import alertify from 'alertifyjs';
import setAuthToken from '../../utils/setAuthToken';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, user }, history, logout }) => {

    const logoutHandler = () => alertify.confirm('Logout', 'Are you sure you want to logout?', function () { logout(); setAuthToken(); history.push('/login') }
        , function () { });

    const redirectLinks = e => history.push('/' + e.target.id);

    return (
        (isAuthenticated) ? <Navbar
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
                    <Nav.Link id="products" className='nav-item' onClick={redirectLinks}>
                        <i className="fas fa-bread-slice"></i> Home
                        </Nav.Link>
                    <NavDropdown
                        title={<><i className="fas fa-hamburger"></i><span className="ml-2">{user.firstname}</span></>}
                        className='nav-item dropdown'
                        id='basic-nav-dropdown'
                    >
                        <NavDropdown.Item id="orders" onClick={redirectLinks}>Orders</NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='nav-item'>
                        <i className="fas fa-utensils"></i><span className="ml-2">Cart</span><Badge className="ml-3" variant="dark">9</Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> : null
    )
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logout })(Header));
