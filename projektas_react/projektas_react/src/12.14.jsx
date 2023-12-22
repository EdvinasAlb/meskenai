import "./App.css";
import BetKoksTekstas from "./Components/1214/BetKoksTekstas";
import LabasZuiki from "./Components/1214/LabasZuiki";
import ZebraiirBebrai from "./Components/1214/ZebraiirBebrai";
import Racoon from "./Components/1214/racoon";

function App() {
  
  let skaicius = 2;
  let color;
  if(skaicius==1){
    color = 'blue'
  } else if (skaicius == 2){
    color = 'red'
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{background:'red'}}>REACT</h1> */}
        {/* <Racoon />
        <Racoon></Racoon> */}
        {/* <LabasZuiki /> */}
        {/* <BetKoksTekstas props={'BetKoksekstas'}/> */}
        <ZebraiirBebrai props = {{color}}></ZebraiirBebrai>
      </header>
    </div>
  );
}

export default App;