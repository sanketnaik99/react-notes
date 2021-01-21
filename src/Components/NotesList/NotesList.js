import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./NotesList.css";

const NotesList = ({ notes, deleteNote }) => {
  const notesList = notes.map((note) => (
    <NoteCard note={note} key={note.id} deleteNote={deleteNote} />
  ));
  return <div className="container demo-notes-list">{notesList}</div>;
};

export default NotesList;
