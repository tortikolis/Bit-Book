import React from 'react';

export const TextPostBody = (props) => {

  console.log(props.authorId);
  console.log(props.userId);
  return (
    
    <div className="row content">
      <div className="col s12">
        <div className="card-panel white">
        {props.authorId === props.userId ? <span className="deletePostBtn" onClick={props.deletePostOnClick}>X</span> : <span></span>}
          <span >{props.post.text}
          </span>
        </div>
      </div>
    </div>
  )
}