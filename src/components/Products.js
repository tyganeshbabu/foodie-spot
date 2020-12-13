import React from "react";
import logo from "../assets/logo.png";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Products() {
    return (
        <>
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

            <main role='main' className='container-fluid home-container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 col-sm-12 mt-2 mb-2 col-lg-3'>
                        <div className='card shadow-sm border-0 rounded-0'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <img
                                            className='card-img-top'
                                            src='https://picsum.photos/300/300'
                                            alt='Title'
                                        />
                                    </div>
                                    <div className='col-6'>
                                        <p className='font-weight-bold product-title'>
                                            Vegetable Sandwich
                    </p>
                                        <small className='text-muted h6'>$12</small>
                                        <button className='btn btn-primary btn-sm d-block mt-2'>
                                            Add
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Products;
