import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import getDataReducer from './getDataReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    data: getDataReducer,
});
