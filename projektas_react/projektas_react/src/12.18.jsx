import { useCallback, useEffect, useState } from "react";
import "./App.css";
import ColorCircle from "./Components/12.19/ColorCircle";
import randomColor from "./funkcijos/randomColor";

export default function App() {
  const [counterYellow, setcounterYellow] = useState(0);
  const [counterRed, setcounterRed] = useState(0);
  const [circleColor, setcircleColor] = useState("#777777");

  //   const changeColor = (_) => {
  //     setcircleColor(randomColor());
  //   };
  const changeColor = useCallback(
    (_) => {
      setcircleColor(randomColor());
    },
    [setcircleColor]
  );

  const countYellow = (_) => {
    setcounterYellow((c) => c + 1);
    // changeColor();
  };
  const countRed = (_) => {
    setcounterRed((c) => c + 1);
    // changeColor();
  };

  useEffect(
    (_) => {
      changeColor();
    },
    [changeColor, counterRed, counterYellow]
  );

  const click = (ja) => console.log(ja + " click");
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Is state and useEfect</h1>

        <ColorCircle color={circleColor} />

        <div>
          <button onClick={countYellow}>{counterYellow}</button>
          <button onClick={countRed}>{counterRed}</button>
          <button onClick={(_) => click("ja ja")}>
            <h2>CLICK</h2>
          </button>
        </div>
      </header>
    </div>
  );
}
