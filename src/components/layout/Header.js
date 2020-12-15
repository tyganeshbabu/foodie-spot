import React from 'react';
import logo from "../../assets/logo.png";
import { Navbar, NavDropdown, Nav, Badge } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import alertify from 'alertifyjs';
import setAuthToken from '../../utils/setAuthToken';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ location, auth: { isAuthenticated, user }, products: { addedItems }, history, logout }) => {

    const logoutHandler = () => alertify.confirm('Logout', 'Are you sure you want to logout?', function () { logout(); setAuthToken(); history.push('/login') }
        , function () { });

    const redirectLinks = e => history.push('/' + e.target.id);
    return (
        (isAuthenticated) ? <Navbar
            className='navbar navbar-expand-md fixed-top navbar-light bg-white home-navbar shadow-sm'
            expand='lg'
        >
            <Navbar.Brand className='main-nav navbar-brand' href="/products">
                <img alt='logo' src={logo} className='home-logo-img' />
            </Navbar.Brand>
            {(addedItems.length && (location.pathname === '/products')) ?
                <button className="d-block d-sm-none btn btn-primary" id="cart" onClick={redirectLinks}>Checkout</button> : null}
            <Navbar.Toggle
                aria-controls='basic-navbar-nav'
                className='navbar-toggler p-0 border-0'
            />
            <Navbar.Collapse id='navbarsExampleDefault' className="main-navbar-collapse">
                <Nav className='navbar-nav ml-auto home-menu'>
                    {(addedItems.length && (location.pathname === '/products')) ?
                        <button className="d-none d-sm-block btn btn-primary checkout-btn mr-5" id="cart" onClick={redirectLinks}>Checkout</button> : null}
                    <Nav.Link id="products" className={(location.pathname === '/products') ? 'active nav-item' : 'nav-item'} onClick={redirectLinks}>
                        <i className="fas fa-bread-slice"></i> Home
                        </Nav.Link>
                    <NavDropdown
                        title={<><i className="fas fa-hamburger"></i><span className="ml-2">{user.firstname}</span></>}
                        className={(location.pathname === '/orders') ? 'active nav-item dropdown' : 'nav-item dropdown'}
                        id='basic-nav-dropdown'
                    >
                        <NavDropdown.Item id="orders" className={(location.pathname === '/orders') ? 'active' : ''} onClick={redirectLinks}>Orders</NavDropdown.Item>
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={(location.pathname === '/cart') ? 'active nav-item' : 'nav-item'} id="cart" onClick={redirectLinks}>
                        <i className="fas fa-utensils mr-2"></i>Cart
                    </Nav.Link>
                    <Badge id="cart" className="mt-2" variant="dark"> {addedItems.length} </Badge>
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
    auth: state.auth,
    products: state.products
});

export default withRouter(connect(mapStateToProps, { logout })(Header));
