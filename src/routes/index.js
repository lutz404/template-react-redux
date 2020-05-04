import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

//import { PersistGate } from 'redux-persist/integration/react';

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import Login from "../pages/Auth/Login";

import Main from "../pages/Main";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest exact path="/login" component={Login} />
      <Private exact path="/home" component={Home} />
      <Private exact path="/profile" component={Profile} />
      <Route exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
