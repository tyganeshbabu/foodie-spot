import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  ...remainingProps
}) => (
  <Route
    {...remainingProps}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

/**  
  https://stackoverflow.com/questions/43484302/what-does-it-mean-rest-in-react-jsx
  let's break down the { component: Component, ...rest } expression into two separate operations:

Operation 1: Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component.
Operation 2: Then, take all remaining properties defined on the props object and collect them inside an argument called rest.
The important point is that you're NOT renaming props to rest. (And nor does it have to do with trying to "avoid naming issues with the props passed to the Route render function".) 

Your simply pulling off the remaining prps of the properties defined on your props object 
*/

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
