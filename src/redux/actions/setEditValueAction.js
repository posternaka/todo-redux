import { EDIT_VALUE } from "./actionTypes"

export const setEditValue = (id) => ({
    type: EDIT_VALUE,
    payload: id,
})