import React, { useState } from 'react'
import Button from './Button'
import { IRootState, store } from '../store'
import { useSelector } from 'react-redux'

type Props = {}

const Ui = (props: Props) => {
  
  const caculatorState = useSelector(
    (state: IRootState) => state.result
  )
  console.log(caculatorState)


  return (
    <div>Kết quả {caculatorState.result}</div>
  )
}

export default Ui