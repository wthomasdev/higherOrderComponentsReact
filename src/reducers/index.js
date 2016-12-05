import { combineReducers } from 'redux';
import authnticationReducer from './authentication'

const rootReducer = combineReducers({
  authenticated: authnticationReducer
});

export default rootReducer;
