export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = ({ title, content }) => {
  const newNote = {
    title: title,
    content: content,
  };

  return { type: ADD_NOTE, note: newNote };
};

export const deleteNote = (id) => {
  return { type: DELETE_NOTE, id };
};
