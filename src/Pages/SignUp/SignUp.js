import { Formik } from "formik";
import React, { Component } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./SignUp.css";
import * as Yup from "yup";

export default class SignUp extends Component {
  // Sign Up Page Component
  //
  // This page deals with the user Sign Up process. It uses formik to handle form input and validation.
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
      <div className="container sign-up-container">
        <h1 className="sign-up-title center-align">Sign Up.</h1>
        <p className="sign-up-description center-align">
          Enter your login details below to sign up.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, "Please Enter a valid name.")
              .required("Your name is required"),
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
            <form className="sign-up-form-container" onSubmit={handleSubmit}>
              {/* Name Input Field */}
              <div className="input-field">
                <i className="material-icons prefix">person</i>
                <input
                  id="name"
                  type="text"
                  className={
                    errors.name && touched.name
                      ? "invalid"
                      : touched.name && !errors.name
                      ? "valid"
                      : ""
                  }
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="name">Name</label>
                <span className="helper-text" data-error={errors.name}></span>
              </div>
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
              {/* Sign Up Button */}
              <div className="row center-align">
                <button
                  className="btn btn-large z-depth-2 waves-effect indigo darken-1 waves-light"
                  type="submit"
                  name="action"
                >
                  Sign Up
                  <i className="material-icons right">person_add</i>
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="row center-align sign-up-or-row">
          <h5 className="sign-up-or">OR</h5>
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
