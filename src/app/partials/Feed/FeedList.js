import React, { Component } from "react";

import { VideoPost } from "./postTypes/VideoPost";
import { TextPost } from "./postTypes/TextPost";
import { ImagePost } from "./postTypes/ImagePost";
import { EmptyFeedMessage } from "./EmptyFeedMessage";

export class FeedList extends Component {
  choosePostTypes = (postType, post, key) => {
    if (postType === "video") {
      return <VideoPost key={key} post={post} />;
    } else if (postType === "text") {
      return <TextPost key={key} post={post} />;
    } else {
      return <ImagePost key={key} post={post} />;
    }
  };

  createPostList = type => {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((post, key) => {
          if (!type) {
            return this.choosePostTypes(post.type, post, key);
          }

          if (type === "text" && post.type === "text") {
            return this.choosePostTypes(post.type, post, key);
          }

          if (type === "image" && post.type === "image") {
            return this.choosePostTypes(post.type, post, key);
          }

          if (type === "video" && post.type === "video") {
            return this.choosePostTypes(post.type, post, key);
          }
        })}
      </ul>
    );
  };

  render() {
    const { posts, selectedOption } = this.props;

    if (!posts.length) {
      return <EmptyFeedMessage />;
    }

    return this.createPostList(selectedOption);
  }
}
