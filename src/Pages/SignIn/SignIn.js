import React, { Component } from "react";
import "./SignIn.css";

export default class SignIn extends Component {
  render() {
    return (
      <div className="container sign-in-container">
        <h1 className="sign-in-title center-align">Sign In.</h1>
        <p className="sign-in-description center-align">
          Enter your login details below to sign in.
        </p>
      </div>
    );
  }
}
