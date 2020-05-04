import produce from "immer";

// INITIAL STATE
const INITIAL_STATE = {
  profile: { nome: "No name" }
};

// REDUCER
export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "LOGIN_OK": {
        draft.profile = action.payload.user;
        break;
      }
      case "UPDATE_USER_SUCCESS": {
        //alert('Reduuucer! '+ action.payload.nome);
        draft.profile = action.payload;
        break;
      }
      case "SIGN_OUT": {
        draft.profile = { nome: "No name" };
        break;
      }
      default: {
        return state;
      }
    }
  });
}

/////////////////////////////////////// ACTIONS ///////////////////////////////////////

export function updateUser(data) {
  return {
    type: "UPDATE_USER",
    payload: data
  };
}

export function updateUserSuccess(data) {
  return {
    type: "UPDATE_USER_SUCCESS",
    payload: data
  };
}
