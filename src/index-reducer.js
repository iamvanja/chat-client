import { combineReducers } from 'redux';
// needs to be named `form` or be ready for errors down the road
import { reducer as form } from 'redux-form';
import client from './components/Client/reducer';
import signup from './components/Signup/reducer';
import login from './components/Login/reducer';

const IndexReducer = combineReducers({
    client,
    signup,
    login,
    form,
});

export default IndexReducer;
