import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleNum1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(event.target.value));
  };

  const handleOperation = (operator: string) => {
    let calculatedResult: number | null = null;

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />

      <button onClick={() => handleOperation('+')}>Cộng</button>
      <button onClick={() => handleOperation('-')}>Trừ</button>
      <button onClick={() => handleOperation('*')}>Nhân</button>
      <button onClick={() => handleOperation('/')}>Chia</button>

      {result !== null && <p>Kết quả: {result}</p>}
    </div>
  );
};

export default Calculator;
