import React, { Component, Fragment } from "react";
import { fetchProfile } from "../../../services/userService";
import { Modal } from "./partials/Modal";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isModalActive: false,
      selectedImage: null
    };
  }

  getUser = () => {
    fetchProfile().then(user => {
      this.setState({ user: user });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  resetButtonType = () => {
    this.setState({ isModalActive: false });
  };

  clickedBtn = () => {
    this.setState({ isModalActive: true });
  };

  render() {
    const { user, isModalActive } = this.state;
    const { name, aboutShort, avatarUrl, postsCount, commentsCount } = user;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="profile-holder">
                <img
                  src={avatarUrl}
                  className="profile-img"
                  alt="profile img"
                />

                <h2>{name}</h2>
                <a
                  className="waves-effect waves-light btn-flat modal-trigger"
                  onClick={this.clickedBtn}
                >
                  Edit Profile
                </a>
                <p className="profile-about">{aboutShort}</p>
                <div className="row">
                  <div className="col s12 m6">
                    <div className="comment-holder">
                      <i className="material-icons">face</i>
                      <span>{postsCount} posts</span>
                    </div>
                  </div>
                  <div className="col s12 m6">
                    <div className="comment-holder">
                      <i className="material-icons">copyright</i>
                      <span>{commentsCount} comments</span>
                    </div>
                  </div>
                </div>
                <Modal
                  isModalActive={isModalActive}
                  onCloseModal={this.resetButtonType}
                  user={user}
                  getUser={this.getUser}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
