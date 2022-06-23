import {SET_VALUE, CHANGE, SET_NEW_TASK_VALUE} from '../actions/actionTypes';
const obj = {
    initValue: '',
    newTaskValue: '',
};

export const setValueReducer = (state = obj, action) => {
    switch (action.type) {
        case SET_VALUE: {
            return action.payload
        }

        case CHANGE: {
            return action.payload
        }

        case SET_NEW_TASK_VALUE: {
            return {
                newTaskValue: action.payload,
            }
        }

        default: {
            return state;
        }
            
    }
}