import { ADD_NOTE } from "../actions/notesActions";

const initialState = {
  notes: [
    {
      id: "12345",
      title: "Hello World",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quia magnam temporibus voluptatum vero dolorem assumenda praesentium, saepe reiciendis. Perspiciatis sed consequuntur corrupti. Voluptates blanditiis suscipit voluptatem saepe sapiente velit.",
      createdAt: Date.now().toString(),
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        title: action.note.title,
        content: action.note.content,
        id:
          Date.now().toString() +
          (Math.floor(Math.random() * 1000) + 1).toString(),
        createdAt: Date.now().toString(),
      };
      return { ...state, notes: [...state.notes, newNote] };
    default:
      return state;
  }
};

export default notesReducer;
