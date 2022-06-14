import { combineReducers } from "redux";
import { getValueReducer } from "./getValueReducer";
import { setValueReducer } from "./setInputValueReducer";

export const reducers = combineReducers({
    arr: getValueReducer,
    value: setValueReducer,
})