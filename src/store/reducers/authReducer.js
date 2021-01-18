import {
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from "../actions/authActions";

const initState = {
  authError: null,
  signInError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signInError: null,
        authError: null,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.error,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signInError: null,
        authError: null,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authError: null,
        singInError: null,
        logoutError: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        logoutError: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
