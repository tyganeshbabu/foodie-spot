import api from '../utils/api';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';

import alertify from 'alertifyjs';
// Load User
export const loadUser = () => dispatch => {
  try {
    const userData = JSON.parse(localStorage.getItem('user'));
    dispatch({
      type: USER_LOADED,
      payload: userData
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Login User
export const login = (username, password) => async dispatch => {
  const body = { username, password };

  try {
    const res = await api.post('/auth/login', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    const token = res.data.accessToken;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    dispatch(loadUser());
  } catch (err) {
    if (err.response.status === 401) {
      alertify.error("Invalid Username / password").dismissOthers();;
    } else if (err.response.status === 500) {
      alertify.error("Server Error. Please try again").dismissOthers();
    }
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });

};
