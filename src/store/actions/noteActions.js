export const createNote = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make ascyn call to db
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        authorFirstName: "Andrzej",
        authorLastName: "Kołubek",
        authorId: 12345,
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
