import { Formik } from "formik";
import React, { Component } from "react";
import "./NewNote.css";
import * as Yup from "yup";

class NewNote extends Component {
  state = {};

  descriptions = [
    <p className="new-note-description">
      Go ahead and write down your thoughts. This way you won't forget that{" "}
      <span className="new-note-description-bold">"Million Dollar Idea"</span>.
    </p>,
    <p className="new-note-description">
      Write down your thoughts here. Alternatively, you can randomly mash your
      keyboard keys to test this out.
    </p>,
    <p className="new-note-description">
      You know how this works right? Fill out the text fields and click the
      button. <span className="new-note-description-bold">EASY</span>.
    </p>,
    <p className="new-note-description">
      Hint: refresh this page to see a different description :)
    </p>,
    <p className="new-note-description">
      Here's some text for you to copy and paste into the fields below. <br />{" "}
      Title: Hello World! (obviously) <br />
      Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>,
  ];

  componentDidMount() {
    this.setState({
      currentDescription: this.descriptions[Math.floor(Math.random() * 5)],
    });
  }

  handleSubmit = (data, { resetForm }) => {
    console.log(data);
    this.props.addNote(data);
    resetForm({ values: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card new-note-card">
              <span className="card-title new-note-card-title">
                Add New Note
              </span>
              {this.state.currentDescription}
              <div className="card-content new-note-card-content">
                <Formik
                  initialValues={{ title: "", content: "" }}
                  validationSchema={Yup.object({
                    title: Yup.string()
                      .min(3, "Please enter a valid title.")
                      .required("A title for the note is required."),
                    content: Yup.string()
                      .min(20, "Please enter some valid content.")
                      .required("Some Content for the note is required."),
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
                    <form onSubmit={handleSubmit}>
                      <div className="input-field">
                        <input
                          id="title"
                          type="text"
                          className={
                            errors.title && touched.title
                              ? "invalid"
                              : touched.title && !errors.title
                              ? "valid"
                              : ""
                          }
                          value={values.title}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <label htmlFor="title">Title</label>
                        <span
                          className="helper-text"
                          data-error={errors.title}
                        ></span>
                      </div>
                      <div className="input-field">
                        <textarea
                          id="content"
                          className={[
                            "materialize-textarea",
                            errors.content && touched.content
                              ? "invalid"
                              : touched.content && !errors.content
                              ? "valid"
                              : "",
                          ].join(" ")}
                          value={values.content}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="content">Content</label>
                        <span
                          className="helper-text"
                          data-error={errors.content}
                        ></span>
                      </div>
                      <div className="row right-align">
                        <button
                          className="btn z-depth-2 hoverable waves-effect indigo darken-1 waves-light"
                          type="submit"
                          name="action"
                        >
                          Done
                          <i className="material-icons right">check</i>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
