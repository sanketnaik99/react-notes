// Sign Up Actions
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

// Sign In Actions
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

// Logout Actions
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const signUpUser = ({ name, email, password }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .createUser(
        { email, password },
        { name: name, email: email, initial: name[0] }
      )
      .then((res) => {
        // console.log(res);
        dispatch({ type: SIGN_UP_SUCCESS });
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: SIGN_UP_ERROR, error: err });
      });
  };
};

export const signInUser = ({ email, password }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .login({ email, password })
      .then((res) => {
        console.log(res);
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGN_IN_ERROR, error: err });
      });
  };
};

export const logoutUser = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .logout()
      .then((res) => {
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGOUT_ERROR, error: err });
      });
  };
};
