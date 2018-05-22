import {SUBMIT_STEP} from './actions';

const form = (state = {form: {step: 0}}, action) => {

    switch (action.type) {
        case SUBMIT_STEP:
            return Object.assign({}, state, {form: action.form});
        default:
            return state;
    }
};

export default form;

