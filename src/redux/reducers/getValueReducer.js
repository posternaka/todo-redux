import {GET_VALUE, GET_VALUE_TRUE, DELETE} from '../actions/actionTypes';
const arr = [];

export const getValueReducer = (state = arr, action) => {
    switch (action.type) {
        case GET_VALUE: {
            return [
                ...state,
                {
                    id: Date.parse(new Date()), 
                    text: action.payload,
                    status: false,
                }
            ]
        }

        case GET_VALUE_TRUE: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, status: !item.status} : item)
            ]
        }

        case DELETE: {
            return [
                ...state.filter(item => item.id !== action.payload)
            ]
        }

        default: {
            return state;
        }
            
    }
}



