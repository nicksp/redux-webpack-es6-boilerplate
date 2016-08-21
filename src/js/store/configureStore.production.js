import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(promiseMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return enhancer(rootReducer, initialState);
}
