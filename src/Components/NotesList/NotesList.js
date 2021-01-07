import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./NotesList.css";

const NotesList = ({ notes }) => {
  const notesList = notes.map((note) => <NoteCard note={note} key={note.id} />);
  return <div className="container demo-notes-list">{notesList}</div>;
};

export default NotesList;
