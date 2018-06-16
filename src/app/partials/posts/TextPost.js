import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {

  const { text, commentsNum, id, type } = props.post

  return (

    <Link to={`/post/${type}/${id}`}>
      <div className="row container">
        <div className="col s12">
          <div className="card #ffffff white">
            <div className="card-content">
              <p>{text}</p>
            </div>
            <div className="card-action">
              <span className='grey-text'>Text Post</span>
              <span className='right grey-text'>{`${commentsNum} Comments`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}





