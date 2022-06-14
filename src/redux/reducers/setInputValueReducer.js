import {SET_VALUE} from '../actions/actionTypes';
const initValue = '';

export const setValueReducer = (state = initValue, action) => {
    switch (action.type) {
        case SET_VALUE: {
            return action.payload
        }

        default: {
            return state;
        }
            
    }
}