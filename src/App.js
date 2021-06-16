import './App.css';
import Home from './Home.js';
import History from './History.js';
import Team from './Team.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './Logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li id="homeLink">
              <Link to="/"><img src={logo} alt="logo"></img></Link>
            </li>
            <li id="historyLink">
              <Link to="/history">01. History</Link>
            </li>
            <li id="teamLink">
              <Link to="/team">02. Team</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
