import React from "react";
import "./Login.css";
import logo from '../assets/logo.png';

const Login = () => {
  const onSubmit = (event) => {
    console.log('submitted');
    event.preventDefault();
  }
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-center">
          <div className="login-middle">
            <div id="loginform">
              {/* <div className="linkStyle ml-4 mb-2">
                <h4>Login</h4>
              </div> */}
              <form onClick={onSubmit}>
                <fieldset className="login-fieldset">
                  <p>
                    <span className="fa fa-user login-user-icon"></span
                    ><input
                      className="login-user"
                      type="text"
                      placeholder="Username"
                    />
                  </p>
                  <p>
                    <span className="fa fa-lock login-pass-icon"></span
                    ><input
                      className="login-pass"
                      type="password"
                      placeholder="Password"
                    />
                  </p>
                  <div>
                    <input
                      type="submit"
                      value="Sign In"
                      className="btn btn-md submit-btn"
                    />
                  </div>
                </fieldset>
              </form>
              <div className="login-logo-mob">
                <img alt="Foodie Spot Logo" src={logo} className="login-logo-img-mob ml-5" />
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

export default Login;