import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import friendList from './friendList';

const rootReducer = combineReducers({
  routing: routerReducer,
  friendList
});

export default rootReducer;
