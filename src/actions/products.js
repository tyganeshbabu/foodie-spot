import api from '../utils/api';
import {
    GET_PRODUCTS, AUTH_ERROR
} from './types';

// Get products
export const getProducts = () => async dispatch => {
    try {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        const res = await api.get('http://localhost:9000/products');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};