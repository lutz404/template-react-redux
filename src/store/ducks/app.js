import produce from "immer";

// INITIAL STATE
const INITIAL_STATE = {
  menuOpen: false
};

/////////////////////////////////////// ACTIONS ///////////////////////////////////////

export function toogleMenu(data) {
  return {
    type: "UPDATE_USER",
    payload: data
  };
}

/////////////////////////////////////// REDUCERS ///////////////////////////////////////

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "OPEN_MENU": {
        draft.profile = action.userData.user;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
