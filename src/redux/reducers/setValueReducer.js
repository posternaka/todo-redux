import { SET_INPUT_VALUE, EDIT_VALUE, DELETE, CHANGE_VALUE, VISIBLE_TEXT, CHECKBOX } from '../actions/actionsTypes';

const initStore = [];

export const setValue = (state = initStore, action) => {
    switch(action.type) {
        case SET_INPUT_VALUE: {
            return [
                ...state,
                {
                id: Date.parse(new Date()), 
                chekbox: false, 
                editValue: false, 
                visibleText: !false,
                textTask: action.payload, 
            }]
        }

        case EDIT_VALUE: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, editValue: !item.editValue} : item)
            ]
        }

        case DELETE: {
            return [
                ...state.filter((item) => item.id !== action.payload)
            ]
        }

        case CHANGE_VALUE: {
            return [
                ...state.map((item) => item.id === action.payload.id ? {...item, textTask: action.payload.value} : item)
            ]
        }

        case VISIBLE_TEXT: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, visibleText: !item.editValue} : item)
            ]
        }

        case CHECKBOX: {
            return [
                ...state.map((item) => item.id === action.payload ? {...item, checkbox: !item.checkbox} : item)
            ]
        }

        default: {
            return state
        }
    }
}