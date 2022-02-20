import './App.css';
import {useState, useEffect} from "react";
import Wayback from './comps/wayback';



function App() {
  const [pvm, setPvm] = useState("");
  const [website, setWebsite] = useState("naurunappula.fi");
 

    return (
      <div className="App">
        <div><input type="text" /></div>
        <Wayback />
      </div>
    );
    
  }


export default App;