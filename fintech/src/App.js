import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListComponet from "./component/ListComponet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list" exact>
          <ListComponet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
