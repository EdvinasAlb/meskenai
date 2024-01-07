import { useState } from "react";
import "./App.css";
import A from "./Components/12.20/A";
import { Context } from "./Components/12.20/Context";
import { ColorContext } from "./Components/12.20/ColorContext";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [color, setColor] = useState("#000000");
  const hello = "hello, Africa!";

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          CONTEXT I:{counter1} II:{counter2}
        </h1>
        <div>
          <button onClick={(_) => setCounter1((c) => c + 1)}>I+</button>
          <button onClick={(_) => setCounter2((c) => c + 1)}>II+</button>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <ColorContext.Provider
          value={{
            color,
          }}
        >
          <Context.Provider
            value={{
              counter2,
              hello,
            }}
          >
            <A counter1={counter1} />
          </Context.Provider>
        </ColorContext.Provider>
      </header>
    </div>
  );
}
