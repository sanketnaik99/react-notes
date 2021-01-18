import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Notes extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/demo" />;
    }
    return <div>NOTES PAGE</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Notes);
