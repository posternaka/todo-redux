import {GET_VALUE, GET_VALUE_TRUE, DELETE, EDIT_VALUE, EDIT_NAME_TASK} from '../actions/actionTypes';
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
                    classShowEdit: false,
                    editNameTask: true,
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

        case EDIT_VALUE: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, classShowEdit: !item.classShowEdit} : item)
            ]
        }

        case EDIT_NAME_TASK: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, editNameTask: !item.classShowEdit} : item)
            ]
        }

        default: {
            return state;
        }
            
    }
}



