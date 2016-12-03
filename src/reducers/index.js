import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  navBarReducer,
  routing: routerReducer
});

export default rootReducer;
