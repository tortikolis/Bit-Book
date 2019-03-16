import React from 'react';
import { Link } from 'react-router-dom'

export const ImagePost = (props) => {

    const { imageUrl, type, commentsNum, id } = props.post;

    return (
       
            <div className="row container">
                <div className="col s12">
                <Link to={`/post/${type}/${id}`}>
                    <div className="card #ffffff white">
                        <div className="card-image">
                            <img src={imageUrl} alt='' />
                        </div>
                        <div className="card-action">
                            <span className='grey-text'>Image post</span>
                            <span className='right grey-text'>{`${commentsNum} Comments`}</span>
                        </div>
                    </div>
                 </Link>
                </div>
            </div>
        
    )
}


