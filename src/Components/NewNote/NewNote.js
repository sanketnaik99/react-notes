import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../store/actions/notesActions";
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
      Hello World! (obviously) <br /> Lorem ipsum dolor sit amet consectetur
      adipisicing elit.
    </p>,
  ];

  componentDidMount() {
    this.currentDescription = this.descriptions[Math.floor(Math.random() * 5)];
  }

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
    console.log(isValid);
    if (isValid) {
      this.props.addNote({
        title: this.state.title,
        content: this.state.content,
      });
      this.setState({
        title: "",
        content: "",
        titleErrorStatus: null,
        contentErrorStatus: null,
        titleErrorText: null,
        contentErrorText: null,
        titleSuccessText: null,
        contentSuccessText: null,
      });
    }
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

    this.setState({
      ...this.state,
      titleErrorStatus,
      contentErrorStatus,
      titleErrorText,
      contentErrorText,
      titleSuccessText,
      contentSuccessText,
    });

    if (
      titleErrorStatus === "TITLE_INVALID" ||
      contentErrorStatus === "CONTENT_INVALID"
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card new-note-card">
          <span className="card-title new-note-card-title">Add New Note</span>
          {/* <p className="new-note-description">
            Go ahead and write down your thoughts. This way you won't forget
            that{" "}
            <span className="new-note-description-bold">
              "Million Dollar Idea"
            </span>
            .
          </p> */}
          {this.currentDescription}
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
                  className="btn z-depth-2 hoverable waves-effect indigo darken-1 waves-light"
                  type="submit"
                  name="action"
                >
                  Done
                  <i className="material-icons right">check</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
  };
};

export default connect(null, mapDispatchToProps)(NewNote);
