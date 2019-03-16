import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { uploadUserImage, uploadUser } from "../../../../services/userService";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullNameValue: "",
      descriptionValue: "",
      imageUrlValue: "",
      selectedImage: null,
      imageIsUploaded: false
    };
  }

  updateNameValue = event => {
    this.setState({ fullNameValue: event.target.value });
  };

  updateDescriptionValue = event => {
    this.setState({ descriptionValue: event.target.value });
  };

  updateImageUrlValue = event => {
    this.setState({ imageUrlValue: event.target.value });
  };

  fileChangedHandler = event => {
    this.setState({ selectedImage: event.target.files[0] });
  };

  uploadHandler = () => {
    const { selectedImage } = this.state;

    uploadUserImage(selectedImage).then(image => {
      this.setState({ imageUrlValue: image, imageIsUploaded: true });
    });
  };

  fetchProfile = () => {
    const { fullNameValue, descriptionValue, imageUrlValue } = this.state;

    uploadUser(fullNameValue, descriptionValue, imageUrlValue).then(user => {
      this.props.getUser();
      this.setState({ imageIsUploaded: true });
    });
  };

  updateProfile = () => {
    const { selectedImage } = this.state;
    const { onCloseModal } = this.props;

    this.fetchProfile();
    selectedImage && this.uploadHandler();
    onCloseModal();
    this.setState({ imageIsUploaded: false, localImageIsUploaded: false });
  };

  closeModal = () => {
    const { onCloseModal } = this.props;

    onCloseModal();
    this.setState({ imageIsUploaded: false });
  };

  updateState = () => {
    const { name, aboutShort, avatarUrl } = this.props.user;

    this.setState({
      fullNameValue: name,
      descriptionValue: aboutShort,
      imageUrlValue: avatarUrl
    });
  };

  componentWillReceiveProps() {
    this.updateState();
  }

  render() {
    const { isModalActive, user } = this.props;
    const {
      selectedImage,
      fullNameValue,
      imageUrlValue,
      imageIsUploaded,
      descriptionValue
    } = this.state;
    const { avatarUrl } = user;
    const imageFileClassName = `waves-effect waves-light btn ${
      selectedImage ? "" : "disabled"
    }`;
    const imageUrlClassName = `${imageIsUploaded ? "none" : "block"}`;

    if (!isModalActive) {
      return null;
    }

    return (
      <Fragment>
        <div className="modal-holder">
          <div className="modal open" id="show-modal">
            <div className="modal-content" id="updateProfileWraper">
              <h4>Update Profile</h4>
              <div className="row">
                <div className="col s12">
                  <div className="card horizontal" id="updateProfileHolder">
                    <div className="row">
                      <div className="col s4">
                        <div className="card-image" id="updateProfileImg">
                          <img src={avatarUrl} alt="profile img" />
                          <input
                            type="file"
                            onChange={this.fileChangedHandler}
                            id="uploadImageInput"
                          />
                          <a
                            className={imageFileClassName}
                            id="uploadBtn"
                            onClick={this.uploadHandler}
                          >
                            Upload
                          </a>
                        </div>
                      </div>
                      <div className="col s8">
                        <div className="card-stacked">
                          <div className="card-content" id="nameInputHolder">
                            <label htmlFor="name">Name</label>
                            <input
                              value={fullNameValue}
                              id="name"
                              type="text"
                              className="validate"
                              onChange={this.updateNameValue}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12">
                        <input
                          value={imageUrlValue}
                          id="imageUrl"
                          type="text"
                          className={imageUrlClassName}
                          onChange={this.updateImageUrlValue}
                        />
                        <input
                          value={descriptionValue}
                          id="description"
                          type="text"
                          className="validate"
                          onChange={this.updateDescriptionValue}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer" id="updateProfileFooter">
                <Link
                  to="/profile"
                  className="modal-close waves-effect waves red btn close-btn"
                  onClick={this.closeModal}
                >
                  Close
                </Link>
                <Link
                  to="/profile"
                  className="modal-close waves-effect waves-green btn"
                  onClick={this.updateProfile}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
