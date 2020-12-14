import React, { useEffect } from 'react';
import './App.css';
import Login from './components/layout/Login';
import Products from './components/products/Products';
import Orders from './components/orders/Orders';
import NotFound from './components/layout/NotFound';
import Header from './components/layout/Header';
import 'alertifyjs/build/css/alertify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './actions/types';
const App = () => {
  useEffect(() => {
    // check for token in Local Storage
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="bg-light">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'
              component={() => (<Redirect to='/login' />)} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/orders" component={Orders} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
