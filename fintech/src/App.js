import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import ListComponent from "./component/ListComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list" exact>
          <ListComponent />
        </Route>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
