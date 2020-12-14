import api from '../utils/api';
import {
    GET_ORDERS, AUTH_ERROR
} from './types';

// Get orders
export const getOrders = () => async dispatch => {
    try {
        const userid = JSON.parse(localStorage.getItem('user')).id;
        api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        const res = await api.get('http://localhost:9000/orders/' + userid);
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