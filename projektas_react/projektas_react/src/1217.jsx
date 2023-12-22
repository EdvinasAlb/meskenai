import { useEffect, useState } from "react";
import "./App.css";
import Sq from "./Components/12.18/Sq";
import randomColor from "./funkcijos/randomColor";
import { v4 as uuidv4 } from "uuid";
import BigSq1 from "./Components/12.18/BigSq1";
import BigSq2 from "./Components/12.18/BigSq2";
function App() {
  const [squares, setSquares] = useState([]);
  const [sq1, setSq1] = useState("#000000");
  const [sq2, setSq2] = useState("#700004");
  const [sync, setSync] = useState(false);

  useEffect(
    (_) => {
      console.log("Squares are changed");
      if (sync) {
        setSquares((s) => s.map((s) => ({ ...s, show: true })));
        setSync(false);
      }
    },
    [squares]
  );

  const add = (_) => {
    setSquares((s) => [
      ...s,
      { color: randomColor(), id: uuidv4(), show: true },
    ]);
  };

  const reset = (_) => {
    setSquares((s) => s.map((s) => ({ ...s, show: false })));
  };

  const syncSpin = (_) => {
    setSquares((s) => s.map((s) => ({ ...s, show: false })));
    setSync(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is state part 2</h1>
        <div className="squares">
          {squares.map((s, i) =>
            s.show ? <Sq setSquares={setSquares} square={s} key={i} /> : null
          )}
        </div>
        <div className="buttons">
          <button onClick={add}>+</button>
          <button onClick={reset}>0</button>
          <button
            onClick={(_) =>
              setSquares((s) => s.map((s) => ({ ...s, show: true })))
            }
          >
            *
          </button>
          <button onClick={syncSpin}>Sync</button>
        </div>
        <div className="squares">
          <BigSq1 sq1={sq1} setSq1={setSq2} />
          <BigSq2 sq2={sq2} setSq2={setSq1} />
        </div>
      </header>
    </div>
  );
}

export default App;
