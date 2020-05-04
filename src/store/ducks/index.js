import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";
import auth from "./auth";
import app from "./app";
import user from "./user";

export default history =>
  combineReducers({
    auth,
    app,
    user,
    toastr,
    router: connectRouter(history)
  });
