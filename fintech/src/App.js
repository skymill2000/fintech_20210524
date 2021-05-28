import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import ListComponent from "./component/ListComponent";
import AuthResultPage from "./pages/AuthResultPage";
import BalancePage from "./pages/BalancePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import QrCodePage from "./pages/QrCodePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage />
        </Route>
        <Route path="/list" exact>
          <ListPage />
        </Route>
        <Route path="/balance" exact>
          <BalancePage />
        </Route>
        <Route path="/qr" exact>
          <QrCodePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
