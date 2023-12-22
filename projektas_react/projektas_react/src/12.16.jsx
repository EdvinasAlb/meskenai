import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [squares, setSquares] = useState([]);

  const randomColor = (_) =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const plus = (_) => {
    setCounter((c) => c + 1);
  };

  const reset = (_) => {
    setCounter(0);
  };

  const addSquare = (_) => {
    // squares.push(5); // BAD
    setSquares((s) => [...s, randomColor()]); // GOOD
  };

  const resetSquares = (_) => {
    setSquares([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is state</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={plus}>+</button>
          <button onClick={reset}>0</button>
        </div>
        <div className="squares">
          {squares.map((square, i) => (
            <div
              className="square spin"
              style={{
                backgroundColor: square + "66",
                border: "1px solid " + square,
              }}
              key={i}
            >
              {square}
            </div>
          ))}
        </div>
        <div>
          <button onClick={addSquare}>ADD SQUARE</button>
          <button onClick={resetSquares}>RESET</button>
        </div>
      </header>
    </div>
  );
}

export default App;
