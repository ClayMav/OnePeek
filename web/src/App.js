import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./screens/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/passage">
          <h1>Bye</h1>
        </Route>
        <Route path="/profile">
          <h1>See ya</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
