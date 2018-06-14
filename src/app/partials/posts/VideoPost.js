import React from 'react';
import { Link } from 'react-router-dom'

export const VideoPost = (props) => {

  const { videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = props.post

  return (
    <Link to='/post'>
      <div className="row container">
        <div className="col s12">
          <div className="card #ffffff white">
            <div className='video-container'>
              <div className="video-container">
                <iframe src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>

            <div className="card-action">
              <span className='grey-text'>Video post</span>
              <span className='right grey-text'>{`${commentsNum} Comments`}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}

