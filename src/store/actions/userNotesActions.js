export const ADD_USER_NOTE = "ADD_USER_NOTE";

export const addUserNote = ({ title, content }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    const firestore = getFirestore();
    const id =
      Date.now().toString() + (Math.floor(Math.random() * 1000) + 1).toString();
    firestore
      .add(
        { collection: `users/${uid}/notes` },
        {
          title: title,
          content: content,
          createdAt: firestore.FieldValue.serverTimestamp(),
          id: id,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
