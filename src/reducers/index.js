import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';

const reducer = combineReducers({
  products,
  router: routerReducer
});

export default reducer;
