import { Formik } from "formik";
import React, { Component } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./SignIn.css";
import * as Yup from "yup";

export default class SignIn extends Component {
  // Sign In Page Component
  //
  // This page deals with the user Sign in process. It uses formik to handle form input and validation.
  //
  state = {};

  handleSubmit = (data) => {
    console.log(data);
    console.log("Form Submitted");
  };

  googleLogin = () => {
    console.log("Google Login Clicked");
  };

  render() {
    return (
      <div className="container sign-in-container">
        <h1 className="sign-in-title center-align">Sign In.</h1>
        <p className="sign-in-description center-align">
          Enter your login details below to sign in.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("The email address that you have entered is invalid.")
              .min(3, "The email must be atleast 3 characters long")
              .required("An email is required"),
            password: Yup.string()
              .min(8, "The password must be atleast 8 characters long.")
              .required("A password is required"),
          })}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="sign-in-form-container" onSubmit={handleSubmit}>
              {/* Email Input Field */}
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="text"
                  className={
                    errors.email && touched.email
                      ? "invalid"
                      : touched.email && !errors.email
                      ? "valid"
                      : ""
                  }
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error={errors.email}></span>
              </div>
              {/* Password Input Field */}
              <div className="input-field">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password"
                  type="password"
                  className={
                    errors.password && touched.password
                      ? "invalid"
                      : !errors.password && touched.password
                      ? "valid"
                      : ""
                  }
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error={errors.password}
                ></span>
              </div>
              {/* Sign In Button */}
              <div className="row center-align">
                <button
                  className="btn btn-large z-depth-2 waves-effect indigo darken-1 waves-light"
                  type="submit"
                  name="action"
                >
                  Sign In
                  <i className="material-icons right">login</i>
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="row center-align sign-in-or-row">
          <h5 className="sign-in-or">OR</h5>
        </div>
        <div className="row center-align google-login-row">
          <GoogleLoginButton
            align="center"
            style={{ background: "#3949ab" }}
            activeStyle={{ background: "#283593" }}
            onClick={this.googleLogin}
          />
        </div>
      </div>
    );
  }
}
