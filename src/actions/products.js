import api from '../utils/api';
import {
    GET_PRODUCTS, AUTH_ERROR, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART
} from './types';

// Get products
export const getProducts = () => async (dispatch, getState) => {
    try {
        //Loading if data is already in the state
        if (!getState().products.products.length) {
            api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            const res = await api.get('http://localhost:9000/products');
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data.data
            });
        }
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};


// Add item to cart
export const addProductToCart = (data) => dispatch => {
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: data
    });

};

export const removeProductFromCart = (data) => dispatch => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: data
    });

};
