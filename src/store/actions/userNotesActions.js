export const LOADING_ADD_NOTE = "LOADING_ADD_NOTE";
export const ADD_USER_NOTE_SUCCESS = "ADD_USER_NOTE_SUCCESS";
export const ADD_USER_NOTE_ERROR = "ADD_USER_NOTE_ERROR";

export const LOADING_GET_NOTES = "LOADING_NOTES";
export const STOP_LOADING_GET_NOTES = "STOP_LOADING_GET_NOTES";

export const addUserNote = ({ title, content }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: LOADING_ADD_NOTE });
    const state = getState();
    const uid = state.firebase.auth.uid;
    const firestore = getFirestore();
    const id =
      Date.now().toString() + (Math.floor(Math.random() * 1000) + 1).toString();
    firestore
      .set(
        { collection: `users/${uid}/notes`, doc: id },
        {
          title: title,
          content: content,
          createdAt: firestore.FieldValue.serverTimestamp(),
          id: id,
        }
      )
      .then((res) => {
        dispatch({ type: ADD_USER_NOTE_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: ADD_USER_NOTE_ERROR, error: err });
      });
  };
};

export const getUserNotes = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: LOADING_GET_NOTES });
    const firestore = getFirestore();
    firestore.setListener({
      collection: `users/${uid}/notes`,
      orderBy: ["createdAt"],
    });
  };
};

export const deleteUserNote = (noteID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .delete({ collection: `users/${uid}/notes`, doc: noteID })
      .then((res) => {})
      .catch((err) => {});
  };
};
