import React from 'react';

export const TextPostBody = (props) => {

  return (

    <div className="row content">
      <div className="col s12">
        <div className="card-panel white">
          <span >{props.post.text}
          </span>
        </div>
      </div>
    </div>
  )
}