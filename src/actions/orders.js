import api from '../utils/api';
import {
    GET_ORDERS, AUTH_ERROR
} from './types';

// Get orders
export const getOrders = () => async dispatch => {
    try {
        const userid = JSON.parse(localStorage.getItem('user')).id;
        api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        const res = await api.get('http://ec2-18-219-204-150.us-east-2.compute.amazonaws.com:8000/orders/' + userid);
        dispatch({
            type: GET_ORDERS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};