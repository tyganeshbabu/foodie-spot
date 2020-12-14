import {
    GET_ORDERS
} from '../actions/types';

const initialState = {
    orders: [],
    post: null,
    loading: true,
    error: {}
};

export default function orders(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: payload,
                loading: false
            };
        default:
            return state;
    }
}
