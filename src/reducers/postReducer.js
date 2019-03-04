import { NEW_POST, FETCH_ERROR } from '../actions/types';

const initialState = {
    currentData: {},
    statusError: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NEW_POST:
            return {
                currentData: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                statusError: action.payload
            }
        default:
            return state;
    }
}