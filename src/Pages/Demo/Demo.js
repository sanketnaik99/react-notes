import React, { Component } from "react";
import { connect } from "react-redux";
import NewNote from "../../Components/NewNote/NewNote";
import NotesList from "../../Components/NotesList/NotesList";

class Demo extends Component {
  render() {
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
    notes: state.demo.notes,
  };
};

export default connect(mapStateToProps, null)(Demo);
