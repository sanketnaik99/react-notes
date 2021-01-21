import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewNote from "../../Components/NewNote/NewNote";
import {
  addUserNote,
  deleteUserNote,
  getUserNotes,
  STOP_LOADING_GET_NOTES,
} from "../../store/actions/userNotesActions";
import { DEMO_PAGE_ROUTE } from "../../routes";
import "./Notes.css";
import NotesList from "../../Components/NotesList/NotesList";
import nothingFound from "../../nothing-found.png";

class Notes extends Component {
  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getNotes(this.props.auth.uid);
    }
  }

  componentDidUpdate() {
    if (this.props.notes) {
      this.props.stopLoading();
    }
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to={DEMO_PAGE_ROUTE} />;
    }
    const noteList =
      this.props.notes && this.props.notes.length > 0 ? (
        <NotesList
          notes={this.props.notes}
          deleteNote={this.props.deleteNote}
        />
      ) : (
        <div className="row center-align">
          <img src={nothingFound} alt="No Notes Found" />
          <h4 className="nothing-found-title">Your Notes List is Empty</h4>
          <p className="nothing-found-description">
            Looks like you don't have any notes. Fill the form above to add new
            notes.
          </p>
        </div>
      );
    return (
      <div>
        <NewNote addNote={(note) => this.props.addNote(note)} />
        {this.props.isLoading ? (
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        ) : this.props.notes ? (
          noteList
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    isLoading: state.userNotes.loadingGetNotes,
    notes: state.firestore.ordered[Object.keys(state.firestore.ordered)[0]],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addUserNote(note)),
    getNotes: (uid) => dispatch(getUserNotes(uid)),
    deleteNote: (id) => dispatch(deleteUserNote(id)),
    stopLoading: () => dispatch({ type: STOP_LOADING_GET_NOTES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
