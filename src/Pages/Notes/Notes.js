import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewNote from "../../Components/NewNote/NewNote";
import { addUserNote } from "../../store/actions/userNotesActions";

class Notes extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/demo" />;
    }
    return (
      <div>
        <NewNote addNote={(note) => this.props.addNote(note)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addUserNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
