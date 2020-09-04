import React from 'react';
import logo from './logo.svg';
import './App.css';
import BabyNames from './BabyNames';
import babyNamesData from "./babyNamesData.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <BabyNames names={babyNamesData} />
      </header>
    </div>
  );
}

export default App;
