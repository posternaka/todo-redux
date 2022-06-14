import {GET_VALUE} from '../actions/actionTypes';
const arr = [];

export const getValueReducer = (state = arr, action) => {
    switch (action.type) {
        case GET_VALUE: {
            return [
                ...state,
                action.payload,
            ]
        }

        default: {
            return state;
        }
            
    }
}