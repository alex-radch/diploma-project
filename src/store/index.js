import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { loggerMiddleware } from '../middlewares';

export default function configureStore(history, reducer) {
  let middleWares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV === 'development') {
    middleWares = [loggerMiddleware, ...middleWares];
  }

  return createStore(reducer, {}, applyMiddleware(...middleWares));
}
