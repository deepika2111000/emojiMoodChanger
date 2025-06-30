import React,{useState} from 'react';
import './App.css';
import MoodDisplay from './MoodDisplay';

function App() {
  const[mood, setMood] = useState(null);

  return (
    <div className={`container ${mood}`}>
      <h1>How are you feeling today?</h1>
      <div className="buttons">
        <button className="btn happy" onClick={() => setMood("happy")}>😁happy</button>
        <button className="btn sad" onClick={() => setMood("sad")}>😔sad</button>
        <button className="btn excite" onClick={() => setMood("excite")}>😍excite</button>
        <button className="btn angry" onClick={() => setMood("angry")}>😤angry</button>
      </div>
      
      <MoodDisplay value={mood}/>
    </div>
  );
}

export default App;
