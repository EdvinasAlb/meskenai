import { useState } from "react";
import "./App.css";
import "./form.css";

export default function App() {
  const [number, setNumber] = useState();
  const [total, setTotal] = useState(0);

  function summ() {
    setTotal(number + total);
  }

  function minus() {
    setTotal(total - number);
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>{total > 0 ? total : 0}</label>
        <input
          className="form"
          type="number"
          min={0}
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
        <div className="buttons">
          <button onClick={summ}>+</button>
          <button className="btn" onClick={minus}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}
