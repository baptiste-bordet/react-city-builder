import {SUBMIT_STEP} from './actions';
import {LOGIN} from './actions';
import {LOGOUT} from './actions';

const form = (state = {form: {step: 0}, user: {}}, action) => {

    switch (action.type) {
        case SUBMIT_STEP:
            return Object.assign({}, state, {form: action.form});
        case LOGIN:
            console.log('reducer : ' + JSON.stringify(action.user));
            return Object.assign({}, state, {user: action.user});
        case LOGOUT:
            return Object.assign({}, state, {user: {}});
        default:
            return state;
    }
};

export default form;

