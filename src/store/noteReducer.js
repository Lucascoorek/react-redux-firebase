const initialState = {
  notes: [
    { id: "1", title: "First Note", content: "Jezus has talked to me!" },
    { id: "2", title: "Second Note", content: "Jezus has talked to me!" },
    { id: "3", title: "Third Note", content: "Jezus has talked to me!" }
  ]
};
const noteReducer = (state = initialState, action) => {
  return state;
};
export default noteReducer;
