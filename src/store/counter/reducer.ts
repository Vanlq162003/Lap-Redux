import { counterAction } from "./action"
import * as actions from './type'

export interface ICounterState {
    counter: number
}
const initCounterState: ICounterState = {
    counter: 0
}
const counterReducer = (state: ICounterState = initCounterState, action: counterAction): ICounterState => {
    switch (action.type) {
        case actions.INCREASE_COUNT:
            state = {
                ...state,
                counter: state.counter + action.payload
            }
            return state
        default:
            return state;
    }



}

export default counterReducer