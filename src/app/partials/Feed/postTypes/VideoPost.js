import React from "react";
import { Link } from "react-router-dom";

export const VideoPost = props => {
  const { videoUrl, id, type, commentsNum } = props.post;
  const url = `/post/${type}/${id}`;
  const commentsNumText = `${commentsNum} Comments`;

  return (
    <li>
      <div className="row container">
        <div className="col s12">
          <Link to={url}>
            <div className="card #ffffff white">
              <div className="video-container">
                <div className="video-container">
                  <iframe
                    src={videoUrl}
                    title="video-post"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="card-action">
                <span className="grey-text">Video post</span>
                <span className="right grey-text">{commentsNumText}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};
