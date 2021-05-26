import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import ListComponent from "./component/ListComponent";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

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
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
