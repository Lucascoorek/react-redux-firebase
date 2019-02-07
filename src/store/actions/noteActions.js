export const createNote = note => {
  return (dispatch, getState) => {
    //make ascyn call to db
    dispatch({
      type: "CREATE_NOTE",
      note: note
    });
  };
};
