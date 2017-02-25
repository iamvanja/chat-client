import { combineReducers } from 'redux';
// needs to be named `form` or be ready for errors down the road
import { reducer as form } from 'redux-form';

const IndexReducer = combineReducers({
    form,
});

export default IndexReducer;
