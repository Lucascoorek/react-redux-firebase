export const createNote = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make ascyn call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const id = getState().firebase.auth.uid;
    firestore
      .collection("notes")
      .add({
        ...note,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: id,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_NOTE",
          note: note
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_NOTE_ERROR",
          err
        });
      });
  };
};
