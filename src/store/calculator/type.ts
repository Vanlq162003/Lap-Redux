import { Calculator } from "./action";
export const SUM = 'SUM'
export const SUBTRACTION = 'SUBTRACTION'
export const MUTIPLY = 'MUTIPLY'
export const DIVIDE = 'DIVIDE'

export type DispatchType  = (args:Calculator)=> Calculator
