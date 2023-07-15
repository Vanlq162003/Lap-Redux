import * as actionType from './type'

export type counterAction = {
    type: string;
    payload: number
}

export function inCreaseCountAction(count:number)  {
    const action : counterAction = {
        type: actionType.INCREASE_COUNT,
        payload: count 
    }
    return(dispatch: actionType.DispatchType)=>{
        dispatch(action);
    }
}