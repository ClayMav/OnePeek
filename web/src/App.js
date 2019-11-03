import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./screens/Login";
import { Passage } from "./screens/Passage";

import styled from "styled-components";

const Main = styled.main`
  background: #30323a;
`;

function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passage">
            <Passage />
          </Route>
          <Route path="/profile">
            <h1>See ya</h1>
          </Route>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
