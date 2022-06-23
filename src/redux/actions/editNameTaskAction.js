import { EDIT_NAME_TASK } from "./actionTypes"

export const editNameTask = (id) => ({
    type: EDIT_NAME_TASK,
    payload: id,
})