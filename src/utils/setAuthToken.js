import api from './api';

const setAuthToken = token => {
  if (token) {
    // alert('inside set auth token');
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.clear();
  }
};

export default setAuthToken;
