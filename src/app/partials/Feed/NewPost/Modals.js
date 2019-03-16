import React, { Component, Fragment } from "react";
import { postText, postImage, postVideo } from "../../../../services/postFetch";
import { ModalForm } from "./ModalForm";

export class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: "",
      inputImageValue: "",
      inputVideoValue: "",
      errorMessage: ""
    };
  }

  onCloseModal = event => {
    if (event.target.classList.contains("modal-holder")) {
      this.props.closeModal();
    }
  };

  inputTextHandler = event => {
    event.preventDefault();
    this.setState({ inputTextValue: event.target.value });
  };

  inputImageHandler = event => {
    event.preventDefault();
    this.setState({ inputImageValue: event.target.value });
  };

  inputVideoHandler = event => {
    event.preventDefault();
    this.setState({ inputVideoValue: event.target.value });
  };

  validateForm = () => {
    const { buttonType } = this.props;
    const { inputImageValue, inputTextValue, inputVideoValue } = this.state;
    if (buttonType === "text") {
      if (!inputTextValue) {
        this.setState({
          errorMessage: "Input invalid, please enter something"
        });
        return false;
      } else {
        this.emptyErrorMessage();
        return buttonType;
      }
    }
    if (buttonType === "image") {
      if (!inputImageValue) {
        this.setState({
          errorMessage: "Input invalid, please enter something"
        });
      } else if (
        !inputImageValue.includes(
          ".jpg" || ".png" || ".svg" || ".gif" || ".bmp" || ".jpeg"
        )
      ) {
        this.setState({
          errorMessage: "Input invalid, please enter valid img format"
        });
        return false;
      } else {
        this.emptyErrorMessage();
        return buttonType;
      }
    }
    if (buttonType === "video") {
      if (
        !inputVideoValue ||
        !inputVideoValue.includes("https://www.youtube.com/watch?v=")
      ) {
        this.setState({
          errorMessage: "Input invalid, please enter valid youtube url"
        });
        return false;
      } else {
        this.emptyErrorMessage();
        return buttonType;
      }
    }
  };

  emptyErrorMessage = () => {
    this.setState({ errorMessage: "" });
  };

  createTextPost = () => {
    postText({ text: this.state.inputTextValue }).then(() =>
      this.props.changeState()
    );
  };

  createImagePost = () => {
    postImage({ imageUrl: this.state.inputImageValue }).then(() =>
      this.props.changeState()
    );
  };

  createVideoPost = () => {
    let embedUrl = this.state.inputVideoValue.replace("watch?v=", "embed/");
    postVideo({ videoUrl: embedUrl }).then(() => this.props.changeState());
  };

  createPost = event => {
    event.preventDefault();
    let postType = this.validateForm();
    if (postType) {
      postType === "text" && this.createTextPost();
      postType === "image" && this.createImagePost();
      postType === "video" && this.createVideoPost();
      this.props.closeModal();
    }
  };

  renderForm = buttonType => {
    if (buttonType === "text") {
      return (
        <ModalForm
          postType="text"
          className="inputText"
          onChangeHandler={this.inputTextHandler}
          error={this.state.errorMessage}
        />
      );
    } else if (buttonType === "image") {
      return (
        <ModalForm
          postType="image"
          className="inputImage"
          onChangeHandler={this.inputImageHandler}
          error={this.state.errorMessage}
        />
      );
    } else if (buttonType === "video") {
      return (
        <ModalForm
          postType="video"
          className="inputVideo"
          onChangeHandler={this.inputVideoHandler}
          error={this.state.errorMessage}
        />
      );
    }
  };

  render() {
    const { buttonType, closeModal } = this.props;
    if (!buttonType) {
      return null;
    }
    return (
      <Fragment>
        <div className="modal-holder" onClick={this.onCloseModal}>
          <div className="modal open" id="show-modal">
            <div className="modal-content">
              <span className="modal-exit" onClick={closeModal}>
                {" "}
                X{" "}
              </span>
              {this.renderForm(buttonType)}
              <div className="modal-footer">
                <a
                  href="#"
                  className="modal-close waves-effect waves-green btn btn"
                  onClick={this.createPost}
                >
                  POST
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
