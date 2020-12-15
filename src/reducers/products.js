import {
    GET_PRODUCTS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, SUBMIT_PRODUCTS
} from '../actions/types';

const initialState = {
    products: [],
    loading: true,
    addedItems: [],
    total: 0,
    error: {}
};

export default function products(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case ADD_ITEM_TO_CART:
            let itemIndex = state.addedItems.findIndex(p => p['_id'] === payload.id);
            if (itemIndex > -1) {
                let stateArray = state.addedItems.map(a => { return { ...a } });
                stateArray.find(p => p['_id'] === payload.id).unit = payload.unit;
                let newTotal = stateArray.reduce((a, b) => { return a + ((b.unit) * parseInt(b.unitprice['$numberDecimal'])) }, 0);
                return {
                    ...state,
                    addedItems: stateArray,
                    total: newTotal,
                    loading: false
                };
            } else {
                let addedItems = state.products.find(p => p['_id'] === payload.id);
                let newTotal = parseInt(addedItems.unitprice['$numberDecimal']) + state.total;
                let unitAdded = { ...addedItems, unit: 1 };
                return {
                    ...state,
                    addedItems: [...state.addedItems, unitAdded],
                    total: newTotal,
                    loading: false
                };
            }
        case REMOVE_ITEM_FROM_CART:
            let newItems = state.addedItems.filter(p => p['_id'] !== payload.id);
            let newTotal = 0;
            if (newItems.length) {
                newTotal = newItems.reduce((a, b) => { return a + ((b.unit) * parseInt(b.unitprice['$numberDecimal'])) }, 0);
            }
            return {
                ...state,
                addedItems: newItems,
                total: newTotal,
                loading: false
            };
        case SUBMIT_PRODUCTS:
            return {
                ...state,
                addedItems: [],
                total: 0
            };
        default:
            return state;
    }
}
