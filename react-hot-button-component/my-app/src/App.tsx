import React, { useState } from 'react';
import './App.css';

const colors = ['black', 'dark', 'magenta', 'red', 'orange', 'yellow', 'white'];

function HotButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const colorIndex = Math.min(Math.floor(clickCount / 3), colors.length - 1);
  const buttonColor = colors[colorIndex];

  return (
    <div>
      <button className={`hot-button ${buttonColor}`} onClick={handleClick}>
        Hot Button
      </button>
      <p>{clickCount} Clicks</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HotButton />
    </div>
  );
}

export default App;
