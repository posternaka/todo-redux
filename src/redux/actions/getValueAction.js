import { GET_VALUE } from "./actionTypes"

export const getValue = (value) => ({
    type: GET_VALUE,
    payload: value,
})