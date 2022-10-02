import { combineReducers, legacy_createStore } from "redux";
import { dataReducer } from "./Data/Reducer";

const enhancer = combineReducers({
    Data:dataReducer
})



export const store = legacy_createStore(enhancer)