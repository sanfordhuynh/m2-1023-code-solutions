import React, { useState } from 'react';
import './App.css';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch-container" onClick={toggleSwitch}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}>
        <div className="toggle" />
      </div>
      <span className="label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ToggleSwitch />
    </div>
  );
}

export default App;
