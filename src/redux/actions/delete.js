import { DELETE } from "./actionTypes"

export const deleted = (value) => ({
    type: DELETE,
    payload: value,
})