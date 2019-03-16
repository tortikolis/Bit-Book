import React from "react";

export const TextPostBody = props => {
  const { userId, deletePostOnClick, post, authorId } = props;

  const deletePostElement =
    authorId === userId ? (
      <span className="deletePostBtn" onClick={deletePostOnClick}>
        X
      </span>
    ) : null;

  return (
    <div className="row content">
      <div className="col s12">
        <div className="card-panel white">
          {deletePostElement}
          <span>{props.post.text}</span>
        </div>
      </div>
    </div>
  );
};
