import {SET_LANGUAGE} from './actions';

var data = require('../data.json');

const form = (state = {data: data['EN']}, action) => {

    switch (action.type) {
        case SET_LANGUAGE:
            return Object.assign({}, state, {data: data[action.language]});
        default:
            return state;
    }
};

export default form;