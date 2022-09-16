import {combineReducers} from 'redux';
import home from './home';

const rootReducer = combineReducers({
  homeState: home
});

export default rootReducer;
