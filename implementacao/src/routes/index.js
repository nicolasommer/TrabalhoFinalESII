import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../views/home/index";
import RegisterForm from "../views/register/index";
import List from "../views/List/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
        <Route exact path="/list-delete">
          <List showButtonDelete={true} />
        </Route>
        <Route exact path="/not-found">
          <div>
            <h1>Página não encontrada :/</h1>
          </div>
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default Routes;
