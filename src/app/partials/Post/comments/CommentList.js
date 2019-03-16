import React from "react";
import { SingleComment } from "./SingleComment";

export const CommentList = props => {
  const { comments } = props;
  const commentList = comments.map((comment, key) => {
    return <SingleComment comment={comment} key={key} />;
  });

  return <ul className="collection">{commentList}</ul>;
};
