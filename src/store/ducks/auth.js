import produce from "immer";

// INITIAL STATE
const INITIAL_STATE = {
  logged: !!localStorage.getItem("@APP:token"),
  token: localStorage.getItem("@APP:token") || null
};

/////////////////////////////////////// ACTIONS ///////////////////////////////////////

export function loginRequest(email, password) {
  return {
    type: "LOGIN_REQUEST",
    payload: { email, password }
  };
}
export function loginOK(data) {
  return {
    type: "LOGIN_OK",
    payload: data
  };
}
export function signOutRequest(data) {
  return {
    type: "SIGN_OUT_REQUEST",
    payload: data
  };
}
export function signOutOK(data) {
  return {
    type: "SIGN_OUT_OK",
    payload: data
  };
}

/////////////////////////////////////// REDUCERS ///////////////////////////////////////

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "LOGIN_OK": {
        draft.logged = true;
        draft.token = action.payload.token;
        break;
      }
      case "SIGN_OUT_OK": {
        draft.logged = false;
        draft.token = null;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
