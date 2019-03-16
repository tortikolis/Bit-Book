import React, { Component } from "react";
import { ImagePostBody } from "./postBody/ImagePostBody";
import { VideoPostBody } from "./postBody/VideoPostBody";
import { TextPostBody } from "./postBody/TextPostBody";
import { CommentList } from "./comments/CommentList";
import { getComments } from "../../../services/commentFetch";
import {
  getVideoPost,
  getImagePost,
  getTextPost,
  deletePost
} from "../../../services/postFetch";
import { CommentForm } from "./comments/CommentForm";
import { Loading } from "../Loading";
import { postComment } from "../../../services/commentFetch";
import { fetchProfile } from "../../../services/userService";

export class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      comments: [],
      commentInput: "",
      profile: null
    };
  }

  componentDidMount() {
    const { type } = this.props.match.params;

    if (type === "video") {
      this.getVideoPostData();
    } else if (type === "image") {
      this.getImagePostData();
    } else {
      this.getTextPostData();
    }

    this.getCommentsData();
    this.getProfileInfo();
  }

  getProfileInfo = () => {
    fetchProfile().then(profileInfo => {
      this.setState({
        profile: profileInfo
      });
    });
  };

  getVideoPostData = () => {
    const { id } = this.props.match.params;

    getVideoPost(id).then(videoPost => {
      this.setState({
        post: videoPost
      });
    });
  };

  getImagePostData = () => {
    const { id } = this.props.match.params;

    getImagePost(id).then(imagePost => {
      this.setState({
        post: imagePost
      });
    });
  };

  getTextPostData = () => {
    const { id } = this.props.match.params;

    getTextPost(id).then(textPost => {
      this.setState({
        post: textPost
      });
    });
  };

  getCommentsData = () => {
    const { id } = this.props.match.params;

    getComments(id).then(commentList => {
      this.setState({
        comments: commentList
      });
    });
  };

  deletePostOnClick = () => {
    const id = this.props.match.params.id;
    deletePost(id).then(() => this.props.history.push("/feed"));
  };

  commentInputHandler = event => {
    this.setState({ commentInput: event.target.value });
  };

  sendComment = comment => {
    const { id } = this.props.match.params;
    const { authorId } = this.state.profile;

    const content = {
      body: comment,
      postId: id,
      authorId: authorId
    };
    postComment(content).then(() => this.getCommentsData());
  };

  render() {
    const { comments, post, profile } = this.state;
    const postType = post.type;
    const postId = post.id;
    const profileId = profile.id;

    if (!post || !profile) {
      return <Loading />;
    }

    return (
      <div className="container">
        {postType === "text" && (
          <TextPostBody
            post={post}
            deletePostOnClick={this.deletePostOnClick}
            authorId={postId}
            userId={profileId}
          />
        )}
        {postType === "image" && (
          <ImagePostBody
            post={post}
            deletePostOnClick={this.deletePostOnClick}
            authorId={postId}
            userId={profileId}
          />
        )}
        {postType === "video" && (
          <VideoPostBody
            post={post}
            deletePostOnClick={this.deletePostOnClick}
            authorId={postId}
            userId={profileId}
          />
        )}
        <CommentForm sendComment={this.sendComment} />
        <CommentList comments={comments} />
      </div>
    );
  }
}
