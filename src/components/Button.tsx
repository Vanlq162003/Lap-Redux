import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { Divide, Mutiply, Subtraction, SumAction } from '../store/calculator/action'
// import { inCreaseCountAction } from '../store/counter/action'

type Props = {}

const Button = (props: Props) => {
  const [number1, setNumber1] = useState<number>(0)
  const [number2, setNumber2] = useState<number>(0)

  const dispatch: Dispatch<any> = useDispatch()


  const sum = () => {

    dispatch(SumAction(number1, number2))
  }
  const sub = () => {

    dispatch(Subtraction(number1, number2))
  }
  const muti = () => {

    dispatch(Mutiply(number1, number2))
  }
  const divi = () => {

    dispatch(Divide(number1, number2))
  }


  return <>




    <input type="number" onChange={(e) => setNumber1(+e.target.value)} /><br /> <br />
    <input type="number" onChange={(e) => setNumber2(+e.target.value)} /><br /> <br />

    <button onClick={sum} >Cong</button>
    <button onClick={sub}>Tru</button>
    <button onClick={muti} >Nhan</button>
    <button onClick={divi} >Chia</button>

  </>
}

export default Button