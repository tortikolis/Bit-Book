import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {

  const { text, commentsNum } = props.post

  return (

    <Link to='/post'>
      <div className="row container">
        <div className="col s12">
          <div className="card #ffffff white">
            <div className="card-content">
              <p>{props.post.text}</p>
            </div>
            <div className="card-action">
              <span className='grey-text'>Text Post</span>
              <span className='right grey-text'>{`${props.post.commentsNum} Comments`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )

}





