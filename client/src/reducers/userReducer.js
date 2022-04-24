import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
// userreducer is a state updater, it's work is to update a state
export default userReducer;
