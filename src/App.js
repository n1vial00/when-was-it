import './App.css';
import {useState, useEffect} from "react";
import Wayback from './comps/wayback';



function App() {
  const [website, setWebsite] = useState("google.com");
  const [timestamp, setTimestamp] = useState("");

    return (
      <div className="App">
        <div>
        <h1>When Was It</h1>
        <p>Go back in time and discover your favourite websites again from a very different era.</p>
        </div>
          <div>
            <label htmlFor="website">Website </label>
            <input id="website" type="text" value={website} onChange={e => setWebsite(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="timestamp">Find date </label>
            <input id="timestamp" type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)}/>
          </div>
        <Wayback website = {website} timestamp = {timestamp} />
      </div>
      
    );
    
}


export default App;
