function App() {

  let [expression, setExpression] = React.useState("");
  let [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
      setExpression(prev => prev + symbol);
      if(expression[expression.length-1] == "=") {
        if (/[0-9]/.test(symbol)) {
          setExpression(symbol)
        } else {
            setExpression(answer + symbol);
        }
      }
    };

    const calculate = () => {
      setAnswer(eval(expression));
      setExpression((prev) => prev + "=");
    }

    const allClear = () => {
      setExpression("");
      setAnswer(0)
    }
    const clear = () => {
      setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
      setAnswer(0);
  };


  return (
  <div className="container">
    <div className="grid">
      <div onClick={display} className="dis">
        <input type="text" value={expression} placeholders="0" disabled/>
        <div className="total">{answer}</div>
      </div>
      <div onClick={allClear} className="padButton AC clear-btn">AC</div>
      <div onClick={clear} className="padButton C clear-btn">C</div>
      <div onClick={() => display("÷")} className="padButton div">÷</div>
      <div onClick={() => display("*")} className="padButton times">x</div>
      <div onClick={() => display("7")} className="padButton 7 num-grid">7</div>
      <div onClick={() => display("8")} className="padButton 8 num-grid">8</div>
      <div onClick={() => display("9")} className="padButton 9 num-grid">9</div>
      <div onClick={() => display("-")} className="padButton minus">-</div>
      <div onClick={() => display("4")} className="padButton four num-grid">4</div>
      <div onClick={() => display("5")} className="padButton five num-grid">5</div>
      <div onClick={() => display("6")} className="padButton six num-grid">6</div>
      <div onClick={() => display("+")} className="padButton plus">+</div>
      <div onClick={() => display("1")} className="padButton one num-grid">1</div>
      <div onClick={() => display("2")} className="padButton two num-grid">2</div>
      <div onClick={() => display("3")} className="padButton three num-grid">3</div>
      <div onClick={calculate} className="padButton equal equal-btn">=</div>
      <div onClick={() => display("0")} className="padButton zero num-grid">0</div>
      <div onClick={() => display(".")} className="padButton dot num-grid">.</div>
      
    </div>
    </div>
  );
}   





ReactDOM.render(<App/>, document.getElementById("root"));