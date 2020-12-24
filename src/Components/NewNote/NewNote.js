import React, { Component } from "react";
import "./NewNote.css";

class NewNote extends Component {
  state = {
    title: "",
    content: "",
    titleErrorStatus: null,
    contentErrorStatus: null,
    titleErrorText: null,
    contentErrorText: null,
    titleSuccessText: null,
    contentSuccessText: null,
  };

  handleTitleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  handleTextAreaChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      ...this.state,
      titleErrorStatus: "TITLE_INVALID",
      titleErrorText: "The title that you have entered is not long enough",
    });
    const isValid = this.validate();
    console.log(this.state);
  };

  validate = () => {
    let titleErrorStatus = "";
    let contentErrorStatus = "";
    let titleErrorText = "";
    let contentErrorText = "";
    let titleSuccessText = "";
    let contentSuccessText = "";

    if (this.state.title.length < 3) {
      titleErrorStatus = "TITLE_INVALID";
      titleErrorText = "Please enter a valid title.";
    } else {
      titleErrorStatus = "TITLE_VALID";
      titleSuccessText = "Looks Good.";
    }

    if (this.state.content.length < 20) {
      contentErrorStatus = "CONTENT_INVALID";
      contentErrorText = "Please enter valid content.";
    } else {
      contentErrorStatus = "CONTENT_VALID";
      contentSuccessText = "Looks Good.";
    }

    if (titleErrorStatus !== "" || contentErrorStatus !== "") {
      this.setState({
        ...this.state,
        titleErrorStatus,
        contentErrorStatus,
        titleErrorText,
        contentErrorText,
        titleSuccessText,
        contentSuccessText,
      });
    }

    return true;
  };

  render() {
    return (
      <div className="container">
        <div className="card new-note-card">
          <span className="card-title new-note-card-title">Add New Note</span>
          <p className="new-note-description">
            Go ahead and write down your thoughts. This way you won't forget
            that <strong>"Million Dollar Idea"</strong>.
          </p>
          <div className="card-content new-note-card-content">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input
                  id="title"
                  type="text"
                  className={
                    this.state.titleErrorStatus === "TITLE_INVALID"
                      ? "invalid"
                      : this.state.titleErrorStatus === "TITLE_VALID"
                      ? "valid"
                      : ""
                  }
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
                <label htmlFor="title">Title</label>
                <span
                  className="helper-text"
                  data-success={this.state.titleSuccessText}
                  data-error={this.state.titleErrorText}
                ></span>
              </div>
              <div className="input-field">
                <textarea
                  id="content"
                  className={[
                    "materialize-textarea",
                    this.state.contentErrorStatus === "CONTENT_INVALID"
                      ? "invalid"
                      : this.state.contentErrorStatus === "CONTENT_VALID"
                      ? "valid"
                      : "",
                  ].join(" ")}
                  value={this.state.content}
                  onChange={this.handleTextAreaChange}
                ></textarea>
                <label htmlFor="content">Content</label>
                <span
                  className="helper-text"
                  data-error={this.state.contentErrorText ?? null}
                  data-success={this.state.contentSuccessText ?? null}
                ></span>
              </div>
              <div className="row right-align">
                <button
                  className="btn waves-effect blue waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
