import React from 'react';
import './App.css';
import { ToggleButton } from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Button 1" color="lightblue" />
      <ToggleButton text="Button 2" color="lightgreen" />
      <ToggleButton text="Button 3" color="lightcoral" />
    </div>
  );
}

export default App;
