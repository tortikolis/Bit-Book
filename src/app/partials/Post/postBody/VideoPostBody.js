import React from "react";

export const VideoPostBody = props => {
  const { userId, deletePostOnClick, post, authorId } = props;

  const deletePostElement =
    authorId === userId ? (
      <span className="deleteImagePostBtn" onClick={deletePostOnClick}>
        X
      </span>
    ) : null;

  return (
    <div className="row content">
      <div className="col s12">
        {deletePostElement}
        <div className="video-container">
          <iframe
            src={post.videoUrl}
            title="video-post-body"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
