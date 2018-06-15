import React from 'react';

export const TextPostBody = (props) => {

    return(

        <div class="row content">
    <div class="col s12">
      <div class="card-panel white">
        <span >{props.post.text}
        </span>
      </div>
    </div>
  </div>
        
    )
}