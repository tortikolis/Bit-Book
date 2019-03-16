import React, { Component } from "react";
import { fetchUser } from "../../../../services/userService";

export class SingleComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    const { authorId } = this.props.comment;
    fetchUser(authorId).then(user => {
      this.setState({ user: user });
    });
  }

  render() {
    const { authorName, body } = this.props.comment;
    const { avatarUrl } = this.state.user;

    return (
      <li className="collection-item avatar comment">
        <img src={avatarUrl} alt="" className="circle" />
        <span className="title username">{authorName}</span>
        <p>{body}</p>
      </li>
    );
  }
}
