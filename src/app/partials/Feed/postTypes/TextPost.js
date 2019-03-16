import React from "react";
import { Link } from "react-router-dom";

export const TextPost = props => {
  const { text, commentsNum, id, type } = props.post;
  const url = `/post/${type}/${id}`;
  const commentsNumText = `${commentsNum} Comments`;

  return (
    <li>
      <div className="row container">
        <div className="col s12">
          <Link to={url}>
            <div className="card #ffffff white">
              <div className="card-content">
                <p>{text}</p>
              </div>
              <div className="card-action">
                <span className="grey-text">Text Post</span>
                <span className="right grey-text">{commentsNumText}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};
