import React from "react";
//import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <PersistGate persistor={persistor}>
    <Route
      {...rest}
      render={props =>
        store.getState().auth.logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  </PersistGate>
);

/*
PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
*/

export default PrivateRoute;
