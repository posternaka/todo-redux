import { SET_NEW_TASK_VALUE } from "./actionTypes"

export const setNewTaskValue = (value) => ({
    type: SET_NEW_TASK_VALUE,
    payload: value,
})