export const ADD_NOTE = "ADD_NOTE";

export const addNote = ({ title, content }) => {
  const newNote = {
    title: title,
    content: content,
  };

  return { type: ADD_NOTE, note: newNote };
};
