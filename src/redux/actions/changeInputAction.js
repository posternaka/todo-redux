import { CHANGE } from "./actionTypes";

export const changeInput = (value) => ({
    type: CHANGE,
    payload: value,
})