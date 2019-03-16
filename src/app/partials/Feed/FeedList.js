import React, { Component } from "react";

import { VideoPost } from "./postTypes/VideoPost";
import { TextPost } from "./postTypes/TextPost";
import { ImagePost } from "./postTypes/ImagePost";
import { EmptyFeedMessage } from "./EmptyFeedMessage";

export class FeedList extends Component {
  render() {
    const { posts, selectedOption } = this.props;

    if (!posts.length) {
      return <EmptyFeedMessage />;
    }
    if (!selectedOption) {
      return (
        <div>
          {posts.map((post, key) => {
            if (post.type === "video") {
              return <VideoPost key={key} post={post} />;
            } else if (post.type === "text") {
              return <TextPost key={key} post={post} />;
            } else {
              return <ImagePost key={key} post={post} />;
            }
          })}
        </div>
      );
    }

    if (selectedOption === "text") {
      return (
        <div>
          {posts.map((post, key) => {
            if (post.type === "text") {
              return <TextPost key={key} post={post} />;
            }
          })}
        </div>
      );
    }

    if (selectedOption === "image") {
      return (
        <div>
          {posts.map((post, key) => {
            if (post.type === "image") {
              return <ImagePost key={key} post={post} />;
            }
          })}
        </div>
      );
    }

    if (selectedOption === "video") {
      return (
        <div>
          {posts.map((post, key) => {
            if (post.type === "video") {
              return <VideoPost key={key} post={post} />;
            }
          })}
        </div>
      );
    }
  }
}
