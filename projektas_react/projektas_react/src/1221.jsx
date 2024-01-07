import { useEffect, useState } from "react";
import "./App.css";
import "./form.css";

export default function App() {
  const [cat, setCat] = useState("");
  const [dog, setDog] = useState("");
  const [bird, setBird] = useState("");

  useEffect((_) => {
    // getCat(setCat(localStorage.getItem("Cat")));
    const animals = JSON.parse(localStorage.getItem("animals"));
    if (null === animals) {
      return;
    }
    setCat(animals.cat);
    setDog(animals.dog);
    setBird(animals.bird);
  }, []);

  const saveCat = (_) => {
    localStorage.setItem("Cat", cat);
  };

  const clear = (_) => {
    localStorage.clear();
  };

  const removeCat = (_) => {
    localStorage.removeItem("Cat");
  };

  const getCat = (_) => {
    setCat(localStorage.getItem("Cat"));
  };

  const addDog = (_) => {
    localStorage.setItem("Dog", dog);
  };

  const removeDog = (_) => {
    localStorage.removeItem("Dog");
  };

  const addBird = (_) => {
    localStorage.setItem("Bird", bird);
  };

  const removeBird = (_) => {
    localStorage.removeItem("Bird");
  };

  const addAll = (_) => {
    localStorage.setItem("animals", JSON.stringify({ cat, dog, bird }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Local Storage</h1>
        <div className="form">
          <label>Cat</label>
          <input
            type="text"
            name="cat"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
          <label>Dog</label>
          <input
            type="text"
            name="dog"
            value={dog}
            onChange={(e) => setDog(e.target.value)}
          />
          <label>Bird</label>
          <input
            type="text"
            name="bird"
            value={bird}
            onChange={(e) => setBird(e.target.value)}
          />
          <div className="buttons">
            <button onClick={saveCat}>Add Cat</button>
            <button onClick={removeCat}>Remove Cat</button>
            <button style={{ background: "black" }} onClick={getCat}>
              Get Cat
            </button>
            <button onClick={addDog}>Add Dog</button>
            <button onClick={removeDog}>Remove Dog</button>
            <button onClick={addBird}>Add Bird</button>
            <button onClick={removeBird}>Remove Bird</button>
            <button style={{ background: "black" }} onClick={clear}>
              Clear
            </button>
            <button style={{ background: "black" }} onClick={addAll}>
              Add All
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
