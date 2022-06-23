import { SET_INPUT_VALUE, EDIT_VALUE, DELETE, CHANGE_VALUE, VISIBLE_TEXT, CHECKBOX } from './actionsTypes';

export const setInputValue = (value) => {
    return {
        type: SET_INPUT_VALUE,
        payload: value,
    };
};

export const editValue = (value) => {
    return {
        type: EDIT_VALUE,
        payload: value,
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE,
        payload: id,
    };
};

export const changeValue = (value, id) => {
    return {
        type: CHANGE_VALUE,
        payload: {value, id},
    };
};

export const visibleText = (id) => {
    return {
        type: VISIBLE_TEXT,
        payload: id,
    };
};

export const checkbox = (id) => {
    return {
        type: CHECKBOX,
        payload: id,
    };
};