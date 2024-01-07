import { useState } from "react";
import "./App.css";
import "./form.css";

export default function App() {
  const [showText, setshowText] = useState("---");

  const [singleText, setsingleText] = useState("");

  const [multiText, setMultiText] = useState(["", "", ""]);

  const handleSingleText = (e) => {
    setsingleText(e.target.value);
  };

  const handleMultiText = (e, index) => {
    // no call back
    // const newMultiText = [...multiText];
    // newMultiText[index] = e.target.value;
    // setMultiText(newMultiText);
    // with call back
    // setMultiText(prev => {
    //     const newMultiText = [...prev];
    //     newMultiText[index] = e.target.value;
    //     return newMultiText;
    // });
    // with call back and map
    setMultiText((prev) =>
      prev.map((item, i) => (i === index ? e.target.value : item))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Form control</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Name"
            value={singleText}
            onChange={handleSingleText}
          />
          <h3>{showText}</h3>
          <button onClick={(_) => setshowText(singleText)}>Show</button>
          <button onClick={(_) => setsingleText("")}>Clear</button>

          <input
            type="text"
            placeholder="Animal 1"
            value={multiText[0]}
            onChange={(e) => handleMultiText(e, 0)}
          />
          <input
            type="text"
            placeholder="Animal 2"
            value={multiText[1]}
            onChange={(e) => handleMultiText(e, 1)}
          />
          <input
            type="text"
            placeholder="Animal 3"
            value={multiText[2]}
            onChange={(e) => handleMultiText(e, 2)}
          />
        </div>
      </header>
    </div>
  );
}
