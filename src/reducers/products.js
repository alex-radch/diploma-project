import { PRODUCTS_SET } from '../actions';

const defaultState = [];

export default (state = defaultState, action) => { 
    switch (action.type) {
        case PRODUCTS_SET:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};
