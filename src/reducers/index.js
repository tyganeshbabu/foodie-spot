import { combineReducers } from 'redux';
import auth from './auth';
import orders from './orders';
import products from './products';
export default combineReducers({
    auth,
    orders,
    products
});
