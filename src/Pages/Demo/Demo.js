import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NewNote from "../../Components/NewNote/NewNote";
import NotesList from "../../Components/NotesList/NotesList";
import { NOTES_ROUTE } from "../../routes";

class Demo extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to={NOTES_ROUTE} />;
    }
    return (
      <div>
        <NewNote />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    notes: state.demo.notes,
  };
};

export default connect(mapStateToProps, null)(Demo);
