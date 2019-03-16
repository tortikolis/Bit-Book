import React from "react";

export const ImagePostBody = props => {
  const { userId, deletePostOnClick, post, authorId } = props;

  const deletePostElement =
    authorId === userId ? (
      <span className="deleteImagePostBtn" onClick={deletePostOnClick}>
        X
      </span>
    ) : null;

  return (
    <div className="row content">
      <div className="col s12 ">
        <div className="card">
          <div className="card-image">
            {deletePostElement}
            <img src={post.imageUrl} alt="post content" />
          </div>
        </div>
      </div>
    </div>
  );
};
