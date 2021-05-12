import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <h1>Login</h1>
          {/* <Footer /> */}
        </Route>
        <Route path="/">
          <Home />
          {/* <Footer /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
