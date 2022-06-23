import { combineReducers } from "redux";
import { setValue } from './setValueReducer';

export const reducers = combineReducers({
    inputValue: setValue,
});