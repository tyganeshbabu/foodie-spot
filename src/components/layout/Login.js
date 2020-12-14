import React, { useState } from "react";
import "./css/Login.css";
import logo from '../../assets/logo.png';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import alertify from 'alertifyjs';
const Login = ({ login, isAuthenticated, history }) => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  //e.target.name for getting username,password

  const onSubmit = (event) => {
    alertify.set('notifier', 'position', 'top-right');
    login(username, password);
    event.preventDefault();
  }

  if (isAuthenticated) {
    return <Redirect to="/products" />;
  }

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-center">
          <div className="login-middle">
            <div id="loginform">
              <form onSubmit={onSubmit} autoComplete="off">
                <fieldset className="login-fieldset">
                  <p>
                    <span className="fa fa-user login-user-icon"></span
                    ><input
                      autoFocus
                      className="login-user"
                      type="text"
                      value={username}
                      name="username"
                      onChange={onChange}
                      placeholder="Username"
                    />
                  </p>
                  <p>
                    <span className="fa fa-lock login-pass-icon"></span
                    ><input
                      className="login-pass"
                      type="password"
                      value={password}
                      name="password"
                      onChange={onChange}
                      placeholder="Password"
                    />
                  </p>
                  <div>
                    <input
                      type="submit"
                      value="Sign In" disabled={(username.trim() === '' || password.trim() === '')}
                      className="btn btn-md submit-btn"
                    />
                  </div>
                </fieldset>
              </form>
              <div className="login-logo-mob">
                <img alt="Foodie Spot Logo" src={logo} className="login-logo-img-mob ml-4" />
              </div>
            </div>
            <div className="login-logo">
              <img alt="Foodie Spot Logo" src={logo} className="login-logo-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
