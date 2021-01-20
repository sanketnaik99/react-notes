import { ADD_USER_NOTE } from "../actions/userNotesActions";

const initialState = [];

const userNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_NOTE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userNotesReducer;
