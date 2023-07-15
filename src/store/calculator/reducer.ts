import { Calculator } from "./action"
import * as actions from './type'

export interface ICalculatorState{
    result: number
}
const initCounterState: ICalculatorState={
    result: 0
}
const CaculatorReducer=(state:ICalculatorState = initCounterState,action:Calculator):ICalculatorState =>{
    switch(action.type){
        case actions.SUM: 
        state = {
            ...state,
            result: action.payload.number1 + action.payload.number2
        }
        break;
        case actions.SUBTRACTION: 
        state = {
            ...state,
            result: action.payload.number1 - action.payload.number2
        }
        break;
        case actions.MUTIPLY: 
        state = {
            ...state,
            result: action.payload.number1 * action.payload.number2
        }
        break;
        case actions.DIVIDE: 
        state = {
            ...state,
            result: action.payload.number1 / action.payload.number2
        }
        break;
    }
    return state;


}

export default CaculatorReducer