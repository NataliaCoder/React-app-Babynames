import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BabyNames from './BabyNames';
import babyNamesData from "./babyNamesData.json";
import About from "./About";

function App() {
  return (
  <BrowserRouter>
<Link to="/">BabyName App</Link>
<Link to="/about">About</Link>
<Link to="/contacts">Contacts</Link>

{/* <Route path="" */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <Switch>
    <Route exact path="/"><BabyNames names={babyNamesData} /></Route>
    <Route path="/about/"><About /></Route>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
