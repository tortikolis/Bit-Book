import React from 'react';
import { Link } from 'react-router-dom'

export const ImagePost = (props) => {

    const { imageUrl, dateCreated, userId, userDisplayName, type, commentsNum } = props.post;

    return (
        <Link to='/post'>
            <div className="row container">
                <div className="col s12">
                    <div className="card #ffffff white">
                        <div className="card-image">
                            <img src={imageUrl} />
                        </div>
                        <div className="card-action">
                            <span className='grey-text'>Image post</span>
                            <span className='right grey-text'>{`${commentsNum} Comments`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}


