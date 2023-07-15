import * as actionType from './type'
export type Calculator = {
    type: string;
    payload: {
        number1: number,
        number2: number
    }
}

export function SumAction(number1:number , number2:number)  {
    const action : Calculator = {
        type: actionType.SUM,
        payload: {number1 , number2}
    }
    return(dispatch: actionType.DispatchType)=>{
        dispatch(action);
    }
}
export function Subtraction(number1:number , number2:number)  {
    const action : Calculator = {
        type: actionType.SUBTRACTION,
        payload: {number1 , number2}
    }
    return(dispatch: actionType.DispatchType)=>{
        dispatch(action);
    }
}
export function Mutiply(number1:number , number2:number)  {
    const action : Calculator = {
        type: actionType.MUTIPLY,
        payload: {number1 , number2}
    }
    return(dispatch: actionType.DispatchType)=>{
        dispatch(action);
    }
}
export function Divide(number1:number , number2:number)  {
    const action : Calculator = {
        type: actionType.DIVIDE,
        payload: {number1 , number2}
    }
    return(dispatch: actionType.DispatchType)=>{
        dispatch(action);
    }
}