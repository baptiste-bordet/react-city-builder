import {CHANGE_FORM_STEP} from './actions';

const formStep = (state = {formStep: 0}, action) => {

    switch (action.type) {
        case CHANGE_FORM_STEP:
            return Object.assign({}, state, {formStep: action.step});
        default:
            return state;
    }
};

export default formStep;

