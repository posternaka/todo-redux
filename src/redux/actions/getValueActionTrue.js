import { GET_VALUE_TRUE } from "./actionTypes"

export const getValueTrue = (id) => ({
    type: GET_VALUE_TRUE,
    payload: id,
})