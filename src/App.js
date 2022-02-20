import './App.css';
import {useState, useEffect} from "react";
import Wayback from './comps/wayback';



function App() {
  const [website, setWebsite] = useState("google.com");
  const [timestamp, setTimestamp] = useState("");

    return (
      <div className="App">
          <div>
            <label htmlFor="website">Website </label>
            <input id="website" type="text" value={website} onChange={e => setWebsite(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="timestamp">Find near date (DD.MM.YYYY) </label>
            <input id="timestamp" type="date" value={timestamp} onChange={e => setTimestamp(e.target.value)}/>
          </div>
          
        <Wayback website = {website} timestamp = {timestamp} />
      </div>
      
    );
    
}


export default App;
