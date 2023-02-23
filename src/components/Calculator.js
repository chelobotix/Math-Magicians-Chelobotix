/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import './calculator.css';
import { useState } from 'react';
import Display from './Display';
import CalcButton from './Pad';
import calculate from '../logic/calculate';

const CalculatorContainer = () => {
  let [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (id) => {
    calcObj = { ...calculate(calcObj, id) };
    setCalcObj(calcObj);
  };
  return (
    <main>
      <Display calcObj={calcObj} />
      <div className="symbols-container">
        <CalcButton symbol="AC" function1={handleClick} />
        <CalcButton symbol="+/-" function1={handleClick} />
        <CalcButton symbol="%" function1={handleClick} />
        <CalcButton symbol="÷" function1={handleClick} />
        <CalcButton symbol="7" function1={handleClick} />
        <CalcButton symbol="8" function1={handleClick} />
        <CalcButton symbol="9" function1={handleClick} />
        <CalcButton symbol="x" function1={handleClick} />
        <CalcButton symbol="4" function1={handleClick} />
        <CalcButton symbol="5" function1={handleClick} />
        <CalcButton symbol="6" function1={handleClick} />
        <CalcButton symbol="-" function1={handleClick} />
        <CalcButton symbol="1" function1={handleClick} />
        <CalcButton symbol="2" function1={handleClick} />
        <CalcButton symbol="3" function1={handleClick} />
        <CalcButton symbol="+" function1={handleClick} />
        <CalcButton symbol="0" function1={handleClick} />
        <CalcButton symbol="." function1={handleClick} />
        <CalcButton symbol="=" function1={handleClick} />
      </div>
    </main>
  );
};

export default CalculatorContainer;
