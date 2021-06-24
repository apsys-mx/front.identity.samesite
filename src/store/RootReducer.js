/** Redux section imports */
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

export default combineReducers({
    oidc: oidcReducer,
 });
 