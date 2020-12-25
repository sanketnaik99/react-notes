/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NoteCard = ({ note }) => {
  const colors = [
    "teal darken-3",
    "blue-grey darken-3",
    "grey darken-3",
    "cyan darken-3",
    "indigo darken-1",
    "blue darken-3",
  ];

  const cardColor = colors[Math.floor(Math.random() * 6)];

  return (
    <div className="row">
      <div className="col hide-on-small-only m2"></div>
      <div className="col s12 m8">
        <div className="card indigo darken-1 z-depth-2 hoverable">
          <div className="card-content white-text">
            <span className="card-title demo-note-title">{note.title}</span>
            <p>{note.content}</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light red btn-small">
              <i className="material-icons left">delete</i>Delete
            </a>
          </div>
        </div>
      </div>
      <div className="col hide-on-small-only m2"></div>
    </div>
  );
};

export default NoteCard;
