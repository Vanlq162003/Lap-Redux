import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reducer";
import thunk from "redux-thunk";
import  { ICalculatorState } from "./calculator/reducer";
import CaculatorReducer from "./calculator/reducer";

export interface IRootState {
    counter: ICounterState
    result: ICalculatorState
}

const rootReducer = combineReducers({
    counter: counterReducer,
    result: CaculatorReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));