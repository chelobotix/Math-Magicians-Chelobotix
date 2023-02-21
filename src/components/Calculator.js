import './calculator.css';

const CalculatorContainer = () => (
  <main>
    <Display />
    <Pad />
  </main>
);

const Display = () => (
  <div className="display">
    <p className="display">0</p>
  </div>
);

const Pad = () => {
  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="symbols-container">
      <button type="button" className="symbol">{symbols[0]}</button>
      <button type="button" className="symbol">{symbols[1]}</button>
      <button type="button" className="symbol">{symbols[2]}</button>
      <button type="button" className="symbol">{symbols[3]}</button>
      <button type="button" className="symbol">{symbols[4]}</button>
      <button type="button" className="symbol">{symbols[5]}</button>
      <button type="button" className="symbol">{symbols[6]}</button>
      <button type="button" className="symbol">{symbols[7]}</button>
      <button type="button" className="symbol">{symbols[8]}</button>
      <button type="button" className="symbol">{symbols[9]}</button>
      <button type="button" className="symbol">{symbols[10]}</button>
      <button type="button" className="symbol">{symbols[11]}</button>
      <button type="button" className="symbol">{symbols[12]}</button>
      <button type="button" className="symbol">{symbols[13]}</button>
      <button type="button" className="symbol">{symbols[14]}</button>
      <button type="button" className="symbol">{symbols[15]}</button>
      <button type="button" className="symbol">{symbols[16]}</button>
      <button type="button" className="symbol">{symbols[17]}</button>
      <button type="button" className="symbol">{symbols[18]}</button>
    </div>
  );
};

export default CalculatorContainer;
